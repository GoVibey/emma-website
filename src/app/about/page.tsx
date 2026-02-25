import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Section } from '@/components/ui/section'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SKOOL_URL = 'https://www.skool.com/cancer-free/about'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-primary-500 font-medium tracking-wide uppercase text-sm mb-4">
                  About Emma
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-primary-900">
                  Researcher.
                  <br />
                  Scientist.
                  <br />
                  <span className="text-primary-500">Your guide.</span>
                </h1>
                <p className="mt-6 text-lg text-stone-500 leading-relaxed">
                  Emma Weil is a clinical nutritionist, biochemist, and cancer prevention
                  researcher. After losing her father to cancer, she dedicated her life
                  to understanding — and preventing — the disease.
                </p>
              </div>
              <div className="glass rounded-3xl p-3 shadow-xl shadow-primary-500/10 max-w-md mx-auto lg:mx-0">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/emma2.png"
                    alt="Emma Weil"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 text-center mb-8">
              Hear it from Emma
            </h2>
            <div className="glass rounded-3xl p-3 shadow-lg shadow-primary-500/5">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/1162175048"
                  title="Welcome to the Cancer-Free Protocol Community"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Her story - with emma3 */}
        <Section dark>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-300 font-medium tracking-wide uppercase text-sm mb-4">
                Her story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-6">
                From loss to mission
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-4">
                Losing her father to cancer changed everything. He was the ultimate example
                of healthy living — so when he was diagnosed for a second time, it challenged
                everything she believed about health, prevention, and control.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-4">
                With degrees in clinical nutrition and biochemistry, and years developing
                biological therapies in global biotech — including working with the FDA on
                safety and efficacy standards — Emma dove deep into the metabolic origins
                of cancer, hormonal balance, and immune function.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                What she discovered challenged one of the most common beliefs: that mutations
                in specific genes are the primary drivers of cancer. And it changed her mission entirely.
              </p>
            </div>
            <div className="glass-dark rounded-3xl p-3 shadow-lg">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/emma3.png"
                  alt="Emma working in the lab"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* The science - with emma4 */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-primary-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="glass rounded-3xl p-3 shadow-lg shadow-primary-500/5 order-2 lg:order-1">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/emma4.png"
                    alt="Emma conducting research"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-primary-500 font-medium tracking-wide uppercase text-sm mb-4">
                  The science
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-primary-900 mb-6">
                  Not opinions. Evidence.
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-4">
                  Emma&apos;s approach is built on the metabolic theory of cancer and the latest
                  research in hormonal balance, immune function, and cellular health.
                </p>
                <p className="text-stone-600 text-lg leading-relaxed mb-4">
                  She doesn&apos;t guess. She reads the studies. She works in the lab. She translates
                  dense research into clear, actionable guidance that anyone can follow.
                </p>
                <p className="text-stone-600 text-lg leading-relaxed">
                  The result: a holistic protocol that addresses the root cause, not just symptoms.
                  One that puts the power back in your hands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lab gallery - emma5 + emma6 */}
        <Section>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 text-center mb-12">
              Where the research happens
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-3xl p-3 shadow-lg shadow-primary-500/5">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/emma5.png"
                    alt="Emma collaborating in the lab"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="glass rounded-3xl p-3 shadow-lg shadow-primary-500/5">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/emma6.png"
                    alt="Emma examining samples"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Quote + CTA */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100/50 to-white">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-100/40 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass rounded-3xl px-8 py-14 sm:px-16 sm:py-20 shadow-xl shadow-primary-500/10">
              <p className="text-2xl sm:text-3xl font-bold text-primary-900 italic leading-snug">
                &quot;The body&apos;s wisdom is endless. Our job is to stop silencing it.&quot;
              </p>
              <p className="mt-4 text-stone-500">- Emma Weil</p>
              <div className="mt-10">
                <Button size="lg" asChild>
                  <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer">
                    Join Emma&apos;s Community
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
