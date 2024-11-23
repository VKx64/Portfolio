/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonBG: "#3A3A3A",
        buttonborder: "#535353",
        greenButtonBorder: "#90FFA1",
        greenButtonBG: "#214926",
        greenButtonText: "#B0FFBF",
      },
      transitionDuration: {
        '2000': '2000ms'
      },
    },
  },
  plugins: [],
};
