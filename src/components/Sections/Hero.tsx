import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../../public/images/right.png";
import testmonial1 from "../../../public/images/testmonial-1.jpeg";
import ButtonPurple from "../ui/ButtonPurple";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-start justify-between mx-auto h-screen bg-white text-black px-6 lg:px-20 max-w-screen-xl"
    >
      {/* Esquerda: Texto */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-center md:text-left mt-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-4 leading-tight">
          Get the Sun to <br />
          Power Your Home
        </h1>
        <p className="text-base md:text-xl mb-6 font-light text-[#0F172A]">
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
        </p>
        <ButtonPurple text="Request a Quote" ariaLabel="Request a Quote" />

        {/* Testemunho */}
        <div className="mt-20">
          <p className="text-sm font-light text-[#0F172A] mb-4">
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={testmonial1}
                alt="Image Testimonial"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-sm font-light text-[#0F172A]">Rwanda Melflor</h1>
              <p className="text-sm font-light text-[#475569]">zerowaste.com</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Imagem: Posicionada à direita */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-24 right-0 lg:right-[-38px] w-[400px] md:w-[550px]" // Mantém a imagem responsiva
      >
        <Image
          src={heroImage}
          alt="Imagem ilustrativa"
          layout="responsive"
          width={550}
          height={550}
          quality={100}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
