import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            'primary': '#6200ee',
            ...colors
        },
        extend: {
        },
    },
    plugins: [],
} satisfies Config;

