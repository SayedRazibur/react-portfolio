/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Center the container horizontally
      },
      screens: {
        lg: "1170px", // Set the max-width for large screens
      },
    },
  },
  plugins: [],
};
