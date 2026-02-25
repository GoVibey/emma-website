import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Markdown from 'react-markdown'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Section } from '@/components/ui/section'
import { getPostBySlug, getAllSlugs, posts } from '@/lib/blog'
import { ArticleCarousel } from '@/components/article-carousel'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Ima Wile`,
    description: post.metaDescription,
  }
}

const categoryColor: Record<string, string> = {
  Prevention: 'bg-emerald-100 text-emerald-700',
  Nutrition: 'bg-amber-100 text-amber-700',
  Lifestyle: 'bg-sky-100 text-sky-700',
  Mindset: 'bg-violet-100 text-violet-700',
  Survivorship: 'bg-rose-100 text-rose-700',
  Education: 'bg-indigo-100 text-indigo-700',
  Community: 'bg-orange-100 text-orange-700',
  Health: 'bg-teal-100 text-teal-700',
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const otherPosts = posts.filter((p) => p.slug !== slug)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Section>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/resources/blog"
              className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-600 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {post.image && (
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColor[post.category] ?? 'bg-stone-100 text-stone-600'}`}>
                {post.category}
              </span>
              <span className="text-xs text-stone-400">{post.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-sm text-stone-500 mb-10">By Emma Weil, Biochemist & Registered Dietitian</p>

            <article className="prose prose-stone prose-lg max-w-none prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:text-stone-900 prose-a:text-primary-600 prose-hr:my-8">
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </Section>

        {otherPosts.length > 0 && (
          <Section className="border-t border-stone-200/60 bg-stone-50/50">
            <ArticleCarousel posts={otherPosts} categoryColor={categoryColor} />
          </Section>
        )}
      </main>
      <Footer />
    </>
  )
}
