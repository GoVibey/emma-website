import Link from 'next/link'
import { Youtube } from 'lucide-react'

const footerLinks = {
  main: [
    { label: 'Community', href: '/community' },
    { label: 'Resources', href: '/resources' },
    { label: 'Blog', href: '/resources/blog' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Emma Weil
            </Link>
            <p className="mt-3 text-sm text-white/50 max-w-sm leading-relaxed">
              A community for survivors, fighters, and supporters. You don&apos;t have to navigate cancer alone.
            </p>
            <div className="mt-6">
              <a
                href="https://www.youtube.com/@WeilEmma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors inline-flex"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 text-white/60" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.main.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/policies" className="text-sm text-white/50 hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/policies#health-disclaimer" className="text-sm text-white/50 hover:text-white transition-colors">
                  Health Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/policies#content-use" className="text-sm text-white/50 hover:text-white transition-colors">
                  Content Use Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Emma Weil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
