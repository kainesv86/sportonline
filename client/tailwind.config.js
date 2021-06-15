const colors = require("tailwindcss/colors");

module.exports = {
        purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
        darkMode: false, // or 'media' or 'class'
        theme: {
                extend: {
                        spacing: {
                                108: "27rem",
                                116: "29rem",
                                160: "40rem",
                                180: "45rem",
                        },
                },
                colors: {
                        transparent: "transparent",
                        current: "currentColor",
                        orange: colors.orange,
                        black: colors.black,
                        white: colors.white,
                        gray: colors.gray,
                        indigo: colors.indigo,
                        red: colors.red,
                        yellow: colors.yellow,
                        green: colors.green,
                        blue: colors.blue,
                        pink: colors.pink,
                },
                keyframes: {
                        fadein: {
                                "0%": { opacity: "0", transform: "translateY(-10px)" },
                                "100%": { opacity: "1", transform: "translateY(0)" },
                        },
                },
                animation: {
                        "fade-in": "fadein 0.5s ease-out",
                },
        },
        variants: {
                extend: {},
        },
        plugins: [],
};
