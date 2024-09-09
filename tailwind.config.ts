import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        nanum: ["Nanum Pen Script", "cursive"],
        inter: ["Inter", "sans-serif"],
        montserratBold: ["Montserrat-ExtraBold", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-bg": "rgb(28,0,65)",
        "dark-bg": "#161616",
        aboutground: "#181022",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(28,0,65,1) 0%, rgba(22,22,22,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
