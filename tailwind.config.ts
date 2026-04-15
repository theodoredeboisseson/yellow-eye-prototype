import type { Config } from "tailwindcss";

/** 
 * Note: Tailwind v4 primarily uses CSS-based configuration.
 * However, this file is kept to ensure better IDE support and IntelliSense 
 * for custom utilities and classes.
 */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        "primary-hover": "#e6c200",
      },
    },
  },
  plugins: [],
} satisfies Config;
