/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/web3-payment',
        permanent: true,
      },
    ];
  },
  webpack(config) {
    // Remove or comment out this block if you don't need it:
    /*
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: '@dhiwise/component-tagger/nextLoader',
      }],
    });
    */
    return config;
  },
};
export default nextConfig;