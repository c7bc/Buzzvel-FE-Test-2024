// src/components/sections/Testimonial.tsx

import Image from 'next/image';
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  image: string; // URL da imagem ou caminho do Next/Image
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start space-y-4">
    {/* Texto do depoimento */}
    <p className="text-sm text-[#0F172A] font-normal mb-2">&quot;{quote}&quot;</p>
    
    {/* Avatar e informações do autor */}
    <div className="flex items-center space-x-4">
      {/* Imagem do autor otimizada com Next/Image */}
      <div className="w-16 h-16 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={`${author}'s avatar`}
          width={64}
          height={64}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Nome e posição do autor */}
      <div>
        <p className="text-[#0F172A] font-semibold">{author}</p>
        <p className="text-[#475569] text-sm">{position}</p>
      </div>
    </div>
  </div>
);

export default Testimonial;
