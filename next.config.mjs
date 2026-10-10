/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: '/id/pendaftaran',
        destination: '/id',
        permanent: true,
      },
      {
        source: '/pendaftaran',
        destination: '/id',
        permanent: true,
      },
      {
        source: '/id/dampak-sosial',
        destination: '/id',
        permanent: true,
      },
      {
        source: '/id/data-dampak-sosial',
        destination: '/id',
        permanent: true,
      },
      {
        source: '/id/statistik',
        destination: '/id',
        permanent: true,
      },
      {
        source: '/dampak-sosial',
        destination: '/id',
        permanent: true,
      },
      {
        source: '/data-dampak-sosial',
        destination: '/id',
        permanent: true,
      },
      {
        source: '/statistik',
        destination: '/id',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

