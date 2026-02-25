'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Youtube, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Video {
  id: string
  title: string
  thumbnail: string
}

export function VideoCarousel({ videos }: { videos: Video[] }) {
  const [index, setIndex] = useState(0)
  const visibleCount = 3
  const maxIndex = Math.max(0, videos.length - visibleCount)

  if (videos.length === 0) return null

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Youtube className="h-6 w-6 text-red-600" />
          <h3 className="text-2xl font-bold text-stone-900">Videos from Emma</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIndex(i => Math.max(0, i - 1))}
            disabled={index === 0}
            className="p-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIndex(i => Math.min(maxIndex, i + 1))}
            disabled={index === maxIndex}
            className="p-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-6 items-stretch transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
        >
          {videos.map((video, i) => (
            <div key={i} className="w-[calc((100%-48px)/3)] flex-shrink-0 h-full">
                    <Card hover className="!p-0 overflow-hidden flex flex-col h-full">
                      <div className="aspect-video bg-stone-900 rounded-t-2xl overflow-hidden flex-shrink-0">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-semibold text-stone-900 line-clamp-2 min-h-[2.5rem]">{video.title}</h4>
                      </div>
                    </Card>
                  </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="https://www.youtube.com/@WeilEmma"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-xl transition-colors"
        >
          <Youtube className="h-4 w-4" />
          Subscribe on YouTube
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}
