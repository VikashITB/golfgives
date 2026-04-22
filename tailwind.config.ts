import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#14532d",
          dark: "#0f3d21",
          light: "#22c55e"
        }
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      },

      maxWidth: {
        container: "1200px"
      }
    }
  },

  plugins: []
};

export default config;
