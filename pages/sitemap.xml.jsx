import React from 'react';

const Sitemap = () => {
  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>https://www.techblogservice.online/</loc>
        <lastmod>2024-04-01T18:05:23+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://www.techblogservice.online/blog</loc>
        <lastmod>2024-04-01T18:05:23+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.techblogservice.online/about</loc>
        <lastmod>2024-04-01T18:05:23+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.techblogservice.online/privacy</loc>
        <lastmod>2024-04-01T18:05:23+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.techblogservice.online/contact</loc>
        <lastmod>2024-04-01T18:05:23+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      {/* Add more URL entries as needed */}
    </urlset>
  );
};

export default Sitemap;