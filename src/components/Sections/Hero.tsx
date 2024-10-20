import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Bem-vindo à Minha SPA</h1>
        <p className="text-xl mb-8">Uma experiência incrível com Next.js e React</p>
        <a
          href="#features"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Saiba Mais
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
