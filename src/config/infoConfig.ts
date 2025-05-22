export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Aki (Fengkai) Liu'
export const headline = 'Computer Science and Applied Mathematics Student at University of Rochester.'
export const introduction =
  "My name is Aki. I'm from Shanghai and is currently studying in the United States."
export const email = 'akiliu1116@gmail.com'
export const githubUsername = 'AkikoAkaki'

// about page
export const aboutMeHeadline = 'Who Am I and Why Should You Care?'
export const aboutParagraphs = [
  "My name is Aki. I'm from Shanghai and is currently studying at University of Rochester. I am a Computer Science and Applied Mathematics student with a passion for technology and entrepreneurship.",
  'Currently I am working as a full-stack software engineer and machine learning engineer for an AI company, Artisk, which is focused on revolutionizing brand design by offering AI-powered tools.',
  "I started this blog to share the insights I learn every day. The blogs are focused on different fields, including computer science, humanity, art, and everyday thinking.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about programming, humanity, art, and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/__akikoakaki__/',
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/AkikoAkaki',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
