import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "drilling-machine": "url('/images/image 4.png')",
        "pharmacy-equipment": "url('/images/slider-2.jpg')",
        "bread-crumbs": "url('/images/breadcrumb-01.jpg')",
      },
      fontFamily: {
        sans: ["--var(open_sans)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#240D57",
        "light-purple": "#8456EC",
        "light-pink": "#E87BF8",
        darkgray: "#4F4F4F",
      },
    },
  },
  plugins: [],
};
export default config;
