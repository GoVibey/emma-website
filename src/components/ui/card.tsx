interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'dark' | 'glass'
  className?: string
  hover?: boolean
}

const variantStyles = {
  default:  'bg-white rounded-2xl border border-stone-200/60 shadow-sm p-6',
  elevated: 'bg-white rounded-2xl shadow-lg shadow-black/5 p-8',
  dark:     'bg-primary-900 rounded-2xl border border-white/10 text-white p-8',
  glass:    'glass rounded-2xl shadow-lg shadow-primary-500/5 p-6',
}

export function Card({ children, variant = 'default', className = '', hover = false }: CardProps) {
  return (
    <div className={`${variantStyles[variant]} ${hover ? 'hover:shadow-md hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  )
}
