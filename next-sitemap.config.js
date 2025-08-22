/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mosbehi.firas.im',   // Your main domain
  generateRobotsTxt: true,       // Generate robots.txt
  sitemapSize: 5000,
  changefreq: 'weekly',          // Optional: how often pages change
  priority: 0.8,                 // Optional: page priority
  outDir: './.next',               // Only if using `next export`. Otherwise default is `.next`
};
