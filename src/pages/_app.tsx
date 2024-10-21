// src/pages/_app.tsx

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout seo={{
      title: "Sollar",
      description: "Descrição da sua SPA para SEO",
      keywords: "palavras-chave, para, SEO, Next.js, React",
      ogTitle: "Título da Página",
      ogDescription: "Descrição da página para Open Graph",
      ogImage: "/images/seo-image.png", // Caminho atualizado
      twitterCard: "summary_large_image",
    }}>
      {/* Adicionamos o AnimatePresence para animações de página */}
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
