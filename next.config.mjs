/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost'
            },
            {
                protocol: 'https',
                hostname: 'media.newtopographic.art'
            },
            {
                protocol: 'https',
                hostname: 'cms.augustgaukstad.com'
            }
        ]
    }
};

export default nextConfig;
