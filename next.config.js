/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  webpack: (config, { isServer }) => {
    // Add XML loader
    config.module.rules.push({
      test: /\.xml$/,
      use: [
        {
          loader: 'xml-loader',
        },
      ],
    });

    return config;
  },
};
