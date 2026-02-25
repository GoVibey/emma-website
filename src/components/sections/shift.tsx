'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '@/components/ui/section'

export function ShiftSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section dark>
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-300 font-medium tracking-wide uppercase text-sm mb-4">
            The truth they don&apos;t teach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            What if everything you were told about cancer
            <span className="text-primary-300"> was incomplete?</span>
          </h2>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            For decades, we&apos;ve been told cancer is random bad luck — broken genes
            you can&apos;t control. But emerging science tells a different story.
            One where the power is in your hands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10"
        >
          <div className="glass-dark rounded-3xl p-10 shadow-lg">
            <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              &ldquo;Only 5–10% of cancers are purely genetic. The rest? Environment, lifestyle, and metabolic dysfunction.&rdquo;
            </p>
            <p className="mt-6 text-sm text-white/40">— American Cancer Society</p>
          </div>
        </motion.div>

      </div>
    </Section>
  )
}
