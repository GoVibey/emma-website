'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, X } from 'lucide-react'
import { Section } from '@/components/ui/section'

const forYou = [
  "You survived cancer and refuse to just 'wait and see'",
  "You're in treatment and want to support your body naturally alongside it",
  "You're supporting a loved one and need to understand what actually helps",
  "You're tired of fear, confusion, and conflicting information",
  "You believe the power over your health is in your hands",
]

const notForYou = [
  "You want a magic pill or quick fix",
  "You're looking for medical advice to replace your doctor",
  "You're not willing to challenge what you've been told",
]

export function ForYouSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section>
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-500 font-medium tracking-wide uppercase text-sm mb-4">
            Is this for you?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-primary-900">
            This is for fighters.
            <br />
            <span className="text-stone-400">Not followers.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="glass rounded-2xl p-8 mb-8">
            <div className="space-y-4">
              {forYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-stone-700 text-lg">
                  <Check className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-semibold text-stone-900 mb-3 text-lg">This is NOT for you if:</p>
          <div className="space-y-3">
            {notForYou.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-stone-500">
                <X className="h-5 w-5 text-stone-400 shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
