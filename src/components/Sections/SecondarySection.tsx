import Image from "next/image";
import { motion } from "framer-motion";

const SecondarySection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 p-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-lg">
            Somos uma equipe dedicada a criar aplicações web de alta qualidade, focadas em
            performance e experiência do usuário.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 p-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about-us.jpg"
            alt="Sobre Nós"
            className="rounded-lg shadow-md"
            width={600}
            height={400}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SecondarySection;
