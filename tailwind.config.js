/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: "#0F666D",
      white: "#FFF",
      black: "#000",
       lightGreen:"#D7F4E3",
       yellow:"#FEF0CD",
      "black-opacity-60": "#00000060"

    },
    extend: {
      backgroundColor: {
        pending: '#FEF0CD',
        scheduled: '#D7F4E3',

      },

    }
  }
}
