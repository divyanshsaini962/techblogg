const xmlbuilder = require('xmlbuilder');
const { URL } = require('url');

const baseUrl = new URL('https://www.techblogservice.online');

const Sitemap = () => {
  const urlset = xmlbuilder.create('urlset', { encoding: 'UTF-8' }).att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
    .att('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd');

  const urls = [
    { path: '/', lastmod: '2024-04-01T18:05:23+00:00', priority: 1.00 },
    { path: '/blog', lastmod: '2024-04-01T18:05:23+00:00', priority: 0.80 },
    { path: '/about', lastmod: '2024-04-01T18:05:23+00:00', priority: 0.80 },
    { path: '/privacy', lastmod: '2024-04-01T18:05:23+00:00', priority: 0.80 },
    { path: '/contact', lastmod: '2024-04-01T18:05:23+00:00', priority: 0.80 },
    // Add more URL entries as needed
  ];

  urls.forEach(({ path, lastmod, priority }) => {
    const url = urlset.ele('url');
    url.ele('loc').text(baseUrl.origin + path);
    url.ele('lastmod').text(lastmod);
    url.ele('priority').text(priority.toString());
  });

  return urlset.end({ pretty: true });
};

module.exports = Sitemap;