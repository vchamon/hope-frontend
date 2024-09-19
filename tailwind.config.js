/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary500': 'var(--primary500)',
        'primary400': 'var(--primary400)',
        'primary300': 'var(--primary300)',
        'primary200': 'var(--primary200)',
        'primary100': 'var(--primary100)',
        'secondary500': 'var(--secondary500)',
        'secondary400': 'var(--secondary400)',
        'secondary300': 'var(--secondary300)',
        'secondary200': 'var(--secondary200)',
        'secondary100': 'var(--secondary100)',
        'grayscale500': 'var(--grayscale500)',
        'grayscale400': 'var(--grayscale400)',
        'grayscale300': 'var(--grayscale300)',
        'grayscale200': 'var(--grayscale200)',
        'grayscale100': 'var(--grayscale100)',
        'light-bronze': 'var(--light-bronze)',
        'hope-primary': 'var(--hope-primary)',
        'hope-secondary': 'var(--hope-secondary)',
      }
    },
  },
  plugins: [],
}

