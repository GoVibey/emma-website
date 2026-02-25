export interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
}

export async function getChannelVideos(maxResults = 12): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY
  const channelId = process.env.YOUTUBE_CHANNEL_ID

  if (!apiKey || !channelId) return []

  const uploadsPlaylistId = 'UU' + channelId.slice(2)

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`

  const res = await fetch(url, { next: { revalidate: 3600 } })

  if (!res.ok) return []

  const data = await res.json()

  return (data.items ?? []).map((item: any) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails?.high?.url ?? item.snippet.thumbnails?.medium?.url ?? '',
  }))
}
