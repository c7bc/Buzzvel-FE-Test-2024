import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout seo={{
      title: "sollar",
      description: "Descrição da sua SPA para SEO",
      keywords: "palavras-chave, para, SEO, Next.js, React",
      ogTitle: "Título da Página",
      ogDescription: "Descrição da página para Open Graph",
      ogImage: "/og-image.jpg", // Certifique-se de ter esta imagem na pasta public
      twitterCard: "summary_large_image",
    }}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
