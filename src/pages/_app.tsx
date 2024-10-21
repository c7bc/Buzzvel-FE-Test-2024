import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout seo={{
      title: "Soller",
      description: "Soller - Liderando o caminho na instalação de painéis solares com soluções inovadoras.",
      keywords: "Painel Solar, Energia Limpa, SEO, Next.js, React",
      ogTitle: "Soller",
      ogDescription: "Soller - Liderando o caminho na instalação de painéis solares com soluções inovadoras.",
      ogImage: "/og-image.jpg", // Eu deixei um caminho fictício
      twitterCard: "summary_large_image",
    }}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
