import { useState } from "react";
import Testimonial from "./Testmonial";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Essa SPA transformou meu negócio!",
    author: "João Silva",
    position: "CEO da Empresa X",
  },
  {
    quote: "Excelente performance e design impecável.",
    author: "Maria Oliveira",
    position: "Desenvolvedora Front-end",
  },
  {
    quote: "Recomendo a todos que buscam qualidade.",
    author: "Carlos Santos",
    position: "Designer UX/UI",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">O que dizem nossos clientes</h2>
        <div className="relative max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Testimonial
                quote={testimonials[current].quote}
                author={testimonials[current].author}
                position={testimonials[current].position}
              />
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
            aria-label="Anterior"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
            aria-label="Próximo"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
