module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#000000",
                white: "#ffffff",
                body: "#000000",
                heading: "#000000",

                primary: "#C9AC60",
                secondary: "#C8AB63",

                placeholder: "#707070",
                border: "#f7f7f7",
                grey: {
                    darken: "#ededed",
                    DEFAULT: "#f1f1f1",
                    lighten: "#fdfdfd",
                },
            },
            fontFamily: {
                body: ["'Futura PT Book', sans-serif"],
                display: ["'Futura PT Demi', sans-serif"],
                optional: ["'Playfair Display', sans-serif"],
                segoe: ["'Segoe UI', sans-serif"],
            },
            fontSize: {
                sm: ["14px", "1.8"],
                base: ["16px", "1.4"],
                lg: ["18px", "1.5"],
                xl: ["20px", "1.5"],
                "2xl": ["24px", "1.4"],
                "3xl": ["26px", "1.3"],
                "4xl": ["36px", "1.2"],
                "5xl": ["46px", "1.2"],
                "6xl": ["52px", "1.1"],
            },
            borderWidth: {
                "3": "3px",
                "6": "6px"
            }
        },
    },
    corePlugins: {
        preflight: true,
    },
    plugins: [],
};
