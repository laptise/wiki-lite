/* eslint-disable @typescript-eslint/no-var-requires */
const { config } = require('dotenv');

config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: { port: Number(process.env.PORT) },
  reactStrictMode: true,
  distDir: '../dist/next',
};

module.exports = nextConfig;
