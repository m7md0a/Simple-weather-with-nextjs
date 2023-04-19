/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  distDir: 'build',
  images : {
    domains : [
      'images.unsplash.com', 'openweathermap.org'
    ]
  }
}
