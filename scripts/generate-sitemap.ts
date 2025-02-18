const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env.local' });

// Get domain from environment variable or use production URL
const domain = process.env.NEXT_PUBLIC_SITE_URL || 'https://csv-batch-to-excel.vercel.app';
const currentDate = new Date().toISOString(); // Use ISO 8601 format

// Handle URL paths
function formatPath(path: string) {
  return path === '/' ? '' : path;
}

// Define website routes
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/blog/understanding-csv-excel', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/batch-conversion-best-practices', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/data-security-in-file-conversion', priority: 0.7, changefreq: 'monthly' },
  { path: '/about', priority: 0.5, changefreq: 'monthly' },
  { path: '/docs', priority: 0.9, changefreq: 'weekly' },
  { path: '/faq', priority: 0.8, changefreq: 'weekly' },
  { path: '/support', priority: 0.8, changefreq: 'weekly' },
  // Chinese routes
  { path: '/zh', priority: 1.0, changefreq: 'weekly' },
  { path: '/zh/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/zh/blog/understanding-csv-excel', priority: 0.7, changefreq: 'monthly' },
  { path: '/zh/blog/batch-conversion-best-practices', priority: 0.7, changefreq: 'monthly' },
  { path: '/zh/blog/data-security-in-file-conversion', priority: 0.7, changefreq: 'monthly' },
  { path: '/zh/about', priority: 0.5, changefreq: 'monthly' },
  { path: '/zh/docs', priority: 0.9, changefreq: 'weekly' },
  { path: '/zh/faq', priority: 0.8, changefreq: 'weekly' },
  { path: '/zh/support', priority: 0.8, changefreq: 'weekly' },
];

// Ensure directory exists
function ensureDirectoryExists(filePath: string) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return;
  }
  fs.mkdirSync(dirname, { recursive: true });
}

// Generate sitemap.xml
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

// Generate robots.txt
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

// Execute generation
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