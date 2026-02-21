import { forwardRef, type ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  asChild?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary:   'bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-lg',
  secondary: 'bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 shadow-sm hover:shadow-md',
  ghost:     'text-stone-600 hover:text-stone-900 hover:bg-stone-100',
  accent:    'bg-accent-500 hover:bg-accent-600 text-white shadow-md hover:shadow-lg',
}

const sizeStyles: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-6 py-3',
  lg: 'text-lg px-8 py-3.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
