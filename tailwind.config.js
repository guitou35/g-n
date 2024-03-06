/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"
],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tgreen' : '#a4a684',
        'beige' : '#edeedb',
        'rose-beige' : '#e8d4ce',
        'rose-pastel' : '#c27a88',
        'rose-vert' : '#c3a5a6',

        'trose' : "#C9B3B3",
        'tnoir' : "#000000",
        'tblanc' : '#FFFFFF',
        'tbeige' : '#F7F4F4'

      },
      fontFamily: {
        "cormorant" : ['"Cormorant"', 'serif']
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

