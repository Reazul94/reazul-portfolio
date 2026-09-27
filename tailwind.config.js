/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: 'var(--color-canvas)',
          subtle: 'var(--color-canvas-subtle)',
        },
        card: {
          DEFAULT: 'var(--color-card)',
          hover: 'var(--color-card-hover)',
        },
        content: {
          primary: 'var(--color-content-primary)',
          secondary: 'var(--color-content-secondary)',
          muted: 'var(--color-content-muted)',
        },
        brand: {
          DEFAULT: 'var(--color-brand)',
          secondary: 'var(--color-brand-secondary)',
        },
      },
      borderColor: {
        subtle: 'var(--color-border-subtle)',
        highlight: 'var(--color-border-highlight)',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Noto Sans Bengali', 'system-ui', '-apple-system', 'sans-serif'],
        bengali: ['Noto Sans Bengali', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
