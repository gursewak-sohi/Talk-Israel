/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'primary': '#3246F7',
                'danger': '#FF0000',
            },
            fontFamily: {
                sans: ['Inter var', 'ui-sans-serif', 'system-ui'],
            },
            boxShadow: {
                'card': '0px 2px 10px rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
}