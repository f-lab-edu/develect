const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '0px', // Mobile
        md: '600px', // Tablet
        lg: '1200px', // Desktop
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', ...fontFamily.sans],
      },
      colors: {
        // primary
        'primary-50': '#EAE8FF',
        'primary-100': '#D7D3FF',
        'primary-200': '#ADA5FF',
        'primary-300': '#7C6FFF',
        'primary-400': '#5646F6',
        'primary-500': '#4839CC',
        'primary-600': '#392EA3',
        'primary-700': '#292088',
        // blue
        'blue-50': '#EFF3FE',
        'blue-100': '#D4E2FC',
        'blue-200': '#A0BFF8',
        'blue-300': '#5B91F5',
        'blue-400': '#276EF1',
        'blue-500': '#1E54B7',
        'blue-600': '#174291',
        'blue-700': '#102C60',
        // green
        'green-50': '#E6F2ED',
        'green-100': '#ADDEC9',
        'green-200': '#66D19E',
        'green-300': '#06C167',
        'green-400': '#05944F',
        'green-500': '#03703C',
        'green-600': '#03582F',
        'green-700': '#10462D',
        // yellow
        'yellow-50': '#FFFAF0',
        'yellow-100': '#FFF2D9',
        'yellow-200': '#FFE3AC',
        'yellow-300': '#FFCF70',
        'yellow-400': '#FFC043',
        'yellow-500': '#F2A610',
        'yellow-600': '#997328',
        'yellow-700': '#674D1B',
        // red
        'red-50': '#FFEFED',
        'red-100': '#FED7D2',
        'red-200': '#F1998E',
        'red-300': '#E85C4A',
        'red-400': '#E11900',
        'red-500': '#AB1300',
        'red-600': '#870F00',
        'red-700': '#5A0A00',
        // gray
        'gray-50': '#F6F8F9',
        'gray-100': '#E9EDEF',
        'gray-200': '#D6DDE0',
        'gray-300': '#CBCBCB',
        'gray-400': '#AFAFAF',
        'gray-500': '#757575',
        'gray-600': '#545454',
        'gray-700': '#333333',
        'gray-800': '#1F1F1F',
        'gray-900': '#141414',
        // platinum
        'platinum-50': '#F4FAFB',
        'platinum-100': '#EBF5F7',
        'platinum-200': '#CCDFE5',
        'platinum-300': '#A1BDCA',
        'platinum-400': '#8FA3AD',
        'platinum-500': '#6C7C83',
        'platinum-600': '#556268',
        'platinum-700': '#394145',
        'platinum-800': '#142328',
      },
    },
  },
  plugins: [],
}
