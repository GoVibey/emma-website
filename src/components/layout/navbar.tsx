'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Community', href: '/community' },
  {
    label: 'Resources',
    href: '/resources',
    children: [{ label: 'Blog', href: '/resources/blog' }],
  },
]
const SKOOL_URL = 'https://www.skool.com/cancer-free/about'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary-700" style={{ fontFamily: 'var(--font-display)' }}>
          Emma Weil
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-stone-600 hover:text-primary-600 rounded-xl hover:bg-white/60 transition-colors"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                {resourcesOpen && (
                  <div className="absolute top-full left-0 pt-1">
                    <div className="bg-white rounded-xl shadow-lg py-1 min-w-[140px] border border-stone-200/60">
                      {link.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm font-medium text-stone-600 hover:text-primary-600 hover:bg-white/40 rounded-lg mx-1"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-primary-600 rounded-xl hover:bg-white/60 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" asChild>
            <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer">Join the Community</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-stone-600 hover:text-primary-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/20 px-4 pb-4">
          {navLinks.map(link => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-stone-600 hover:text-primary-600 hover:bg-white/40 rounded-xl"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map(child => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-6 py-2 text-sm text-stone-500 hover:text-primary-600 hover:bg-white/40 rounded-xl"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-white/20">
            <Button size="sm" className="w-full" asChild>
              <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                Join the Community
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
