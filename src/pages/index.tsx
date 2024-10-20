// src/pages/index.tsx

import Hero from "@/components/Sections/Hero";
import Features from "@/components/Sections/Features";
import TestimonialCarousel from "@/components/Sections/TestmonialCarrousel";
import SecondarySection from "@/components/Sections/SecondarySection";
import CallToAction from "@/components/Sections/CallToAction";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
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
