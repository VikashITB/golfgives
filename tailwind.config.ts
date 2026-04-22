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
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
          dark: '#b8923e',
        },
        green: {
          deep: '#0a0f0d',
          surface: '#111a14',
          elevated: '#182118',
          accent: '#2d6a4f',
          highlight: '#52b788',
        },
        brand: {
          DEFAULT: "#14532d",
          dark: "#0f3d21",
          light: "#22c55e"
        }
      },

      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        glow: "0 0 20px rgba(201,168,76,0.25)",
      },

      maxWidth: {
        container: "1200px"
      }
    }
  },

  plugins: []
};

export default config;
