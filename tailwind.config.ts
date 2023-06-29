import type { Config } from 'tailwindcss';

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            'primary': '#6200ee'
        },
        extend: {
        },
    },
    plugins: [],
} satisfies Config;

