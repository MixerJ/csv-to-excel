import fs from 'fs'
import path from 'path'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://csv-batch-to-excel.vercel.app'

const robotsTxt = `# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 10

# Disallow patterns
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Host
Host: ${baseUrl}
`

// 确保 public 目录存在
const publicDir = path.join(process.cwd(), 'public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

// 写入 robots.txt
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt)
console.log('✅ robots.txt has been generated successfully!') 