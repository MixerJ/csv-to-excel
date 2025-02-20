import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// 获取所有博客文章路径
function getBlogPosts() {
  const blogDir = path.join(process.cwd(), 'src/app/blog')
  const entries = fs.readdirSync(blogDir, { withFileTypes: true })
  
  return entries
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('[')) // 排除 [slug] 目录
    .map(entry => `/blog/${entry.name}`)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://csv-batch-to-excel.vercel.app'
  
  // 定义所有静态路由
  const routes = [
    '',
    '/about',
    '/docs',
    '/faq',
    '/support',
    '/blog',
  ]

  // 获取所有博客文章路由
  const blogRoutes = getBlogPosts()
  
  // 为每个路由生成中文版本（包括博客文章）
  const zhRoutes = [...routes, ...blogRoutes].map(route => `/zh${route}`)

  // 合并所有路由
  const allRoutes = [...routes, ...blogRoutes, ...zhRoutes]

  return allRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith('/blog/') ? 'monthly' : 'weekly', // 博客文章更新频率较低
    priority: route === '' ? 1 : route.startsWith('/blog/') ? 0.7 : 0.8, // 博客文章优先级略低
  }))
} 