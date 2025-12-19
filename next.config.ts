import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        viewTransition: true,
    },
    images: {
        remotePatterns: [new URL('https://storage.yandexcloud.net/personal-page-storage/images/**')],
    },
};

export default nextConfig;
