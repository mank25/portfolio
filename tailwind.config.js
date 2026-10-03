/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            // Tokens from DESIGN.md (Linear), light canvas, warm off-white
            colors: {
                canvas: '#fbfbfa',
                surface: { 1: '#ffffff', 2: '#f4f4f2', 3: '#ebebe8' },
                line: { DEFAULT: '#e6e6e2', strong: '#cfcfca' },
                ink: { DEFAULT: '#111214', muted: '#3d4047', subtle: '#686c74' },
                accent: { DEFAULT: '#0e7c66', hover: '#0a6553' },
            },
            fontFamily: {
                sans: ['Geist', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
                mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            letterSpacing: { display: '-0.035em', tight2: '-0.02em' },
            transitionTimingFunction: { out: 'cubic-bezier(0.16, 1, 0.3, 1)' },
        },
    },
    plugins: [],
};
