import { motion } from "framer-motion";
import Image from "next/image";
import rectangle from "../../../public/images/rectangle-2.png";
import placeholderMobile from "../../../public/images/mobile-app-placeholder-2.png";

const PremiumServices: React.FC = () => {
  return (
    <section id="premium-services" className="relative overflow-hidden py-12 mt-6 h-auto sm:h-96 lg:h-[600px] xl:h-[750px]">
      {/* Background Images para Desktop */}
      <div className="hidden sm:block md:hidden lg:hidden xl:block 2xl:block">
        <BackgroundImages />
      </div>

      <div
        className="
          container mx-auto 
          flex 
          justify-start 
          md:justify-center 
          lg:justify-center 
          xl:justify-start 
          2xl:justify-start 
          items-start 
          px-4 sm:px-6 md:px-10 lg:px-20 xl:px-20 2xl:px-20 
          sm:text-left 
          text-center 
          z-10 
          relative 
          h-auto
        "
      >
        {/* Conteúdo dos Destaques */}
        <motion.div
          className="max-w-3xl w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h1 className="text-sm font-bold text-[#d97706] mb-2">System Features</h1>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#0F172A]">
            Powerful Features
          </h2>
          <p className="text-sm font-normal leading-relaxed text-[#0F172A] max-w-6xl mt-4">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>

          {/* Blocos de Destaques */}
          <div className="mt-16 xl:mt-18 2xl:mt-20 grid grid-cols-2 gap-x-6 gap-y-8 xl:gap-y-28 2xl:gap-y-36">
            <ServiceBlock
              title="Erat sit"
              description="Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis."
            />
            <ServiceBlock
              title="Ullamcorper arcu"
              description="Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum."
            />
            <ServiceBlock
              title="Et pellentesque"
              description="Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate."
            />
            <ServiceBlock
              title="Amet egestas"
              description="Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis."
            />
          </div>
        </motion.div>
      </div>

      {/* Background Images para Mobile */}
      <div className="block sm:hidden ">
        <BackgroundImages isMobile />
      </div>
    </section>
  );
};

interface ServiceBlockProps {
  title: string;
  description: string;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ title, description }) => (
  <motion.div
    className="mt-10 md:mt-0"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h3 className="text-xl font-semibold text-[#0F172A]">{title}</h3>
    <p className="text-sm text-[#0F172A] mt-4">{description}</p>
  </motion.div>
);

interface BackgroundImagesProps {
  isMobile?: boolean;
}

const BackgroundImages: React.FC<BackgroundImagesProps> = ({ isMobile }) => (
  <>
    {/* Imagem do Retângulo */}
    <div
      className={`${
        isMobile ? "w-80 ml-24" : "absolute top-0 right-0 z-0 w-72 sm:w-60 md:w-80 lg:w-96 xl:w-96 2xl:w-[26rem]"
      }`}
    >
      <Image
        src={rectangle}
        alt="Decorative rectangle background"
        width={500}
        height={500}
        className="object-contain"
      />
    </div>

    {/* Imagem de Placeholder Mobile */}
    <div
      className={`${
        isMobile
          ? "shadow-sm w-72 sm:w-48 md:w-64 lg:w-72 xl:w-96 2xl:w-96 mx-auto mt-[-580px] sm:mt-[-60px] mr-0"
          : "absolute top-[-60px] sm:top-[-60px] md:top-[40rem] lg:top-[-60px] xl:top-[-60px] 2xl:top-[-60px] shadow-sm right-1/2 sm:right-10 transform translate-x-1/2 sm:translate-x-0 z-20 sm:z-0 w-72 sm:w-48 md:w-64 lg:w-72 xl:w-96 2xl:w-96"
      }`}
    >
      <Image
        src={placeholderMobile}
        alt="Mobile App Placeholder"
        width={400}
        height={400}
        quality={100}
        className="object-contain"
      />
    </div>
  </>
);

export default PremiumServices;
