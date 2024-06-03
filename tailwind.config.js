/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'xxs': '240px',   // Extra small screens
        'xs': '480px',   // Extra small screens
        'sm': '640px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra large screens
        '2xl': '1336px', // 2x extra large screens
        '3xl': '1600px', // Custom larger screens
        '4xl': '2200px',
        '5xl': '2800px',
        '4k': '3200px',  // Custom screen size for 4K displays
        'uw': '4800px',  // Custom screen size for ultrawide screens
        // 'md-landscape': {'raw': '(min-width: 768px) and (orientation: landscape)'},
      },
      fontSize: {
        'xxs': '0.625rem',  // 10px
        'xxxs': '0.5rem',   // 8px
        'xxxxs': '0.375rem' // 6px
      },
      height: {
        '96': '24rem',   // Equivalent to h-96
        '128': '32rem',  // New height unit
        '144': '36rem',
        '160': '40rem',  // New height unit
        '192': '48rem',  // New height unit
        '224': '56rem',  // New height unit
        '256': '64rem',  // New height unit
        '288': '72rem',  // New height unit
        '320': '80rem',  // New height unit
      },
      width: {
        '96': '24rem',   // Equivalent to w-96
        '128': '32rem',  // New width unit
        '144': '36rem',
        '160': '40rem',  // New width unit
        '192': '48rem',  // New width unit
        '224': '56rem',  // New width unit
        '256': '64rem',  // New width unit
        '288': '72rem',  // New width unit
        '320': '80rem',  // New width unit
      },
      minHeight: {
        '96': '24rem',   // Equivalent to min-h-96
        '128': '32rem',  // Equivalent to min-h-128
        '144': '36rem',  // New min-height unit
        '160': '40rem',  // Equivalent to min-h-160
        '192': '48rem',  // New min-height unit
        '224': '56rem',  // Equivalent to min-h-224
        '256': '64rem',  // Equivalent to min-h-256
        '288': '72rem',  // Equivalent to min-h-288
        '320': '80rem',  // Equivalent to min-h-320
        '775px': '775px',
        '900px':'900px',
        '1000px':'1000px',
        '1100px':'1100px',
        '1200px':'1200px',
        '1300px':'1300px',
        '1700px':'1700px',
        '1800px':'1800px',
        '2000px': '2000px',
      },
      maxHeight: {
        '96': '24rem',   // Equivalent to max-h-96
        '128': '32rem',  // Equivalent to max-h-128
        '144': '36rem',  // New max-height unit
        '160': '40rem',  // Equivalent to max-h-160
        '192': '48rem',  // New max-height unit
        '224': '56rem',  // Equivalent to max-h-224
        '256': '64rem',  // Equivalent to max-h-256
        '288': '72rem',  // Equivalent to max-h-288
        '320': '80rem',  // Equivalent to max-h-320
      },
      minWidth: {
        '96': '24rem',   // Equivalent to min-w-96
        '128': '32rem',  // Equivalent to min-w-128
        '144': '36rem',  // New min-width unit
        '160': '40rem',  // Equivalent to min-w-160
        '192': '48rem',  // New min-width unit
        '224': '56rem',  // Equivalent to min-w-224
        '256': '64rem',  // Equivalent to min-w-256
        '288': '72rem',  // Equivalent to min-w-288
        '320': '80rem',  // Equivalent to min-w-320
      },
      maxWidth: {
        '96': '24rem',   // Equivalent to max-w-96
        '128': '32rem',  // Equivalent to max-w-128
        '144': '36rem',  // New max-width unit
        '160': '40rem',  // Equivalent to max-w-160
        '192': '48rem',  // New max-width unit
        '224': '56rem',  // Equivalent to max-w-224
        '256': '64rem',  // Equivalent to max-w-256
        '288': '72rem',  // Equivalent to max-w-288
        '320': '80rem',  // Equivalent to max-w-320
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',     /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',               /* Chrome, Safari, and Opera */
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('@tailwindcss/aspect-ratio'),
  ],
}