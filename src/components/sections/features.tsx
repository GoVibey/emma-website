'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Video, BookOpen, FolderOpen, Youtube, Heart } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section'

const features = [
  {
    icon: Users,
    title: 'Private Community',
    description: 'No noise, no algorithms — a focused space where every member truly understands what you\'re going through.',
  },
  {
    icon: Video,
    title: 'Weekly Live Calls with Emma',
    description: 'Ask anything. Share wins. Get direct guidance. Recordings available if you miss one.',
  },
  {
    icon: BookOpen,
    title: 'Structured Learning Modules',
    description: 'Root cause science, hormonal balance, immune optimization, detoxification — each module is self-contained and self-paced.',
  },
  {
    icon: FolderOpen,
    title: 'Curated Resource Library',
    description: 'Checklists, guides, recipes, and exercise plans. Practical tools you can use today.',
  },
  {
    icon: Youtube,
    title: 'Free YouTube Content',
    description: 'Hundreds of videos breaking down the science into language anyone can understand. New content every week.',
  },
  {
    icon: Heart,
    title: 'Emotional Support',
    description: 'Honesty over toxic positivity. A place where "I\'m scared" is a valid sentence, and you\'ll never hear "just stay positive."',
  },
]

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge=""
          title="Everything you need. Nothing you don't."
          description="No fluff. No miracle cures. Just science-backed guidance, real human connection, and a path forward."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="glass rounded-2xl p-6 shadow-md shadow-primary-500/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
