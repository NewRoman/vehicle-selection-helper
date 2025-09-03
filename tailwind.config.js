/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light color palette from Figma design system
        light: {
          // Background colors
          'bg-primary': '#FFFFFF',
          'bg-secondary': '#F3F3FE',
          'bg-tertiary': '#DFDFF6',
          'bg-secondary-opaque': 'rgba(243, 243, 254, 0.9)',
          'bg-modal': 'rgba(0, 0, 0, 0.8)',
          
          // Label colors
          'label-primary': '#21103F',
          'label-secondary': '#6A6A92',
          'label-tertiary': '#A1A0C2',
          'label-button': '#3DF3C2',
          
          // Fill colors
          'fill-primary': '#DFDFF6',
          'fill-secondary': '#DDDDF0',
          'fill-tertiary': '#BCB7D4',
          'fill-button': '#311562',
          
          // Separator colors
          'separator-non-opaque': '#D3D0EC',
          'separator-opaque': 'rgba(211, 208, 236, 0.5)',
          
          // Icon colors
          'icon-fill': '#21103F',
          'icon-bg': 'rgba(255, 255, 255, 0.2)',
        },
        
        // Dark color palette from Figma design system
        dark: {
          // Background colors
          'bg-primary': '#090117',
          'bg-secondary': '#100C22',
          'bg-tertiary': '#1C1635',
          'bg-secondary-opaque': 'rgba(16, 12, 34, 0.9)',
          'bg-modal': 'rgba(0, 0, 0, 0.8)',
          
          // Label colors
          'label-primary': '#FFFFFF',
          'label-secondary': '#9A98C2',
          'label-tertiary': '#4F4E78',
          'label-button': '#13042D',
          
          // Fill colors
          'fill-primary': '#211C3D',
          'fill-secondary': '#32295A',
          'fill-tertiary': '#6C6B99',
          'fill-button': '#3DF3C2',
          
          // Separator colors
          'separator-non-opaque': '#2C2461',
          'separator-opaque': 'rgba(44, 36, 97, 0.5)',
          
          // Icon colors
          'icon-fill': '#FFFFFF',
          'icon-bg': 'rgba(255, 255, 255, 0.2)',
        },
        
        // System colors
        system: {
          white: '#FFFFFF',
          red: {
            500: '#FF453A',
            700: '#B42318',
          },
          green: {
            500: '#34C759',
            700: '#027A48',
          },
          orange: {
            500: '#F79009',
            700: '#CE5611',
          },
        },
        
        // Brand colors
        brand: {
          orange: {
            500: '#FF4500',
            200: '#FDC0A9',
          },
          purple: {
            500: '#5F01CB',
            200: '#BB97F0',
          },
          blue: {
            500: '#2D1C7E',
            200: '#8C8FDB',
          },
          pink: {
            500: '#F874A3',
            200: '#FFCEDF',
          },
          sand: {
            800: '#947242',
            500: '#F8CE92',
          },
        },
        
        // Legacy primary colors (keeping for compatibility)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}

