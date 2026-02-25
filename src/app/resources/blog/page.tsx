import Image from 'next/image'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { getChannelVideos } from '@/lib/youtube'
import { VideoCarousel } from '@/components/video-carousel'
import { posts } from '@/lib/blog'

const categoryColor: Record<string, string> = {
  Prevention: 'bg-emerald-100 text-emerald-700',
  Nutrition: 'bg-amber-100 text-amber-700',
  Lifestyle: 'bg-sky-100 text-sky-700',
  Mindset: 'bg-violet-100 text-violet-700',
  Survivorship: 'bg-rose-100 text-rose-700',
  Education: 'bg-indigo-100 text-indigo-700',
  Community: 'bg-orange-100 text-orange-700',
  Health: 'bg-teal-100 text-teal-700',
}

function Badge({ category }: { category: string }) {
  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColor[category] ?? 'bg-stone-100 text-stone-600'}`}>
      {category}
    </span>
  )
}

export default async function BlogPage() {
  const videos = await getChannelVideos(12)

  const [featuredPost, ...restPosts] = posts

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">Blog</h1>
              <p className="mt-3 text-lg text-stone-500">Insights, guidance, and real talk for the cancer journey.</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              <Link href={`/resources/blog/${featuredPost.slug}`} className="lg:col-span-3 group">
                <Card hover className="h-full !p-0 overflow-hidden">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    {featuredPost.image ? (
                      <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-50 to-stone-100" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge category={featuredPost.category} />
                      <span className="text-xs text-stone-400">{featuredPost.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-stone-900 group-hover:text-primary-600 transition-colors leading-snug mb-2">
                      {featuredPost.title}
                    </h2>
                    <p className="text-sm text-stone-500 leading-relaxed">{featuredPost.excerpt}</p>
                  </div>
                </Card>
              </Link>

              <div className="lg:col-span-2 flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider">More Articles</h3>
                {restPosts.slice(0, 3).map((post) => (
                  <Link key={post.slug} href={`/resources/blog/${post.slug}`} className="group">
                    <Card hover className="!p-0 overflow-hidden">
                      <div className="flex gap-4 p-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden relative shrink-0">
                          {post.image ? (
                            <Image src={post.image} alt={post.title} fill className="object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-200" />
                          )}
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <h4 className="text-sm font-semibold text-stone-900 group-hover:text-primary-600 transition-colors leading-snug line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1.5">
                            <Badge category={post.category} />
                            <span className="text-xs text-stone-400">{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <VideoCarousel videos={videos} />
        </Section>
      </main>
      <Footer />
    </>
  )
}
