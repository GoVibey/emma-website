type Variant = 'primary' | 'secondary' | 'accent' | 'neutral'

const variantStyles: Record<Variant, string> = {
  primary:   'bg-primary-100 text-primary-700',
  secondary: 'bg-secondary-100 text-secondary-700',
  accent:    'bg-accent-100 text-accent-700',
  neutral:   'bg-stone-100 text-stone-600',
}

interface BadgeProps {
  variant?: Variant
  children: React.ReactNode
  className?: string
}

export function Badge({ variant = 'primary', children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}
