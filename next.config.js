/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();


const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.API_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL_ENV,
    },
};

module.exports = withNextIntl(nextConfig)
