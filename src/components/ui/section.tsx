interface SectionProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
  id?: string
}

export function Section({ children, className = '', dark = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${dark ? 'bg-stone-900 text-white' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ badge, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-stone-500 max-w-2xl leading-relaxed" style={centered ? { margin: '1rem auto 0' } : undefined}>
          {description}
        </p>
      )}
    </div>
  )
}
