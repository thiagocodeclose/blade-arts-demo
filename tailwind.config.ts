import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bl-gold':   'var(--gold)',
        'bl-silver': 'var(--silver)',
        'bl-bg':     'var(--bg)',
        'bl-surface':'var(--surface)',
        'bl-text':   'var(--text)',
        'bl-muted':  'var(--muted)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
