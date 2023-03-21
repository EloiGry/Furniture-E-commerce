/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  babel: {
    presets: ["next/babel", "@babel/preset-react"],
    plugins: [
      ["@babel/plugin-transform-react-jsx", { "runtime": "automatic" }]
    ]
  }
}

module.exports = nextConfig
