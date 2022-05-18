module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: '#e53e3e',
      green: '#22c55e'
    },
  },
  plugins: [require("daisyui")],
};
