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

                    "primary": "#FF9F1C",

                    "secondary": "#2EC4B6",

                    "accent": "#FFBF69",

                    "neutral": "#FFFFFF",

                    "base-100": "#CBF3F0",

                    "info": "#00b4d8",

                    "success": "#2b9348",

                    "warning": "#ffff3f",

                    "error": "#fe5f55",
                },
            },
        ],
    },

}