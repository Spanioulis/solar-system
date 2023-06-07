/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   sassOptions: {
      prependData: `@import "./src/styles/settings/__settings.scss";`
   }
};

module.exports = nextConfig;
