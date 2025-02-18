const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// 加载环境变量
dotenv.config({ path: '.env.local' });

// 获取域名，如果环境变量未设置则使用默认值
const domain = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const currentDate = new Date().toISOString().slice(0, 10);

// 处理URL路径
function formatPath(path: string) {
  return path === '/' ? '' : path;
}

// 定义网站的路由
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/blog/understanding-csv-excel', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/batch-conversion-best-practices', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/data-security-in-file-conversion', priority: 0.7, changefreq: 'monthly' },
  { path: '/about', priority: 0.5, changefreq: 'monthly' },
  // 中文路由
  { path: '/zh', priority: 1.0, changefreq: 'weekly' },
  { path: '/zh/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/zh/blog/understanding-csv-excel', priority: 0.7, changefreq: 'monthly' },
  { path: '/zh/blog/batch-conversion-best-practices', priority: 0.7, changefreq: 'monthly' },
  { path: '/zh/blog/data-security-in-file-conversion', priority: 0.7, changefreq: 'monthly' },
  { path: '/zh/about', priority: 0.5, changefreq: 'monthly' },
];

// 确保目录存在
function ensureDirectoryExists(filePath: string) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return;
  }
  fs.mkdirSync(dirname, { recursive: true });
}

// 生成 sitemap.xml
function generateSitemap() {
  const urlElements = routes.map(route => {
    const formattedPath = formatPath(route.path);
    const alternateHref = route.path.startsWith('/zh')
      ? `${domain}${formatPath(route.path.replace('/zh', ''))}`
      : `${domain}/zh${formattedPath}`;
    
    return `  <url>
    <loc>${domain}${formattedPath}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="${route.path.startsWith('/zh') ? 'en' : 'zh'}" href="${alternateHref}"/>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlElements}
</urlset>`;

  const filePath = path.join(process.cwd(), 'public/sitemap.xml');
  ensureDirectoryExists(filePath);
  fs.writeFileSync(filePath, sitemap);
  console.log('✅ Generated sitemap.xml');
}

// 生成 robots.txt
function generateRobots() {
  const robots = `# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${domain}/sitemap.xml

# Crawl-delay
Crawl-delay: 10

# Disallow patterns
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Host
Host: ${domain}`;

  const filePath = path.join(process.cwd(), 'public/robots.txt');
  ensureDirectoryExists(filePath);
  fs.writeFileSync(filePath, robots);
  console.log('✅ Generated robots.txt');
}

// 执行生成
try {
  if (!fs.existsSync(path.join(process.cwd(), 'public'))) {
    fs.mkdirSync(path.join(process.cwd(), 'public'), { recursive: true });
  }

  generateSitemap();
  generateRobots();
  console.log('✨ Successfully generated SEO files!');
  console.log(`🌐 Domain: ${domain}`);
} catch (error) {
  console.error('❌ Error generating SEO files:', error);
  process.exit(1);
} 