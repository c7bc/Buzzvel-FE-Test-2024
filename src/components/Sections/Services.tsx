import { motion } from "framer-motion";
import Image from "next/image";
import rectangle from "../../../public/images/rectangle.png";
import placeholderMobile from "../../../public/images/mobile-app-placeholder.png";

const Services: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden py-12 mt-6 h-auto sm:h-96 lg:h-[600px] xl:h-[700px]">
      <div className="hidden sm:block md:hidden lg:hidden xl:block 2xl:block">
        <BackgroundImages />
      </div>

      <div
        className="
          container mx-auto 
          flex 
          justify-end 
          md:justify-center 
          lg:justify-center 
          xl:justify-end 
          2xl:justify-end 
          items-start 
          px-4 sm:px-6 md:px-10 lg:px-20 xl:px-20 2xl:px-20 
          sm:text-left 
          text-center 
          z-10 
          relative 
          h-auto
        "
      >
        <motion.div
          className="max-w-3xl w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h1 className="text-sm font-bold text-[#d97706] mb-2">Services</h1>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#0F172A]">
            Personalized Services
          </h2>
          <p className="text-sm font-normal leading-relaxed text-[#0F172A] max-w-6xl mt-4">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8">
            <ServiceBlock
              title="Et mauris"
              description="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
            />
            <ServiceBlock
              title="Eget sit"
              description="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
            />
            <ServiceBlock
              title="Imperdiet pellentesque"
              description="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
            />
            <ServiceBlock
              title="Non libero"
              description="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
            />
          </div>
        </motion.div>
      </div>

      <div className="block sm:hidden mt-10">
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
    <div
      className={`${
        isMobile ? "w-80" : "absolute top-0 left-0 z-0 w-72 sm:w-60 md:w-80 lg:w-96 xl:w-96 2xl:w-96"
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

    <div
      className={`${
        isMobile
          ? "shadow-sm w-72 sm:w-48 md:w-64 lg:w-72 xl:w-96 2xl:w-96 mx-auto mt-[-600px] sm:mt-[-60px]"
          : "absolute top-[-60px] sm:top-[-60px] md:top-[40rem] lg:top-[-60px] xl:top-[-60px] 2xl:top-[-60px] shadow-sm left-1/2 sm:left-10 transform -translate-x-1/2 sm:translate-x-0 z-20 sm:z-0 w-72 sm:w-48 md:w-64 lg:w-72 xl:w-96 2xl:w-96"
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

export default Services;
