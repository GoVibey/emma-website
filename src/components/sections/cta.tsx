'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-primary-500 to-primary-600 px-8 py-14 sm:px-16 sm:py-20 text-center overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10">
            <Sparkles className="h-8 w-8 text-primary-200 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to start your
              <br />
              learning journey?
            </h2>
            <p className="mt-4 text-lg text-primary-100 max-w-lg mx-auto leading-relaxed">
              Join thousands of students who are already transforming their lives.
              Your first lesson is free.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="secondary"
                size="lg"
                className="!bg-white !text-primary-600 hover:!bg-primary-50 !shadow-lg w-full sm:w-auto"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="!text-white/90 hover:!text-white hover:!bg-white/10 w-full sm:w-auto"
              >
                View All Courses
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
