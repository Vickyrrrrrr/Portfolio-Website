module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#faf9f6', // Off-white/cream background like Claude
        secondary: '#4d4d4d', // Gray text
        tertiary: '#ffffff', // Card Background
        'black-100': '#1a1a1a', // Headers
        'black-200': '#333333',
        'white-100': '#f3f3f3',
        accent: '#D97757', // A subtle Claude-like accent color (optional, e.g. for links)
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)', // Light shadow
      },
      screens: {
        xs: '450px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['"Crimson Text"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
};
