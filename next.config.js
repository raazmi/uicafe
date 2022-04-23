const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "default", // See next.js documentation for other loaders
        domains: ['content.rolex.com']
    },
};

module.exports = withPlugins(
    [
        [
            withPWA,
            {
                pwa: {
                    dest: "public",
                    register: true,
                    skipWaiting: true,
                    disable: process.env.NODE_ENV === "development",
                    runtimeCaching,
                },
            },
        ],
    ],
    nextConfig
);
