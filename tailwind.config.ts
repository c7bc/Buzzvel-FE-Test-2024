import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        ipad: "820px", // Para o iPad Air em modo retrato
        surface: "912px", // Para o Surface Pro 7 em modo retrato
        xlarge: "1536px", // Define um breakpoint personalizado para 1536px
      },
    },
  },
  plugins: [],
};
export default config;
