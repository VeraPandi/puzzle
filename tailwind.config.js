/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      screens: {
         mobile: { max: "607px" },
         tablet: "767px",
         desktop: "1280px",
      },

      colors: {
         color: {
            white: "#f3f3f4",
            black: "#1c1c1c",
            "dark-gray": "#3f3f46",
            "light-purple": "#795e9e",
            "light-red": "#e54647",
            "light-green": "#c0c556",
            "dark-green": "#797b34",
            sand: "#e6dfcb",
         },
      },

      borderRadius: {
         light: "0.375rem",
         medium: "0.75rem",
      },

      fontFamily: {
         marker: ["Permanent Marker", "cursive"],
         dynapuff: ["DynaPuff", "cursive"],
      },

      boxShadow: {
         light: "0 2px 4px 0 #6a6a6a",
         medium: "0 25px 50px -12px #00000096",
      },

      extend: {
         backgroundImage: {
            "beige-texture":
               "url('/public/assets/backgrounds/beige-texture.png')",
         },
      },
   },
   plugins: [],
};
