'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SKOOL_URL = 'https://www.skool.com/cancer-free/about'

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <Image
        src="/images/gen/14 cta.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary-900/50" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-primary-900" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-dark rounded-3xl px-8 py-14 sm:px-16 sm:py-20 shadow-xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            You&apos;ve already beaten the odds once.
            <br />
            <span className="text-primary-200">Now stack them in your favor.</span>
          </h2>
          <p className="mt-6 text-xl text-white/70 leading-relaxed">
            Free to join. No credit card. No commitment. Just a community that
            understands, and a protocol that works.
          </p>
          <div className="mt-10">
            <Button
              variant="accent"
              size="lg"
              className="!text-lg !px-10 !py-4"
              asChild
            >
              <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer">
                Join the Community — It&apos;s Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
