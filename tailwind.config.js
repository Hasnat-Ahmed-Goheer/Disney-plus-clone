/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/src/assets/images/login-background.jpg')",
        home: "url('/src/assets/images/home-background.png')",
      },
      colors: {
        primary: "#040714",
      },
    },
  },
  plugins: [],
};
