// Header.tsx
import Link from "next/link";
import { MdOutlineHeadphones } from "react-icons/md";
import ButtonPurple from "../ui/ButtonPurple"; // Importando o botão reutilizável

const Header: React.FC = () => {
  return (
    <header className="bg-white w-full absolute top-0 left-0">
      <div className="container mx-auto flex items-center justify-between max-h-28 py-6 px-20">
        {/* Logo and Navigation */}
        <div className="flex items-center">
          <Link href="/" aria-label="Home" className="text-2xl font-extrabold text-[#0F172A]">
            sollar
          </Link>

          <nav className="ml-9 flex space-x-8">
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
                className="text-xs font-bold tracking-wide text-[#0F172A] leading-6 hover:text-gray-700 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact and Quote Button */}
        <div className="flex items-center space-x-8 z-10">
          {/* Phone and Icon */}
          <div className="flex items-center text-[#0369A1]">
            <MdOutlineHeadphones className="text-2xl" />
            <h2 className="ml-3 text-xs leading-6 tracking-wide font-semibold">
              555 818 282
            </h2>
          </div>

          {/* Reusing the ButtonPurple component */}
          <ButtonPurple text="Request a Quote" ariaLabel="Request a Quote" />
        </div>
      </div>
    </header>
  );
};

export default Header;
