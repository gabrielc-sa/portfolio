import type { Config } from "tailwindcss";

/** Coolors palette: https://coolors.co/palette/e0fbfc-c2dfe3-9db4c0-5c6b73-253237 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          light: "#e0fbfc",
          "light-muted": "#c2dfe3",
          muted: "#9db4c0",
          dark: "#5c6b73",
          "dark-deep": "#253237",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
