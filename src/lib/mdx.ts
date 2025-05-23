import { compileMDX } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs'
import path from 'path'
import { mdxComponents } from '@/components/shared/MdxComponents'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrism from '@mapbox/rehype-prism'

export async function getMDXContent(slug: string) {
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`)
  const source = await fs.readFile(filePath, 'utf-8')
  
  const { content, frontmatter } = await compileMDX({
    source,
    components: mdxComponents,
    options: { 
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeKatex, rehypePrism],
      },
    }
  })
  
  return { mdxProcessedContent: content, frontmatter }
}
