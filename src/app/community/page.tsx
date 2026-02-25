import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Check,
  X,
} from 'lucide-react'
import Image from 'next/image'

const communityIncludes = [
  { title: 'Private Community Forum', desc: 'Connect with others who truly understand your experience' },
  { title: 'Weekly Content', desc: 'New insights, resources, and conversations every week' },
  { title: 'Resource Library', desc: 'Curated information, guides, and practical tools' },
  { title: 'Member Introductions', desc: 'Get to know others on the same journey' },
  { title: 'Supportive Environment', desc: 'A safe space with clear community guidelines' },
  { title: 'Live Group Calls', desc: 'Regular live sessions with Emma - ask questions, share, learn' },
  { title: 'Call Recordings', desc: 'Never miss a session - watch on your schedule' },
  { title: 'Exclusive Content', desc: 'Deeper dives into topics that matter most' },
  { title: 'Course Access', desc: 'Structured learning modules' },
  { title: 'Priority Support', desc: 'Direct access and faster responses' },
]

const forYou = [
  "You're currently going through cancer treatment and need support",
  "You're a cancer survivor navigating life after treatment",
  "You're supporting a loved one with cancer",
  "You're looking for a community that understands - really understands",
  "You want practical guidance alongside emotional support",
  "You value honesty over toxic positivity",
]

const notForYou = [
  "You're looking for medical advice (we're a support community, not a clinic)",
  "You want quick fixes or miracle cures",
  "You're not willing to support and respect other members",
]

const faqs = [
  {
    q: "Is this a medical support group?",
    a: "No. Emma is an educational and emotional support community. We don't provide medical advice. Always consult your healthcare team for medical decisions. What we do provide is a space to share experiences, learn from each other, and find strength in community.",
  },
  {
    q: "Do I have to share my story?",
    a: "Absolutely not. You can participate as much or as little as you're comfortable with. Some members are very active; others prefer to read and absorb. Both are welcome.",
  },
  {
    q: "What if I'm not tech-savvy?",
    a: "Skool is one of the simplest platforms out there. If you can use Facebook, you can use this. And if you need help, just ask - our community is supportive by nature.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Premium membership can be cancelled anytime. No contracts, no commitments beyond the current month.",
  },
  {
    q: "How is this different from a Facebook group?",
    a: "Facebook groups are full of noise, ads, and algorithms. Skool is a dedicated, distraction-free space built specifically for communities like ours. Plus, Premium members get access to structured courses and live calls that Facebook can't offer.",
  },
]
const SKOOL_URL = 'https://www.skool.com/cancer-free/about'

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <Image
            src="/gen/hero-community.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-900/60" />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
              You Don&apos;t Have to
              <br />
              <span className="text-accent-300">Navigate Cancer Alone</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Join a community of survivors, fighters, and supporters who understand
              exactly what you&apos;re going through — led by someone who&apos;s dedicated her life to this mission.
            </p>
            <Button variant="accent" size="lg" className="mt-10" asChild>
              <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer">
                Join the Community <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>
        </section>

        {/* Problem */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">The Loneliest Journey</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              When you hear the word &quot;cancer,&quot; everything changes. Suddenly you&apos;re navigating
              a world of doctors, treatments, decisions, and emotions that nothing could have
              prepared you for.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Your family tries to help, but they don&apos;t fully understand. Your friends don&apos;t
              know what to say. Google gives you information - but information isn&apos;t support.
            </p>
            <p className="font-semibold text-stone-900 mb-3">What you actually need is:</p>
            <ul className="space-y-2 text-stone-600">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                Someone who deeply understands the science and the journey
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                A community that gets it - no explanations needed
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                Practical guidance, not just medical jargon
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                Hope that isn&apos;t naive, but grounded in real experience
              </li>
            </ul>
            <p className="mt-6 text-stone-600 italic">That&apos;s exactly why Emma exists.</p>
          </div>
        </Section>

        {/* About Emma */}
        <Section dark>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="glass-dark rounded-3xl p-3 shadow-lg max-w-md mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image src="/images/emma2.png" alt="Emma Weil" fill className="object-cover object-top" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Meet Emma — Your Guide on This Journey</h2>
              <p className="text-stone-400 leading-relaxed mb-4">
                Losing her father to cancer shaped Emma&apos;s life in ways she never expected.
                He was the ultimate example of healthy living — so when he was diagnosed
                for a second time, it challenged everything she believed about prevention.
              </p>
              <p className="text-stone-400 leading-relaxed mb-4">
                With a background in clinical nutrition, a master&apos;s in biochemistry, and years
                developing biological therapies in global biotech and pharmaceuticals — including
                working with the FDA — Emma dove deep into the science of cancer prevention.
                What she discovered changed her mission entirely.
              </p>
              <p className="text-stone-400 leading-relaxed mb-4">
                Over more than a decade of research and hands-on work with hundreds of cancer
                survivors, she created The Cancer-Free Protocol — a holistic approach focused
                on treating the body as a whole, not as separate parts.
              </p>
              <p className="text-stone-400 leading-relaxed">
                She&apos;s not here to sell you hope. She&apos;s here to give you clarity, knowledge,
                and a path forward.
              </p>
            </div>
          </div>
        </Section>

        {/* What You Get */}
        <Section>
          <SectionHeader
            badge="What You Get"
            title="What&apos;s Inside the Emma Community"
            description=""
          />
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {communityIncludes.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900">{item.title}</p>
                  <p className="text-sm text-stone-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" asChild>
              <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer">
                Join the Community <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>
        </Section>

        {/* Who This Is For */}
        <Section dark>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">This Community Is For You If...</h2>
            <ul className="space-y-3 mb-8">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-stone-400">
                  <Check className="h-5 w-5 text-accent-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-semibold text-stone-300 mb-3">This is NOT for you if:</p>
            <ul className="space-y-2">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-stone-500">
                  <X className="h-5 w-5 text-stone-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            description=""
          />
          <div className="max-w-2xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <Card key={i}>
                <h3 className="font-semibold text-stone-900 mb-2">{faq.q}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <Image
            src="/gen/cta-community2.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/50" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-primary-900" />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="glass-dark rounded-3xl px-8 py-14 sm:px-16 sm:py-20 shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                You&apos;ve Already Shown Incredible Strength. Now Let Us Walk With You.
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Cancer changes everything. But it doesn&apos;t have to change you alone.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Join a community that understands, supports, and empowers — without judgment,
                without pressure, without pretending it&apos;s easy.
              </p>
              <p className="text-white/50 italic mb-8">
                Because it&apos;s not easy. But it&apos;s easier together.
              </p>
              <Button variant="accent" size="lg" asChild>
                <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer">
                  Join the Emma Community <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
