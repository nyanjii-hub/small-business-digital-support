import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          600: "#2563eb",
          700: "#1d4ed8",
          900: "#1e3a8a"
        },
        ink: "#172033"
      },
      boxShadow: {
        soft: "0 12px 36px rgba(23, 32, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
