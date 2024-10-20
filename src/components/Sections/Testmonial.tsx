import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="italic mb-4">{quote}</p>
      <p className="font-bold">{author}</p>
      <p className="text-sm text-gray-500">{position}</p>
    </motion.div>
  );
};

export default Testimonial;
