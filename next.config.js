import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  // This is the default path to your i18n config
  './src/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
