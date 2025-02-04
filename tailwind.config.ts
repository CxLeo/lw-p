import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1441px',
      '2xl':'1560px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paragraph:"#434343",
        primary:"#F86F1A"
      },
      fontFamily:{
         supply:["var(--font-supply)"],
         formula:["var(--font-formula)"],
         formulaMedium:["var(--font-formula-medium)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
