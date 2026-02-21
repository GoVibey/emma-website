'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, MessageCircle, Trophy, Zap } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'

const stats = [
  { icon: Users, value: '2,000+', label: 'Active members' },
  { icon: MessageCircle, value: '15,000+', label: 'Discussions' },
  { icon: Trophy, value: '500+', label: 'Success stories' },
  { icon: Zap, value: 'Weekly', label: 'Live events' },
]

export function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section dark id="community">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/10 text-accent-400 border border-accent-500/20 mb-6">
            Skool Community
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            You don&apos;t have to
            <br />
            <span className="text-accent-400">learn alone</span>
          </h2>
          <p className="mt-5 text-stone-400 text-lg leading-relaxed max-w-lg">
            Our Skool community is where the real magic happens. Ask questions,
            share wins, find accountability partners, and get direct access to
            Emma and fellow students.
          </p>

          <div className="mt-8">
            <Button variant="accent" size="lg">
              Join the Community
            </Button>
          </div>
        </motion.div>

        {/* Right: Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="rounded-xl bg-stone-800/60 border border-stone-700/50 p-5 text-center"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-stone-700/50 flex items-center justify-center mb-3">
                <stat.icon className="h-5 w-5 text-accent-400" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-stone-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
