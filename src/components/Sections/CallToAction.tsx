// src/components/sections/CallToAction.tsx

import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import ellipse1 from "../../../public/images/elipse-1.png";
import ellipse2 from "../../../public/images/elipse-2.png";
import macbook from "../../../public/images/macbook.png";
import { motion } from "framer-motion";

const CallToAction: React.FC = () => {
  return (
    <section
      id="call-to-action"
      className="py-12 bg-[#581C87] lg:bg-[#7E22CE] min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
          {/* Texto */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-[#FCD34D] mb-2">
              Get the Sun to power your home
            </h2>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white max-w-4xl w-full">
              All the power that you need for your house is now available
            </h1>
          </motion.div>

          {/* Botão e Descrição */}
          <motion.div
            className="lg:w-1/2 flex flex-col justify-center items-end space-y-4 mt-0 lg:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button text="Request a Quote" ariaLabel="Request a Quote" buttonType="button2" />
            <p className="text-white text-sm mr-8 md:mr-4 lg:mr-4 xl:mr-4 2xl:mr-7">
              Egestas fringilla aliquam leo
            </p>
          </motion.div>
        </div>

        {/* Imagem do MacBook */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={macbook}
            alt="MacBook showcasing Soller services"
            className="w-full max-w-lg lg:max-w-2xl"
          />
        </motion.div>
      </div>

      {/* Imagens Decorativas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top-right Ellipse para telas grandes */}
        <div className="hidden lg:block absolute top-0 right-0">
          <Image
            src={ellipse1}
            alt="Decorative ellipse"
            width={600}
            height={600}
            className="object-contain"
            loading="lazy"
          />
        </div>
        {/* Bottom-left Ellipse para telas pequenas */}
        <div className="block lg:hidden absolute bottom-0 left-0">
          <Image
            src={ellipse2}
            alt="Decorative ellipse"
            width={200}
            height={200}
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
