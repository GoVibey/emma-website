import Link from 'next/link'
import { Youtube, Instagram, Mail } from 'lucide-react'

const footerLinks = {
  learn: [
    { label: 'Courses', href: '/courses' },
    { label: 'Community', href: '/community' },
    { label: 'YouTube', href: '/youtube' },
    { label: 'Free Resources', href: '/resources' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: '#', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Emma
            </Link>
            <p className="mt-3 text-sm text-stone-400 max-w-sm leading-relaxed">
              Empowering learners through education, community, and growth.
              Join thousands of students on their journey.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-stone-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Learn</h3>
            <ul className="space-y-3">
              {footerLinks.learn.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">© {new Date().getFullYear()} Emma. All rights reserved.</p>
          <p className="text-xs text-stone-500">Made with ❤️ for learners everywhere</p>
        </div>
      </div>
    </footer>
  )
}
