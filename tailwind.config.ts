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
      },
      width: {
        "18": "82px",
      },
      colors: {
        "primary/50": "#E3FCF8",
        "primary/600": "#12A58C",
        "primary/700": "#0F8A75",
        "gray/50": "rgba(249, 250, 251, 1)",
        "gray/200": "#EAECF0",
        "gray/300": "#D0D5DD",
        "gray/600": "#475467",
        "gray/700": "#344054",
        "gray/900": "#101828",
        "error/700": "rgba(180, 35, 24, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
export default config;
