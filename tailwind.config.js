/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Crimson: "hsl(0deg, 100%, 20%)",
        Dark_Slate_Grey: "hsl(234, 29%, 20%)",
        Charcoal_Grey: "hsl(235, 18%, 26%)",
        Grey: "hsl(231, 7%, 60%)",
        White: "hsl(0, 0%, 100%)",
        Pale_Navy: "#36384D",
        Dark_Navy: "#242742",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
