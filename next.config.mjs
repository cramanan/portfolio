const { i18n } = import("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n,
};

export default nextConfig;
