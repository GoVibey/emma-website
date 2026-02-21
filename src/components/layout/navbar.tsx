'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Community', href: '/community' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-lg border-b border-stone-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
          Emma
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Start Learning</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-stone-600 hover:text-stone-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pb-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-stone-100 flex flex-col gap-2">
            <Button variant="secondary" size="sm" className="w-full">Sign In</Button>
            <Button size="sm" className="w-full">Start Learning</Button>
          </div>
        </div>
      )}
    </header>
  )
}
