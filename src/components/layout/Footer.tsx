// src/components/layout/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/ico.png";
import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [breakpoint, setBreakpoint] = useState<string>("");

  // Define os breakpoints de acordo com o Tailwind CSS
  const getBreakpoint = (width: number) => {
    if (width >= 1280) return "xl";
    if (width >= 1024) return "lg";
    if (width >= 768) return "md";
    if (width >= 640) return "sm";
    return "xs";
  };

  useEffect(() => {
    // Função para atualizar o breakpoint
    const handleResize = () => {
      const currentBreakpoint = getBreakpoint(window.innerWidth);
      setBreakpoint(currentBreakpoint);
      console.log(`Current breakpoint: ${currentBreakpoint}`);
    };

    // Define o listener para resize
    window.addEventListener("resize", handleResize);

    // Chama a função inicialmente para logar o breakpoint ao carregar a página
    handleResize();

    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row justify-between items-center py-6 px-4 sm:px-6 lg:px-20">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4 lg:mb-0">
          <div className="flex items-center justify-center space-x-4">
            <Image src={logo} alt="Soller Logo" width={50} height={50} quality={75} />
            <Link href="/" aria-label="Home" className="text-2xl font-extrabold text-[#0F172A] mt-2 md:mt-0">
              Soller
            </Link>
          </div>
          <p className="text-sm text-[#0F172A] text-center sm:text-left sm:ml-4">
            &copy; {new Date().getFullYear()} Soller, Inc. All Rights Reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link href="/terms" aria-label="Terms" className="text-sm text-[#0F172A] hover:text-[#1d2d52]">
            Terms
          </Link>
          <Link href="/privacy" aria-label="Privacy" className="text-sm text-[#0F172A] hover:text-[#1d2d52]">
            Privacy
          </Link>
          <Link href="/support" aria-label="Support" className="text-sm text-[#0F172A] hover:text-[#1d2d52]">
            Support
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
