'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Users, Video, Award, Sparkles, MessageCircle } from 'lucide-react'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card } from '@/components/ui/card'

const features = [
  {
    icon: BookOpen,
    title: 'Expert-Led Courses',
    description: 'Structured programs designed to take you from beginner to confident practitioner. Learn at your own pace.',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Users,
    title: 'Skool Community',
    description: 'Connect with fellow learners, share progress, and get support from a community that genuinely cares.',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    icon: Video,
    title: 'Free YouTube Content',
    description: 'Hundreds of free videos covering foundations, tips, and real-world applications. Start learning today.',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    icon: MessageCircle,
    title: 'Live Q&A Sessions',
    description: 'Weekly live sessions where you can ask questions, get feedback, and learn from others\' challenges.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Award,
    title: 'Certificates',
    description: 'Earn certificates of completion to showcase your new skills and commitment to growth.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Sparkles,
    title: 'Practical Exercises',
    description: 'Every module includes hands-on exercises and projects. Learning by doing is how real change happens.',
    color: 'bg-emerald-100 text-emerald-600',
  },
]

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="features">
      <SectionHeader
        badge="Why Emma?"
        title="Everything you need to grow"
        description="A complete learning ecosystem designed to support your journey from curiosity to mastery."
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card hover className="h-full">
              <div className={`w-11 h-11 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
