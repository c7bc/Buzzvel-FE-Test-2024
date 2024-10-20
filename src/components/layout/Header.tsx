import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">
          Minha SPA
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#features" className="hover:text-blue-500">
                Features
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:text-blue-500">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
