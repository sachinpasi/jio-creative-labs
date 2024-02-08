/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "5.2rem", // 104px * 0.8 = 83.2px
        h2: "4.2rem", // 84px * 0.8 = 67.2px
        h3: "3.2rem", // 64px * 0.8 = 51.2px
        h4: "2.7rem", // 54px * 0.8 = 43.2px
        label: "1.1rem", // 22px * 0.8 = 17.6px
        body: "1rem", // 20px * 0.8 = 16px
      },

      colors: {
        primary: "#03007F", // Custom primary color
        secondary: "#FF2E63", // Custom secondary color
        "secondary-2": "#00C0CC",
        "white-3": "#707070",
        "black-2": "#424242",
      },
    },
  },
  plugins: [],
};
