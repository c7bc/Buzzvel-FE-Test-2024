import { motion } from "framer-motion";

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Pronto para começar?
        </motion.h2>
        <motion.a
          href="#"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
        >
          Entre em Contato
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;
