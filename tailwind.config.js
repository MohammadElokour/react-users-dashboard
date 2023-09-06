/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", "Poppins", "sans-serif"],
    },
    screens: {
      hsm: { raw: "(max-height: 670px)" },
      hlg: { raw: "(min-height: 900px)" },
    },
  },
  plugins: [],
});
