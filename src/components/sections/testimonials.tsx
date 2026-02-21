'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import { Section, SectionHeader } from '@/components/ui/section'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Career Changer',
    quote: 'Emma\'s courses gave me the confidence and skills to completely change my career path. The community support was incredible — I never felt alone in the process.',
    rating: 5,
  },
  {
    name: 'James T.',
    role: 'Entrepreneur',
    quote: 'The practical exercises are what set this apart. I wasn\'t just watching videos — I was building real skills that I use every single day in my business.',
    rating: 5,
  },
  {
    name: 'Lisa K.',
    role: 'Student',
    quote: 'I\'ve tried dozens of online courses. Emma\'s teaching style is warm, clear, and genuinely empowering. The Skool community is the best online group I\'ve ever been part of.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section id="testimonials">
      <SectionHeader
        badge="Testimonials"
        title="What students say"
        description="Real stories from real people who transformed their lives through learning."
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl border border-stone-200/60 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <Quote className="h-8 w-8 text-primary-200 mb-3" />
            <p className="text-stone-600 text-sm leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>

            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-secondary-400 text-secondary-400" />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-300 to-primary-500" />
              <div>
                <p className="text-sm font-semibold text-stone-900">{t.name}</p>
                <p className="text-xs text-stone-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
