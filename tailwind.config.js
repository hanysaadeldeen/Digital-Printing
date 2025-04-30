/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A0911',
        'secondary': '#4E4A5B',
      },
      borderRadius: {
      card:"40px"
    }
    },
  },
  plugins: [],
};
