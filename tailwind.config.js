/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        float: '0 25px 45px -30px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
