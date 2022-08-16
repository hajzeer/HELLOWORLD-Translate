/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig

const withImages = require("next-images");
module.exports = withImages();

module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
};

module.exports = {
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
    },
}