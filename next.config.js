// default next js
const nextConfig = {
  reactStrictMode: true,
};

// windi config
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

module.exports = {
  nextConfig,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
};
