import { motion } from "framer-motion";

const Features: React.FC = () => {
  const features = [
    {
      title: "Performance",
      description: "Aplicações rápidas e responsivas.",
      icon: "🔥",
    },
    {
      title: "SEO Otimizado",
      description: "Melhore sua visibilidade nos motores de busca.",
      icon: "🚀",
    },
    {
      title: "Design Moderno",
      description: "Interface agradável e intuitiva.",
      icon: "🎨",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Recursos</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="w-1/3 min-w-[200px] p-6 bg-white rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
