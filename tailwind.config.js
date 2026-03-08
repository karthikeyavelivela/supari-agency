/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgba(255, 255, 255, 0.1)",
        input: "rgba(255, 255, 255, 0.05)",
        ring: "#8B0000",
        background: "#0a0a0a",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#ffffff",
          foreground: "#0a0a0a",
        },
        secondary: {
          DEFAULT: "#1a1a1a",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#8B0000", // Dark Red
          secondary: "#b11226", // Deep Crimson
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#111111",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "text-reveal": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "fade-up": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: 0.5, filter: "drop-shadow(0 0 5px #8B0000)" },
          "50%": { opacity: 1, filter: "drop-shadow(0 0 20px #b11226)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "grid-move": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50px)" },
        }
      },
      animation: {
        "text-reveal": "text-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 5s ease-in-out infinite",
        "grid-move": "grid-move 10s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
