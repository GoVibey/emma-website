'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Section } from '@/components/ui/section'

export function MeetEmmaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-primary-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-3 shadow-xl shadow-primary-500/10 max-w-md mx-auto">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/emma2.png"
                  alt="Emma Weil"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-primary-500 font-medium tracking-wide uppercase text-sm mb-4">
              Your guide
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-primary-900">
              Meet Emma Weil.
            </h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                Clinical nutritionist. Biochemist. Cancer prevention researcher.
                The mentor you wish you had from day one.
              </p>
              <p>
                Losing her father to cancer changed everything. With degrees in
                clinical nutrition and biochemistry, and years developing biological
                therapies in global biotech, Emma dove deep into the science of
                cancer prevention — and discovered that much of it lives in everyday choices.
              </p>
              <p>
                Over a decade of research and hands-on work with hundreds of cancer
                survivors led her to create The Cancer-Free Protocol — a holistic
                approach to rebuilding the body&apos;s natural defenses.
              </p>
              <div className="glass rounded-2xl p-6 mt-6">
                <p className="font-semibold text-primary-800 text-xl italic">
                  &quot;Our body holds an endless amount of wisdom. Our job is to stop silencing it.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
