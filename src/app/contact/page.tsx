import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, MessageCircle, Youtube, Clock, Send } from 'lucide-react'

const contactMethods = [
  { icon: Mail, title: 'Email', description: 'For business inquiries and partnerships.', value: 'hello@emma.com', href: 'mailto:hello@emma.com' },
  { icon: MessageCircle, title: 'Community', description: 'For questions about courses and learning.', value: 'Join Skool', href: '/community' },
  { icon: Youtube, title: 'YouTube', description: 'Comments and video suggestions.', value: 'Subscribe', href: '/youtube' },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900">
              Let&apos;s connect
            </h1>
            <p className="mt-4 text-lg text-stone-500 leading-relaxed">
              Have a question, idea, or just want to say hello? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <Card variant="elevated">
                <h2 className="text-xl font-semibold text-stone-900 mb-6">Send a message</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1.5">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me what's on your mind..."
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact methods */}
            <div className="lg:col-span-2 space-y-4">
              {contactMethods.map(method => (
                <a key={method.title} href={method.href} className="block">
                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                        <method.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-stone-900">{method.title}</h3>
                        <p className="text-xs text-stone-400 mt-0.5">{method.description}</p>
                        <p className="text-sm text-primary-600 font-medium mt-1">{method.value}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}

              {/* Response time */}
              <div className="rounded-xl bg-stone-100/80 p-5 text-center">
                <Clock className="h-5 w-5 text-stone-400 mx-auto mb-2" />
                <p className="text-sm text-stone-600 font-medium">Usually responds within 24 hours</p>
                <p className="text-xs text-stone-400 mt-1">For urgent matters, reach out in the community</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
