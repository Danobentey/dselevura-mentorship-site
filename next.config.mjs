/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' }
    ]
  },
  output: 'standalone',
  poweredByHeader: false,
  async headers() {
    const securityHeaders = [
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // adjust/remove 'unsafe-*' once inline scripts gone
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https://images.unsplash.com https://plus.unsplash.com https://images.pexels.com",
          "font-src 'self' data:",
          "connect-src 'self'",
          "frame-ancestors 'self'",
          "object-src 'none'",
          "base-uri 'self'"
        ].join('; ')
      },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }
    ];
    return [
      { source: '/(.*)', headers: securityHeaders }
    ];
  }
};

export default nextConfig;
