const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        primary: "#217BF4",
        dark: "#0A093D",
        gray: "#656464",
        "dark-gray": "#2B2B39",
        "darker-gray": "#20202D",
        "light-gray": "#8C8C8C",
        "lighter-gray": "#E7E7E7",
        magnolia: "#F3D4FE",
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.875rem",
        8.5: "2.125rem",
        10.5: "2.626rem",
        18: "4.5rem",
        28: "7rem",
        30: "7.8125rem",
        34: "8.25rem",
        42: "10.3125rem",
      },
      margin: {},
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
        12: "3rem",
        "extra-loose": "4.125rem",
      },
      fontSize: {
        "5xl": "3.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        large: "0 7px 22px -6px rgba(33, 123, 244, 34%)",
        avatar: "-5px 4px 14px rgba(151, 151, 151, 28%)",
      },
      borderRadius: {
        xl: "0.875rem",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        hero: "linear-gradient(311.76deg, #F3D4FE -15.24%, #FFFFFF 78.85%)",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "calc(3.5rem - 1px)",
      },
    },
  },

  plugins: [],
};
