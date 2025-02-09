/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "rgb(var(---background))",
        forebackground: "rgb(var(--forebackground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
        violetGradient: "linear-gradient(45deg, #7F00FF, #E100FF)",
      },
    },
  },
  plugins: [],
};
