/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  darkMode: 'class',

  theme: {

    extend: {

      fontFamily: {

        sans: ['Inter', 'system-ui', 'sans-serif'],

      },

      colors: {

        // 〽️ THE MAIZE & BLUE IDENTITY

        brand: {

          blue: '#00274C',  // PMS 282 (Primary Dark)

          maize: '#FFCB05', // PMS 7406 (Accent/Highlight)

        },

        // Override indigo to use brand blue (#00274C)

        indigo: {

          50: '#E6EDF3',   // Very light tint

          100: '#CCDBE7',  // Light tint

          200: '#99B7CF',  // Lighter tint

          300: '#6693B7',  // Light tint

          400: '#336F9F',  // Medium tint

          500: '#1A4B7F',  // Medium shade

          600: '#00274C',  // Brand Blue (PMS 282) - Primary

          700: '#001F3D',  // Darker shade

          800: '#00172E',  // Very dark shade

          900: '#000F1F',  // Darkest shade

          950: '#000408',  // Near black

        },

        // Override purple to use brand maize (#FFCB05)

        purple: {

          50: '#FFFCF0',   // Very light cream tint

          100: '#FFF9E0',  // Light cream tint

          200: '#FFF3C1',  // Lighter yellow tint

          300: '#FFED82',  // Light yellow tint

          400: '#FFE043',  // Medium yellow tint

          500: '#FFD424',  // Medium yellow shade

          600: '#FFCB05',  // Brand Maize (PMS 7406) - Primary

          700: '#CCA204',  // Darker shade

          800: '#997A03',  // Very dark shade

          900: '#665102',  // Darkest shade

          950: '#332901',  // Near black

        },

        // Override rose to use custom red (#9A3324)

        rose: {

          50: '#FDF2F2',   // Very light tint

          100: '#FCE5E5',  // Light tint

          200: '#F9CBCB',  // Lighter tint

          300: '#F5B1B1',  // Light tint

          400: '#F09797',  // Medium tint

          500: '#EC7D7D',  // Medium shade

          600: '#9A3324',  // Custom Red - Primary

          700: '#7A2920',  // Darker shade

          800: '#5A1F18',  // Very dark shade

          900: '#3A1510',  // Darkest shade

          950: '#1A0A08',  // Near black

        },

        // Semantic aliases for the Comparison Cards

        amateur: {

          bg: '#FDF2F2',    // Light Red background (rose-50)

          border: '#F9CBCB',// Red border (rose-200)

          text: '#9A3324',  // Red text (rose-600)

        },

        pro: {

          bg: '#ffffff',    // Clean White background

          border: '#FFCB05',// Maize border (High quality signal)

          text: '#00274C',  // Brand Blue text (High contrast)

        },

      },

    },

  },

  plugins: [],

}

