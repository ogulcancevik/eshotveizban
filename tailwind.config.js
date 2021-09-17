module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      eshotred : "#DB1F30",
      gray : "#2B3C4F",
      softwhite : "#ECEEF0",
      white : "#ffff",
      black : "#00000",
      buttonred : "#CB3D39",
      buttonwhite :"#FAFAFA",
      tablegray : "#ECECEC",
      izbanblue : "#034091"
    },
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "992px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
