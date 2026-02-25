'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Section, SectionHeader } from '@/components/ui/section'

const pillars = [
  {
    image: '/images/cancer-cells.png',
    title: 'Understand the Root Cause',
    description: 'Cancer starts with damaged mitochondria, not random mutations. When you understand the mechanism, fear is replaced with clarity - and clarity is power.',
  },
  {
    image: '/images/supplements.png',
    title: 'Rebuild Your Defenses',
    description: 'Hormonal balance. Immune strength. Metabolic health. Your body already has the tools - nutrition, movement, sleep, sunlight, and stress management reactivate them.',
  },
  {
    image: '/images/strength.png',
    title: 'Never Walk Alone',
    description: 'Weekly live calls, a private community of people who get it, and Emma by your side. This isn\'t a course you take alone. It\'s a family you join.',
  },
]

export function PillarsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section dark>
      <SectionHeader
        badge=""
        title="One holistic protocol. Three pillars."
        description="Everything is connected. Fixing one part without the others is like tuning one instrument in an orchestra. We tune them all."
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group"
          >
            <div className="glass-dark rounded-2xl p-3 shadow-lg">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative mb-5">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-bold text-primary-200 tracking-widest uppercase">
                    Pillar {i + 1}
                  </span>
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-xl font-bold mb-2 leading-7 min-h-[56px]">{pillar.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm min-h-[120px]">{pillar.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
