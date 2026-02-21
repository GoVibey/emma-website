import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Section, SectionHeader } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Clock, Eye, ArrowRight, Youtube } from 'lucide-react'

const categories = ['All', 'Foundations', 'Mindset', 'Habits', 'Productivity', 'Community']

const videos = [
  { title: 'How to Build Habits That Actually Stick', views: '45K', duration: '12:34', category: 'Habits', featured: true },
  { title: '5 Mindset Shifts That Changed My Life', views: '38K', duration: '15:02', category: 'Mindset', featured: true },
  { title: 'The Power of Community Learning', views: '22K', duration: '10:18', category: 'Community', featured: false },
  { title: 'Morning Routine for Maximum Productivity', views: '31K', duration: '8:45', category: 'Productivity', featured: false },
  { title: 'Getting Started: Your First 30 Days', views: '56K', duration: '18:22', category: 'Foundations', featured: true },
  { title: 'Why Most People Quit (And How Not To)', views: '27K', duration: '11:56', category: 'Mindset', featured: false },
  { title: 'Setting Goals That Actually Work', views: '19K', duration: '14:30', category: 'Productivity', featured: false },
  { title: 'Finding Your Learning Style', views: '15K', duration: '9:12', category: 'Foundations', featured: false },
  { title: 'The Accountability Secret', views: '20K', duration: '7:45', category: 'Community', featured: false },
]

export default function YouTubePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Section>
          <SectionHeader
            badge="Free Content"
            title="Learn for free on YouTube"
            description="Hundreds of videos covering foundations, mindset, productivity, and real-world strategies. New videos every week."
          />

          {/* Subscribe CTA */}
          <div className="text-center mb-12">
            <Button size="lg" className="!bg-red-600 hover:!bg-red-700">
              <Youtube className="h-5 w-5 mr-2" />
              Subscribe on YouTube
            </Button>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors first:bg-stone-900 first:text-white first:hover:bg-stone-800"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(video => (
              <div
                key={video.title}
                className="group bg-white rounded-xl border border-stone-200/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Thumbnail placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-stone-200 to-stone-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-primary-500 fill-primary-500 ml-1" />
                    </div>
                  </div>
                  {/* Duration */}
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white text-xs font-mono">
                    {video.duration}
                  </span>
                  {video.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge variant="primary">Featured</Badge>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-stone-900 leading-snug group-hover:text-primary-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-stone-400">
                    <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{video.views} views</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{video.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-10">
            <Button variant="secondary">
              View All Videos <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
