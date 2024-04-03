const Sitemap = require('../sitemap');

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.send(Sitemap());
}