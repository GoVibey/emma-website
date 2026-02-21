import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero'
import { FeaturesSection } from '@/components/sections/features'
import { CoursesPreview } from '@/components/sections/courses-preview'
import { CommunitySection } from '@/components/sections/community'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CoursesPreview />
        <CommunitySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
