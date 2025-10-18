const fs = require('fs');
const path = require('path');

const baseUrl = 'https://amanyadev.github.io';
const today = new Date().toISOString().split('T')[0];

// List all your pages here
const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;


const outputDir = path.join('dist');
fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemap);

console.log('✅ Sitemap generated successfully!');