// src/components/sections/Features.tsx

import { motion } from "framer-motion";
import Image from "next/image";
import desktop from "../../../public/images/desktop.png";
import desktopMobile from "../../../public/images/desktop-mobile.png";
import purpleEllipse from "../../../public/images/elipse-purple.png";
import orangeEllipse from "../../../public/images/elipse-orange.png";

const Features: React.FC = () => {
  return (
    <section id="features" className="relative bg-white overflow-hidden py-12">
      {/* Background Ellipses */}
      <BackgroundEllipses />

      <div className="container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-20 2xl:px-20 text-center z-10 relative">
        <motion.h2
          className="text-sm font-bold text-[#d97706] mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          No more waste
        </motion.h2>

        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#0F172A]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Pick the Sun
        </motion.h1>

        <motion.p
          className="text-sm font-normal leading-relaxed text-[#0F172A] max-w-2xl mt-4 px-2 sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </motion.p>

        <motion.div
          className="relative w-full max-w-4xl h-auto mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Imagem para dispositivos móveis e tablets */}
          <div className="block md:hidden">
            <Image
              src={desktopMobile}
              alt="Visualização para dispositivos móveis e tablets"
              layout="responsive"
              width={800}
              height={600}
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Imagem para desktop */}
          <div className="hidden md:block">
            <Image
              src={desktop}
              alt="Desktop exibindo funcionalidades"
              layout="responsive"
              width={800}
              height={600}
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BackgroundEllipses: React.FC = () => (
  <>
    {/* Orange Ellipse */}
    <div className="absolute top-64 sm:top-72 md:top-64 lg:top-72 xl:top-40 2xl:top-40 left-[-20%] sm:left-[-5%] md:left-[-15%] lg:left-24 xl:left-20 2xl:left-32 transform -translate-x-1/3 -translate-y-1/4 z-0">
      <Image
        src={orangeEllipse}
        alt="Decorative orange ellipse"
        width={370}
        height={500}
        className="w-56 h-auto sm:w-80 md:w-96 lg:w-[370px] xl:w-[400px] 2xl:w-[400px]"
        priority
      />
    </div>

    {/* Purple Ellipse */}
    <div className="absolute top-72 sm:top-80 md:top-80 lg:top-80 xl:top-96 2xl:top-96 right-[-40%] sm:right-[-5%] md:right-[-15%] lg:right-32 xl:right-30 2xl:right-36 transform translate-x-1/3 -translate-y-1/4 z-0">
      <Image
        src={purpleEllipse}
        alt="Decorative purple ellipse"
        width={400}
        height={400}
        className="w-80 h-auto sm:w-96 md:w-[400px] lg:w-[400px] xl:w-[450px] 2xl:w-[450px]"
        priority
      />
    </div>
  </>
);

export default Features;
