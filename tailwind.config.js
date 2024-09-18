/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        richBlack: "#00413D",
        terraCotta: "#E5745D",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        lg: "1170px",
        xl: "1170px",
        "2xl": "1170px",
      },
    },
  },
  plugins: [],
};
