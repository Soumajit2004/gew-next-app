/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'fira': ["Fira Sans", "sans-serif"],
            "pt": ["PT Serif", "serif"]
        },
    },
    plugins: [require("daisyui"), require('@tailwindcss/typography')],
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#fffffe",

                    "secondary": "#f25f4c",

                    "accent": "#e53170",

                    "neutral": "#a7a9be",

                    "base-100": "#0f0e17",

                    "info": "#2E95D1",

                    "success": "#5CDBC2",

                    "warning": "#8F7A0F",

                    "error": "#F67F6A",
                },
            },
        ],
    },

}