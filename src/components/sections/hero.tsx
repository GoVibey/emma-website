'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SKOOL_URL = 'https://www.skool.com/cancer-free/about'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100/50">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-200/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent-200/20 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary-500 font-medium tracking-wide uppercase text-sm mb-6"
            >
              The Cancer-Free Lifestyle Protocol
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-primary-900"
            >
              Your body was built
              <br />
              to protect you.
              <br />
              <span className="text-primary-500">Let&apos;s reawaken it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-stone-500 max-w-xl leading-relaxed"
            >
              The science is clear: cancer is not random. Your lifestyle holds the key to
              prevention. Join the community rebuilding their health from the inside out -
              guided by someone who&apos;s dedicated her life to understanding it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild>
                <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer">
                  Join the Free Community
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="!bg-white/70 !backdrop-blur-sm" asChild>
                <Link href="/community">
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass rounded-3xl p-3 shadow-xl shadow-primary-500/10">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/gen/Hero.png"
                  alt="Woman embracing nature and vitality"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
