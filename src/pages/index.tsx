// src/pages/index.tsx

import Hero from "@/components/Sections/Hero";
import Features from "@/components/Sections/Features";
import TestimonialCarousel from "@/components/Sections/TestmonialCarrousel";
import SecondarySection from "@/components/Sections/SecondarySection";
import CallToAction from "@/components/Sections/CallToAction";
import Services from "@/components/Sections/Services"
import PremiumServices from "@/components/Sections/PremiumServices";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <PremiumServices />
      <TestimonialCarousel />
      <SecondarySection />
      <CallToAction />
    </>
  );
};

// Função para habilitar SSG
export const getStaticProps = async () => {
  return {
    props: {}, // Nenhum dado necessário, apenas para ativar SSG
  };
};

export default Home;
