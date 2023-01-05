/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'mono': ["JetBrains Mono", "monospace"],
            "sans": ["Poppins", "sans-serif"]
        },
        backgroundImage: {
            'line-pattern': `url('/svg/pattern.svg')`
        },
        extend:{
            dropShadow:{
                'xl-primary': 'drop-shadow(0 20px 13px #7045AF)',
                '2xl-primary': 'drop-shadow(0 25px 15px #7045AF)'
            }
        }
    },
    plugins: [require("daisyui"), require('@tailwindcss/typography')],
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#21E6C1",

                    "secondary": "#278EA5",

                    "accent": "#7045AF",

                    "neutral": "#1F4287",

                    "base-100": "#071E3D",

                    "info": "#3282B8",

                    "success": "#03C4A1",

                    "warning": "#FFD717",

                    "error": "#7B113A",
                },
            },
        ],
    },

}