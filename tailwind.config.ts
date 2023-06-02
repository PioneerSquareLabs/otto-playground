import { Config } from "tailwindcss";

const config: Config = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};

export default config;
