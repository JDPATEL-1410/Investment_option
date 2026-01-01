/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6366f1',
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                },
                navy: {
                    DEFAULT: '#1a1f4e',
                    50: '#f5f6fa',
                    100: '#ebedf5',
                    200: '#d3d7e8',
                    300: '#adb4d4',
                    400: '#8088bb',
                    500: '#5f66a5',
                    600: '#4a508a',
                    700: '#3d4270',
                    800: '#2a3570',
                    900: '#1a1f4e',
                },
                accent: {
                    DEFAULT: '#f59e0b',
                    amber: '#f59e0b',
                    green: '#10b981',
                    blue: '#3b82f6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Poppins', 'Inter', 'sans-serif'],
                display: ['Playfair Display', 'Georgia', 'serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #1a1f4e 0%, #6366f1 100%)',
                'gradient-hero': 'linear-gradient(135deg, #1a1f4e 0%, #2a3570 50%, #6366f1 100%)',
                'gradient-indigo': 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
                'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
                'navy': '0 10px 40px rgba(26, 31, 78, 0.2)',
                'navy-lg': '0 20px 60px rgba(26, 31, 78, 0.3)',
                'inner-glow': 'inset 0 0 20px rgba(99, 102, 241, 0.1)',
            },
            animation: {
                'float': 'float 4s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'shimmer': 'shimmer 2s infinite',
                'gradient': 'gradient-shift 8s ease infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-in': 'bounceIn 0.6s ease-out',
                'slide-up': 'slideUpFade 0.5s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    'from': { filter: 'drop-shadow(0 0 10px rgba(124, 126, 209, 0.3))' },
                    'to': { filter: 'drop-shadow(0 0 20px rgba(124, 126, 209, 0.6))' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                bounceIn: {
                    '0%': { opacity: '0', transform: 'scale(0.3)' },
                    '50%': { opacity: '1', transform: 'scale(1.05)' },
                    '70%': { transform: 'scale(0.9)' },
                    '100%': { transform: 'scale(1)' },
                },
                slideUpFade: {
                    'from': { opacity: '0', transform: 'translateY(30px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            transitionTimingFunction: {
                'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            },
        },
    },
    plugins: [],
}
