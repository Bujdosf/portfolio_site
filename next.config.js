/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio_site/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio_site' : '',
  };
