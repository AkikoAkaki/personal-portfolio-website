import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getBlogBySlug, type BlogType } from '@/lib/blogs'
import { getMDXContent } from '@/lib/mdx'
import { BlogLayout } from '@/components/layout/BlogLayout'

export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug)
  if (!blog) {
    return {
      title: 'Blog not found',
    }
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

export default async function BlogPage({ params }: Props) {
  const blogMeta = await getBlogBySlug(params.slug)
  
  if (!blogMeta) {
    notFound()
  }

  const { mdxProcessedContent, frontmatter: mdxFrontmatter } = await getMDXContent(params.slug)
  
  const displayBlogMeta: BlogType = {
    slug: params.slug,
    title: (mdxFrontmatter.title as string) || blogMeta.title,
    description: (mdxFrontmatter.description as string) || blogMeta.description,
    date: (mdxFrontmatter.date as string) || blogMeta.date,
    author: (mdxFrontmatter.author as string) || blogMeta.author,
  };

  return (
    <BlogLayout
        blog={displayBlogMeta}
    >
      <div className="mt-8 prose dark:prose-invert">
        {mdxProcessedContent}
      </div>
    </BlogLayout>
  )
}
