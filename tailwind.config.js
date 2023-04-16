/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#040404",
        white: "#fff",
        dimgray: "#616161",
        mediumblue: "#0048ff",
        gainsboro: { "100": "#e6e6e6", "200": "#d9d9d9" },
        darkslategray: "#2e2e2e",
      },
      fontFamily: { montserrat: "Montserrat" },
    },
    fontSize: { base: "16px" },
  },
  corePlugins: { preflight: false },
};
