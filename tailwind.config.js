/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/@core/**/*.{js,ts,jsx,tsx}",
    "./src/@core/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sansita", "sans-serif"],
      },
      backgroundColor: {
        "main-bg": "#FBFBFB",
        "sidebar-bg": "#FFF8F8",
        "primary-bg": "#FF6363",
        pending: "#F7A9A0",
        approved: "#24C12B",
        refund: "#FF6363",
        processing: "#F0A500",
        delivered: "#24C12B",
      },
      textColor: {
        "main-text": "#FF6363",
        "primary-black": "#333333",
      },
      borderColor: {
        "border-main": "#FF6363",
      },
    },
  },
  plugins: [],
};
