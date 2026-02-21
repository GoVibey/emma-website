/**
 * Emma Website — Design System
 * 
 * Brand: Modern, educational, empowering
 * Audience: Learners, community members, course students
 * 
 * Design Principles:
 * 1. Warm & Approachable — Not corporate. Feels like talking to a mentor.
 * 2. Clean & Focused — Generous whitespace, clear hierarchy, no clutter.
 * 3. Empowering — Bold headlines, active voice, progress-oriented.
 * 4. Modern — Smooth animations, rounded corners, soft shadows.
 */

/* ── Color Palette ── */
export const colors = {
  // Primary — Warm coral-rose (empowering, energetic)
  primary: {
    50:  '#FFF5F5',
    100: '#FFE3E3',
    200: '#FFC9C9',
    300: '#FFA8A8',
    400: '#FF8787',
    500: '#E8636F',  // Main brand color
    600: '#D4404D',
    700: '#B52A36',
    800: '#8E1F28',
    900: '#6B171E',
  },

  // Secondary — Warm gold (education, achievement, warmth)
  secondary: {
    50:  '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },

  // Accent — Soft teal (calm, trust, growth)
  accent: {
    50:  '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
  },

  // Neutrals — Warm grays (not cold/corporate)
  neutral: {
    50:  '#FAFAF9',
    100: '#F5F5F4',
    200: '#E7E5E4',
    300: '#D6D3D1',
    400: '#A8A29E',
    500: '#78716C',
    600: '#57534E',
    700: '#44403C',
    800: '#292524',
    900: '#1C1917',
    950: '#0F0E0D',
  },

  // Semantic
  success: '#22C55E',
  warning: '#F59E0B',
  error:   '#EF4444',
  info:    '#3B82F6',

  // Background
  bg: {
    primary:   '#FAFAF9',   // Warm off-white
    secondary: '#F5F5F4',   // Slightly darker
    dark:      '#1C1917',   // Dark sections
    card:      '#FFFFFF',
  },
} as const

/* ── Typography ── */
export const typography = {
  // Font families (loaded via next/font)
  fontFamily: {
    display: 'var(--font-display)',   // DM Serif Display — headlines
    body:    'var(--font-body)',      // Inter — body text
    mono:    'var(--font-mono)',      // JetBrains Mono — code/numbers
  },

  // Font sizes (Tailwind classes)
  sizes: {
    'hero':     'text-5xl sm:text-6xl lg:text-7xl',
    'h1':       'text-4xl sm:text-5xl',
    'h2':       'text-3xl sm:text-4xl',
    'h3':       'text-2xl sm:text-3xl',
    'h4':       'text-xl sm:text-2xl',
    'body-lg':  'text-lg',
    'body':     'text-base',
    'body-sm':  'text-sm',
    'caption':  'text-xs',
  },
} as const

/* ── Spacing Scale ── */
export const spacing = {
  section: {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20 lg:py-24',
    lg: 'py-20 sm:py-28 lg:py-32',
  },
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  containerNarrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
} as const

/* ── Border Radius ── */
export const radius = {
  sm:   'rounded-lg',      // 8px — buttons, inputs
  md:   'rounded-xl',      // 12px — cards
  lg:   'rounded-2xl',     // 16px — hero cards, images
  full: 'rounded-full',    // pills, avatars
} as const

/* ── Shadows ── */
export const shadows = {
  sm:   'shadow-sm',
  md:   'shadow-md shadow-black/5',
  lg:   'shadow-lg shadow-black/5',
  xl:   'shadow-xl shadow-black/10',
  glow: 'shadow-[0_0_40px_rgba(232,99,111,0.15)]',
} as const

/* ── Animation Variants (Framer Motion) ── */
export const animations = {
  fadeUp: {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  stagger: {
    visible: { transition: { staggerChildren: 0.1 } },
  },
  scaleIn: {
    hidden:  { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  },
} as const

/* ── Component Presets ── */
export const components = {
  // Buttons
  button: {
    primary:   'bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-white hover:bg-neutral-50 text-neutral-800 font-semibold px-6 py-3 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200',
    ghost:     'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 font-medium px-4 py-2 rounded-lg transition-colors',
    accent:    'bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200',
  },

  // Cards
  card: {
    default:  'bg-white rounded-xl border border-neutral-200/60 shadow-sm hover:shadow-md transition-shadow p-6',
    elevated: 'bg-white rounded-2xl shadow-lg shadow-black/5 p-8',
    dark:     'bg-neutral-900 rounded-2xl border border-neutral-800 text-white p-8',
  },

  // Badges
  badge: {
    primary:   'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700',
    secondary: 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary-100 text-secondary-700',
    accent:    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-100 text-accent-700',
    neutral:   'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600',
  },

  // Input fields
  input: 'w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors',
} as const
