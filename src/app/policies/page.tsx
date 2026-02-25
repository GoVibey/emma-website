import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Section } from '@/components/ui/section'

export default function PoliciesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Section>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-stone-900 mb-12">Community Terms &amp; Conditions</h1>

            {/* Community Rules */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Community Rules</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>Every member is committed to respectful, kind, and empathetic dialogue.</p>
                <p>
                  To get the most out of this community, we encourage open and public conversations
                  about your journey, your challenges, lessons learned from experience, and both big
                  and small wins, while still respecting privacy and discretion, so everyone can benefit
                  from shared learning.
                </p>
                <p>
                  Discussions are intended to support learning around physical health, mental resilience,
                  evidence-based lifestyle habits, emotional well-being, recovery after cancer, and
                  long-term prevention. To keep this space meaningful and accessible for everyone,
                  conversations should remain aligned with the core purpose of the community and avoid
                  unrelated topics.
                </p>
                <p>
                  At the same time different perspectives are welcome when expressed with respect and a
                  genuine desire to help.
                </p>
                <p>
                  All communication should take place in English, and posts written in other languages
                  may be removed to maintain clarity and shared understanding for all members.
                </p>
                <p>
                  Community discussions do not replace personal medical care, and members are encouraged
                  to stay in communication with their healthcare professionals.
                </p>
                <p>
                  Members who do not follow the guidelines may be removed without prior notice.
                  Protecting the safety, trust and integrity of the community is a shared responsibility.
                </p>
              </div>
            </section>

            {/* Health Disclaimer */}
            <section id="health-disclaimer" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Health Disclaimer</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  The Cancer-Free Protocol Community and all content shared inside this community are
                  provided for educational and informational purposes only.
                </p>
                <p>
                  They are designed to help you better understand lifestyle, nutrition, and principles
                  that support recovery that may contribute to long-term health and well-being, not to
                  diagnose, treat, cure, or prevent any disease.
                </p>
                <p>
                  Every person&apos;s medical history, cancer type, treatment plan, genetics, medications,
                  and recovery journey are unique. Because of this, what is shared here may not be
                  appropriate or safe for everyone.
                </p>
                <p>
                  Nothing in this community, including posts, videos, comments, discussions, protocols,
                  or suggested practices, is intended to replace, override, or contradict the advice,
                  treatment plan, or recommendations given to you by your oncologist, physician, or other
                  licensed healthcare provider.
                </p>
                <p>
                  You should always consult your personal healthcare provider before making any changes
                  related to diet, supplements, physical activity, medications, or lifestyle, especially
                  during or after cancer treatment.
                </p>
                <p>
                  By participating in this community and choosing to apply any information shared here,
                  you acknowledge that you do so voluntarily and at your own discretion, and that
                  responsibility for health decisions remains between you and your healthcare team.
                </p>
                <p>
                  If something here feels unclear, unsuitable, or concerning for your situation, that is
                  a signal to pause and discuss it with your medical provider.
                </p>
              </div>
            </section>

            {/* Content Use Policy */}
            <section id="content-use" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Community Content Use Policy</h2>
              <p className="text-stone-600 leading-relaxed">
                All content shared in this community is provided for members&apos; personal learning
                inside the community only. Copying, recording, sharing, translating, storing, or any
                commercial use is not allowed.
              </p>
            </section>

            {/* Accessibility Statement */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Accessibility Statement</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <h3 className="text-lg font-semibold text-stone-800">Our Commitment to Inclusion</h3>
                <p>
                  We are committed to making this community accessible, supportive, and easy to navigate
                  for people of all abilities, and we continuously work to improve the experience we provide.
                </p>

                <h3 className="text-lg font-semibold text-stone-800 pt-2">Third-Party Platform Notice</h3>
                <p>
                  This community is hosted on Skool.com. Please be aware that Skool is a third-party
                  platform, and we do not have control over the underlying software, navigation menus, or
                  technical infrastructure. While we advocate for accessibility, the technical compliance
                  of the website interface itself is managed by Skool.
                </p>

                <h3 className="text-lg font-semibold text-stone-800 pt-2">Our Content Standards</h3>
                <p>To ensure the best possible experience for all members, we strive to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Include captions or transcripts for our video lessons.</li>
                  <li>Provide descriptive text or captions for images and infographics.</li>
                  <li>Use clear, readable fonts and structured formatting in our posts.</li>
                  <li>Offer text-based alternatives for complex PDF or image documents.</li>
                </ul>

                <h3 className="text-lg font-semibold text-stone-800 pt-2">Feedback &amp; Support</h3>
                <p>
                  Accessibility is an ongoing process. If you find that a specific piece of content is not
                  accessible to you, or if you are having trouble navigating our group due to a disability,
                  please let us know.
                </p>
                <p>
                  We are happy to provide information or training materials in an alternative format (such
                  as a direct email) to ensure you have the full benefit of this community.
                </p>

                <h3 className="text-lg font-semibold text-stone-800 pt-2">Contact Us</h3>
                <p>
                  For any accessibility-related requests or feedback, please reach out to us
                  at{' '}
                  <a href="mailto:emma@emmaweil.com" className="text-primary-600 hover:text-primary-700 underline">
                    emma@emmaweil.com
                  </a>.
                </p>
              </div>
            </section>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
