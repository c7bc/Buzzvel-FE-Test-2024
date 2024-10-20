// Header.tsx
import Link from "next/link";
import { MdOutlineHeadphones } from "react-icons/md";
import ButtonPurple from "../ui/ButtonPurple"; // Importando o botão reutilizável

const Header: React.FC = () => {
  return (
    <header className="bg-white w-full absolute top-0 left-0">
      <div className="container mx-auto flex items-center justify-between max-h-28 py-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-20 2xl:px-20">
        {/* Logo and Navigation */}
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="Home"
            className="text-4xl font-extrabold text-[#0F172A] sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl"
          >
            soller
          </Link>

          {/* Nav is hidden on screens smaller than md */}
          <nav className="hidden md:flex ml-9 space-x-8">
            {[
              { href: "/", label: "Products" },
              { href: "/", label: "Solutions" },
              { href: "/", label: "Services" },
              { href: "/", label: "Configure" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-xs font-bold tracking-wide text-[#0F172A] leading-6 hover:text-gray-700 transition-colors duration-200 sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact and Quote Button */}
        <div className="flex items-center space-x-8 z-10 sm:flex md:flex lg:flex xl:flex 2xl:flex">
          {/* Phone and Icon (hidden on screens smaller than lg) */}
          <div className="hidden lg:flex items-center text-[#0369A1]">
            <MdOutlineHeadphones className="text-2xl" />
            <h2 className="ml-3 text-xs leading-6 tracking-wide font-semibold">
              555 818 282
            </h2>
          </div>

          {/* ButtonPurple (hidden on screens smaller than md) */}
          <div className="hidden md:block">
            <ButtonPurple text="Request a Quote" ariaLabel="Request a Quote" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
