'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Users, ArrowRight } from 'lucide-react'
import { Section, SectionHeader } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const courses = [
  {
    title: 'Foundations of Growth',
    description: 'Build the mindset and habits that create lasting transformation. Perfect for beginners.',
    badge: 'Most Popular',
    badgeVariant: 'primary' as const,
    modules: 12,
    students: 847,
    duration: '6 weeks',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    title: 'Advanced Strategies',
    description: 'Take your skills to the next level with advanced frameworks, real case studies, and expert insights.',
    badge: 'Advanced',
    badgeVariant: 'accent' as const,
    modules: 8,
    students: 412,
    duration: '4 weeks',
    gradient: 'from-accent-500 to-accent-600',
  },
  {
    title: 'Community Masterclass',
    description: 'Live cohort-based program with weekly workshops, peer accountability, and direct mentorship.',
    badge: 'Live Cohort',
    badgeVariant: 'secondary' as const,
    modules: 6,
    students: 156,
    duration: '3 weeks',
    gradient: 'from-secondary-500 to-secondary-600',
  },
]

export function CoursesPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section className="bg-stone-100/50" id="courses">
      <SectionHeader
        badge="Courses"
        title="Start your learning journey"
        description="Structured programs for every level. Each course is designed with clear outcomes, practical exercises, and community support."
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group bg-white rounded-2xl shadow-sm border border-stone-200/60 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Color header */}
            <div className={`h-2 bg-gradient-to-r ${course.gradient}`} />

            <div className="p-6">
              <Badge variant={course.badgeVariant}>{course.badge}</Badge>

              <h3 className="mt-4 text-xl font-semibold text-stone-900">{course.title}</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">{course.description}</p>

              {/* Stats */}
              <div className="mt-5 flex items-center gap-4 text-xs text-stone-400">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {course.duration}
                </span>
                <span>{course.modules} modules</span>
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {course.students}
                </span>
              </div>

              {/* CTA */}
              <Button variant="ghost" className="mt-5 w-full justify-between group-hover:text-primary-600 group-hover:bg-primary-50 !px-4">
                View Course
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
