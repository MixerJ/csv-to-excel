import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h1: {
              color: '#1a202c',
              fontWeight: '800',
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8em',
              lineHeight: '1.1111111',
            },
            h2: {
              color: '#1a202c',
              fontWeight: '700',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3333333',
            },
            h3: {
              color: '#1a202c',
              fontWeight: '600',
              fontSize: '1.25em',
              marginTop: '1.6em',
              marginBottom: '0.6em',
              lineHeight: '1.6',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              color: '#1a202c',
              fontWeight: '600',
              backgroundColor: '#f7fafc',
              padding: '0.25rem 0.4rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'ol > li': {
              paddingLeft: '0.375em',
            },
            'ul > li': {
              paddingLeft: '0.375em',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
