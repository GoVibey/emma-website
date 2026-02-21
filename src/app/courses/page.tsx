import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Section, SectionHeader } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, Users, BookOpen, CheckCircle, ArrowRight } from 'lucide-react'

const courses = [
  {
    title: 'Foundations of Growth',
    description: 'Build the mindset, habits, and foundational skills that create lasting transformation. This is where every journey begins.',
    badge: 'Most Popular',
    badgeVariant: 'primary' as const,
    modules: 12,
    students: 847,
    duration: '6 weeks',
    price: '$97',
    gradient: 'from-primary-500 to-primary-600',
    outcomes: [
      'Develop a growth-oriented mindset',
      'Build sustainable daily habits',
      'Create a personal development roadmap',
      'Join a cohort of like-minded learners',
    ],
  },
  {
    title: 'Advanced Strategies',
    description: 'Take your skills to the next level with advanced frameworks, real case studies, and expert-level techniques.',
    badge: 'Advanced',
    badgeVariant: 'accent' as const,
    modules: 8,
    students: 412,
    duration: '4 weeks',
    price: '$147',
    gradient: 'from-accent-500 to-accent-600',
    outcomes: [
      'Master advanced frameworks',
      'Analyze real-world case studies',
      'Develop your unique methodology',
      'Get certified upon completion',
    ],
  },
  {
    title: 'Community Masterclass',
    description: 'A live cohort-based program with weekly workshops, peer accountability, and direct mentorship from Emma.',
    badge: 'Live Cohort',
    badgeVariant: 'secondary' as const,
    modules: 6,
    students: 156,
    duration: '3 weeks',
    price: '$247',
    gradient: 'from-secondary-500 to-secondary-600',
    outcomes: [
      'Weekly live workshops with Emma',
      'Small group accountability pods',
      'Direct feedback on your work',
      'Lifetime community access',
    ],
  },
]

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Section>
          <SectionHeader
            badge="Courses"
            title="Find your perfect course"
            description="Every program is designed with clear outcomes, practical exercises, and community support. Choose your path."
          />

          <div className="space-y-8">
            {courses.map(course => (
              <div
                key={course.title}
                className="bg-white rounded-2xl border border-stone-200/60 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`} />
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Info */}
                  <div className="lg:col-span-2">
                    <Badge variant={course.badgeVariant}>{course.badge}</Badge>
                    <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-stone-900">{course.title}</h2>
                    <p className="mt-3 text-stone-500 leading-relaxed">{course.description}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-stone-400">
                      <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{course.duration}</span>
                      <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" />{course.modules} modules</span>
                      <span className="flex items-center gap-1.5"><Users className="h-4 w-4" />{course.students} students</span>
                    </div>

                    <div className="mt-6 space-y-2">
                      <p className="text-sm font-semibold text-stone-700">What you&apos;ll achieve:</p>
                      {course.outcomes.map(o => (
                        <div key={o} className="flex items-start gap-2 text-sm text-stone-600">
                          <CheckCircle className="h-4 w-4 text-accent-500 shrink-0 mt-0.5" />
                          {o}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Price + CTA */}
                  <div className="flex flex-col justify-center items-start lg:items-center lg:text-center lg:border-l lg:border-stone-100 lg:pl-8">
                    <div className="text-4xl font-bold text-stone-900">{course.price}</div>
                    <p className="text-sm text-stone-400 mt-1">One-time payment</p>
                    <Button size="lg" className="mt-5 w-full lg:w-auto">
                      Enroll Now <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                    <p className="text-xs text-stone-400 mt-3">30-day money-back guarantee</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
