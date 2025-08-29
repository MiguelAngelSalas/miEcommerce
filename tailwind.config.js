export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // ajustá según tu estructura
  ],
  safelist: [
    'w-[170px]', 'h-[226px]',
    'w-[255px]', 'h-[369px]',
    'w-[340px]', 'h-[567px]',
    'w-[492px]', 'h-[680px]',
    'w-[794px]', 'h-[1123px]',
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3',
    'grid-rows-1', 'grid-rows-2', 'grid-rows-3',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MiFuente'], // fuente personalizada
      },
    },
  },
  plugins: [],
}
