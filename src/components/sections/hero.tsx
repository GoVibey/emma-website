'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-stone-50 to-stone-50" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-200/15 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-secondary-100 text-secondary-700 border border-secondary-200/60">
              <Star className="h-3.5 w-3.5 fill-secondary-500 text-secondary-500" />
              Trusted by 2,000+ students
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-stone-900"
          >
            Learn, grow, and
            <br />
            <span className="text-primary-500">transform your life</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed"
          >
            Join Emma&apos;s community of ambitious learners. Expert-led courses,
            live workshops, and a supportive community to help you reach your potential.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto">
              Explore Courses
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              <Play className="h-4 w-4 mr-1 fill-current" />
              Watch Free Lesson
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 flex items-center justify-center gap-8 text-sm text-stone-400"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 border-2 border-white"
                  />
                ))}
              </div>
              <span className="ml-2 font-medium text-stone-600">2,000+ students</span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="h-4 w-4 fill-secondary-400 text-secondary-400" />
              ))}
              <span className="ml-1.5 font-medium text-stone-600">4.9/5 rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
