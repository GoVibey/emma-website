'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '@/components/ui/section'

const stats = [
  { value: '76%', label: 'of survivors report anxiety as their biggest challenge after treatment', source: 'Cancer Support UK' },
  { value: '7.6%', label: 'of survivors meet all recommended health behavior guidelines', source: 'NCCN Survivorship Study' },
  { value: 'up to 60%', label: 'reduction in recurrence risk through lifestyle changes', source: 'NIH Systematic Review' },
  { value: '56%', label: 'of survivors experience insomnia after treatment ends', source: 'Cancer Support UK' },
]

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section>
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-500 font-medium tracking-wide uppercase text-sm mb-4">
            The loneliest journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-primary-900">
            They gave you a diagnosis.
            <br />
            <span className="text-stone-400">Not a roadmap.</span>
          </h2>
          <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed">
            <p>
              After treatment ends, the silence is deafening. No one tells you what to eat.
              How to sleep. Why you&apos;re exhausted. Why the fear doesn&apos;t leave.
            </p>
            <p>
              Your oncologist knows drugs — not health. Your family wants to help
              but doesn&apos;t understand. Google gives you 10,000 answers and zero clarity.
            </p>
            <p className="font-semibold text-primary-800">
              You need someone who&apos;s been in your shoes, studied the science, and
              built a path forward.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass rounded-2xl p-5 shadow-lg shadow-stone-900/10"
            >
              <p className="text-3xl font-bold text-primary-600 h-10 flex items-end">{stat.value}</p>
              <p className="text-sm text-stone-600 leading-snug h-16 mt-2">{stat.label}</p>
              <p className="text-[11px] text-stone-400 mt-2">{stat.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
