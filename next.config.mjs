/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  compress: true,  // Mantém a compressão habilitada
  reactStrictMode: true,  // Modo estrito do React
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',  // Ativa o Bundle Analyzer quando ANALYZE=true
})(nextConfig);
