import { HiArrowRight } from "react-icons/hi";

interface ButtonPurpleProps {
  text: string;
  onClick?: () => void; // Função opcional para o clique do botão
  ariaLabel?: string; // Aria label opcional para acessibilidade
  buttonType?: 'button1' | 'button2'; // Tipo de botão para alternar estilos
}

const ButtonPurple: React.FC<ButtonPurpleProps> = ({ text, onClick, ariaLabel, buttonType = 'button1' }) => {
  // Definir classes do botão com base no tipo de botão
  const button1 =
    "flex items-center border-2 border-[#581C87] text-[#581C87] px-12 py-3 sm:px-8 sm:py-2 md:px-8 md:py-2 lg:px-8 lg:py-2 xl:px-8 xl:py-2 2xl:px-10 2xl:py-3 rounded-full transition-all duration-300 hover:bg-[#581C87] hover:text-[#FCD34D]";
  
  const button2 =
    "flex items-center border-2 border-[#FCD34D] text-[#FCD34D] px-12 py-3 sm:px-8 sm:py-2 md:px-8 md:py-2 lg:px-8 lg:py-2 xl:px-8 xl:py-2 2xl:px-10 2xl:py-3 rounded-full transition-all duration-300 hover:bg-[#FCD34D] hover:text-[#78350F]";

  return (
    <button
      className={buttonType === 'button1' ? button1 : button2} // Usar estilos com base no tipo de botão
      aria-label={ariaLabel}
      onClick={onClick} // Função de clique
    >
      <span className="font-bold text-base">{text}</span>
      <HiArrowRight className="ml-2 text-sm" />
    </button>
  );
};

export default ButtonPurple;
