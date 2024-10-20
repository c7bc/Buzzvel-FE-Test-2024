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
      className="flex items-center border-2 border-[#581C87] text-[#581C87] px-8 py-2 rounded-full transition-all duration-300 hover:bg-[#581C87] hover:text-yellow-400"
      aria-label={ariaLabel}
      onClick={onClick} // Função de clique
    >
      <span className="font-semibold">{text}</span>
      <HiArrowRight className="ml-2 text-sm" />
    </button>
  );
};

export default ButtonPurple;
