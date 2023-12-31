import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "grey-hint": "#8B8E98",
                "primary-color": "#FA9021",
                "secondary-color": "#ffffff1c",
                "tertiary-color": "#E87D0E",
                "background-color": "#242424",
                "card-background-color": "#303030",
                "main-text-color": "#FFFFFF",
            },
            fontFamily: {
                poppins: ["Poppins"],
            },
        },
    },
    plugins: [],
};
export default config;
