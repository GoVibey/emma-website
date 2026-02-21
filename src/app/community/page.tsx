import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, MessageCircle, Trophy, Calendar, ArrowRight, Heart, Zap, BookOpen } from 'lucide-react'

const perks = [
  { icon: MessageCircle, title: 'Daily Discussions', description: 'Engage in topic-specific channels, ask questions, and share your progress with fellow learners.' },
  { icon: Calendar, title: 'Weekly Live Events', description: 'Q&A sessions, guest speakers, and workshops. Every week brings something new.' },
  { icon: Trophy, title: 'Challenges & Wins', description: 'Monthly challenges to keep you motivated. Celebrate wins, big and small.' },
  { icon: Heart, title: 'Accountability Pods', description: 'Get matched with a small group of peers for weekly check-ins and support.' },
  { icon: BookOpen, title: 'Resource Library', description: 'Templates, workbooks, checklists, and exclusive guides available only to members.' },
  { icon: Zap, title: 'Direct Access', description: 'Ask Emma questions directly and get personalized feedback on your progress.' },
]

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Section dark>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/10 text-accent-400 border border-accent-500/20 mb-6">
              Skool Community
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Learning is better
              <br />
              <span className="text-accent-400">together</span>
            </h1>
            <p className="mt-6 text-lg text-stone-400 leading-relaxed max-w-2xl mx-auto">
              Our Skool community is where transformations happen. It&apos;s more than a group —
              it&apos;s a family of learners committed to growth, accountability, and genuine support.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="lg">
                Join for Free <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
              <div className="flex items-center gap-4 text-sm text-stone-400">
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> 2,000+ members</span>
                <span>•</span>
                <span>Free to join</span>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeader
            badge="What You Get"
            title="More than just a community"
            description="Everything you need to stay motivated, connected, and growing."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map(p => (
              <Card key={p.title} hover>
                <div className="w-10 h-10 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center mb-4">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{p.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{p.description}</p>
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
