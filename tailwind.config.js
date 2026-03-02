/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        stripe: {
          purple: '#635bff',
          blue: '#00d924',
          dark: '#051030',
        },
        task2: {
          navy: '#0B1433',
          navyDeep: '#07102A',
          panel: '#101B3F',
          panelBorder: '#1E2A5B',
          text: '#EAF0FF',
          muted: '#8EA0C8',
          line: '#3B4B86',
        }
      },
      backgroundImage: {
        'task2-grid': 'radial-gradient(circle at 1px 1px, rgba(142, 160, 200, 0.22) 1px, transparent 0)',
        'task2-hero': 'radial-gradient(1200px circle at 50% 35%, rgba(99, 91, 255, 0.16) 0%, rgba(11, 20, 51, 0) 60%), linear-gradient(180deg, #0B1433 0%, #07102A 100%)',
      },
      backgroundSize: {
        task2Grid: '22px 22px',
      },
      flexGrow: {
        '2': '2'
      },
      flexShrink: {
        '1': '1'
      }
    },
  },
  plugins: [],
}
