/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        ssm: ['10px', '16px'],
        mm: ['18px', '20px'],
      },
      colors: {
        'whitesmoke': '#F5F5F5',
      },

    },
  },
  plugins: [],
}
