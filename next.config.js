/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const nextTranslate = require('next-translate')

module.exports = nextTranslate()
