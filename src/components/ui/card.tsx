interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'dark'
  className?: string
  hover?: boolean
}

const variantStyles = {
  default:  'bg-white rounded-xl border border-stone-200/60 shadow-sm p-6',
  elevated: 'bg-white rounded-2xl shadow-lg shadow-black/5 p-8',
  dark:     'bg-stone-900 rounded-2xl border border-stone-800 text-white p-8',
}

export function Card({ children, variant = 'default', className = '', hover = false }: CardProps) {
  return (
    <div className={`${variantStyles[variant]} ${hover ? 'hover:shadow-md transition-shadow' : ''} ${className}`}>
      {children}
    </div>
  )
}
