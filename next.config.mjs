/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import { fileURLToPath } from 'node:url';

import withBundleAnalyzer from '@next/bundle-analyzer';
import createJiti from 'jiti';
import withNextIntl from 'next-intl/plugin';

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/libs/Env');

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withRedirectConfig = (nextConfig = {}) => ({
  async redirects() {
    return [
      {
        source: '/settings',
        destination: '/settings/profile',
        permanent: true,
      },
    ];
  },
  ...nextConfig,
});

const withRemotePatterns = (nextConfig = {}) => ({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.iran.liara.run',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
  ...nextConfig,
});

/** @type {import('next').NextConfig} */
export default withRemotePatterns(
  withRedirectConfig(
    bundleAnalyzer(
      withNextIntlConfig({
        eslint: {
          dirs: ['.'],
        },
        poweredByHeader: false,
        reactStrictMode: true,
        experimental: {
          serverComponentsExternalPackages: ['@electric-sql/pglite'],
        },
      }),
    ),
  ),
);
