// src/components/Sections/CallToAction.tsx

import React from "react";
import ButtonPurple from "../ui/ButtonPurple";
import elipse from "../../../public/images/elipse-1.png";
import elipse2 from "../../../public/images/elipse-2.png";
import macbook from "../../../public/images/macbook.png";
import Image from "next/image";

const CallToAction: React.FC = () => {
  return (
    <section
      id="call-to-action"
      className="py-12 bg-[#7E22CE] min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-sm font-bold text-[#FCD34D] mb-2">
              Get the Sun to power your home
            </h2>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white max-w-4xl w-full">
              All the power that you need for your house is now available
            </h1>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center items-end space-y-4 mt-0 lg:mt-8">
            <ButtonPurple
              text="Request a Quote"
              ariaLabel="Request a Quote"
              buttonType="button2"
            />
            <p className="text-white text-sm mr-8 md:mr-4">
              Egestas fringilla aliquam leo
            </p>
          </div>
        </div>

        {/* MacBook Image */}
        <div className="mt-12 flex justify-center">
          <Image
            src={macbook}
            alt="MacBook"
            className="w-full max-w-lg lg:max-w-2xl"
            priority
          />
        </div>
      </div>

      {/* Ellipse Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* For large screens: Top-right corner */}
        <div className="hidden lg:block absolute top-0 right-0">
          <Image
            src={elipse}
            alt="Ellipse"
            width={600}
            height={600}
            className="object-contain"
            loading="lazy"
          />
        </div>
        {/* For small screens: Bottom-left corner */}
        <div className="block lg:hidden absolute bottom-0 left-0">
          <Image
            src={elipse2}
            alt="Ellipse"
            width={200}
            height={200}
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
