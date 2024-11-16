import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      cursor: {
        custom: "url('/Click.png'), auto",
      },
      colors: {
        main: "#19104b",        // Warna utama
        secondary: "#6BCCDD",    // Warna sekunder
        hover: "#D4365F",        // Warna saat hover
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
