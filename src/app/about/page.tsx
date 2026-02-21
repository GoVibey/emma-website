import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Heart, Target, Lightbulb, Users } from 'lucide-react'

const values = [
  { icon: Heart, title: 'Empathy First', description: 'Every student is on a unique journey. We meet you where you are with compassion and understanding.' },
  { icon: Target, title: 'Practical Results', description: 'Theory is great, but we focus on real-world application. Every lesson has actionable takeaways.' },
  { icon: Lightbulb, title: 'Lifelong Learning', description: 'Growth doesn\'t stop. We build habits and mindsets that serve you for years to come.' },
  { icon: Users, title: 'Community Driven', description: 'Learning is better together. Our community is the heart of everything we do.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <Section className="bg-gradient-to-b from-primary-50/50 to-stone-50">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 mb-6">
              About Emma
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-stone-900">
              Education that
              <br />
              <span className="text-primary-500">empowers</span>
            </h1>
            <p className="mt-6 text-lg text-stone-500 leading-relaxed">
              I believe everyone has the potential to grow, transform, and achieve their goals.
              My mission is to create the most supportive, practical, and empowering learning
              experience online.
            </p>
          </div>
        </Section>

        {/* Story */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">My Story</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <p className="text-stone-600 leading-relaxed">
                I started teaching because I saw a gap between what people wanted to learn and how
                it was being taught. Too many courses felt cold, theoretical, and disconnected from
                real life. I wanted to create something different.
              </p>
              <p className="text-stone-600 leading-relaxed mt-4">
                What began as a YouTube channel with a handful of viewers has grown into a thriving
                community of over 2,000 learners. Every course, every video, and every community
                discussion is designed with one goal: to help you take the next step in your journey.
              </p>
              <p className="text-stone-600 leading-relaxed mt-4">
                I don&apos;t believe in passive learning. I believe in rolling up your sleeves, doing
                the work, and having a community that cheers you on along the way.
              </p>
            </div>
          </div>
        </Section>

        {/* Values */}
        <Section className="bg-stone-100/50">
          <SectionHeader
            badge="Values"
            title="What I stand for"
            description="These principles guide everything I create and teach."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map(v => (
              <Card key={v.title} hover>
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{v.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{v.description}</p>
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
