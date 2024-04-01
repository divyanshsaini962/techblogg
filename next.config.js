/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { isServer }) => {
    // Ignore XML files
    config.module.rules.push({
      test: /\.xml$/,
      loader: 'ignore-loader',
    });

    return config;
  },
};
