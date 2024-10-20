// ButtonPurple.tsx
import { HiArrowRight } from "react-icons/hi";

interface ButtonPurpleProps {
  text: string;
  onClick?: () => void; // Função opcional para o clique do botão
  ariaLabel?: string; // Aria label opcional para acessibilidade
}

const ButtonPurple: React.FC<ButtonPurpleProps> = ({ text, onClick, ariaLabel }) => {
  return (
    <button
      className="flex items-center border-2 border-[#581C87] text-[#581C87] px-12 py-3 sm:px-8 sm:py-2  md:px-8 md:py-2  lg:px-8 lg:py-2  xl:px-8 xl:py-2 2xl:px-10 2xl:py-3  rounded-full transition-all duration-300 hover:bg-[#581C87] hover:text-yellow-400"
      aria-label={ariaLabel}
      onClick={onClick} // Função de clique
    >
      <span className="font-bold text-base">{text}</span>
      <HiArrowRight className="ml-2 text-sm" />
    </button>
  );
};

export default ButtonPurple;
