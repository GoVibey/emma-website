import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero'
import { ProblemSection } from '@/components/sections/problem'
import { ShiftSection } from '@/components/sections/shift'
import { MeetEmmaSection } from '@/components/sections/meet-galit'
import { PillarsSection } from '@/components/sections/pillars'
import { FeaturesSection } from '@/components/sections/features'
import { CTASection } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ShiftSection />
        <MeetEmmaSection />
        <PillarsSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
