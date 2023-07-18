import type { Config } from 'tailwindcss';

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            'primary': '#6200ee',
            'white': 'white'
        },
        extend: {
        },
    },
    plugins: [],
} satisfies Config;

