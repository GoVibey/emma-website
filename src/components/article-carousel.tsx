'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import type { BlogPost } from '@/lib/blog'

interface ArticleCarouselProps {
  posts: BlogPost[]
  categoryColor: Record<string, string>
}

export function ArticleCarousel({ posts, categoryColor }: ArticleCarouselProps) {
  const [index, setIndex] = useState(0)
  const visibleCount = 3
  const maxIndex = Math.max(0, posts.length - visibleCount)

  if (posts.length === 0) return null

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-stone-900">More Articles</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="p-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={index >= maxIndex}
            className="p-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/blog/${post.slug}`}
              className="w-[calc((100%-48px)/3)] flex-shrink-0 group"
            >
              <Card hover className="!p-0 overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] relative overflow-hidden flex-shrink-0">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-200" />
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColor[post.category] ?? 'bg-stone-100 text-stone-600'}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-stone-400">{post.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 group-hover:text-primary-600 transition-colors leading-snug mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 mt-auto">
                    Read article <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
