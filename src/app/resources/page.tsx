import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, BookOpen, Video } from 'lucide-react'

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Section>
          <SectionHeader
            badge="Resources"
            title="Free resources to support your journey"
            description="Practical guidance, videos, and insights - no signup required."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/resources/blog">
              <Card hover className="h-full group">
                <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-primary-600 transition-colors">
                  Blog
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Watch Emma&apos;s YouTube videos embedded right here. Topics on cancer prevention,
                  hormonal balance, nutrition, and rebuilding trust in your body.
                </p>
                <span className="text-sm font-medium text-primary-600 flex items-center gap-1">
                  View Blog <ArrowRight className="h-4 w-4" />
                </span>
              </Card>
            </Link>
            <Card className="opacity-75">
              <div className="w-12 h-12 rounded-lg bg-stone-200 text-stone-500 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">More coming soon</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Guides, checklists, and additional resources will be added here.
              </p>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
