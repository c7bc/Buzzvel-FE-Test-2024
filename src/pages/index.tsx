// src/pages/index.tsx

import dynamic from 'next/dynamic';
import SEO from '@/components/SEO';

// Carregamento dinâmico com Suspense para animações
const Hero = dynamic(() => import('@/components/Sections/Hero'), { ssr: false });
const Features = dynamic(() => import('@/components/Sections/Features'), { ssr: false });
const Services = dynamic(() => import('@/components/Sections/Services'), { ssr: false });
const PremiumServices = dynamic(() => import('@/components/Sections/PremiumServices'), { ssr: false });
const TestimonialCarousel = dynamic(() => import('@/components/Sections/TestmonialCarrousel'), { ssr: false });
const CallToAction = dynamic(() => import('@/components/Sections/CallToAction'), { ssr: false });

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Sollar"
        description="Sollar - Liderando o caminho na instalação de painéis solares com soluções inovadoras."
        keywords="painéis solares, instalação solar, energia renovável, soluções sustentáveis"
        ogTitle="Sollar - Soluções em Energia Solar"
        ogDescription="Sollar oferece as melhores soluções em instalação de painéis solares para sua residência ou empresa."
        ogImage="/images/seo-image.png"
        twitterCard="summary_large_image"
      />
      <Hero />
      <Features />
      <Services />
      <PremiumServices />
      <TestimonialCarousel />
      <CallToAction />
    </>
  );
};

// Função para habilitar SSG
export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 60, // Revalida a cada 60 segundos (ISR)
  };
};

export default Home;
