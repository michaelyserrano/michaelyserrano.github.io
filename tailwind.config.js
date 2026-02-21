const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "glow-pulse": {
          "0%": { boxShadow: "0 0 48px -6px hsl(var(--primary) / 0.06)" },
          "20%": { boxShadow: "0 0 52px -6px hsl(var(--primary) / 0.08)" },
          "40%": { boxShadow: "0 0 56px -6px hsl(var(--primary) / 0.11)" },
          "50%": { boxShadow: "0 0 60px -6px hsl(var(--primary) / 0.14)" },
          "60%": { boxShadow: "0 0 56px -6px hsl(var(--primary) / 0.11)" },
          "80%": { boxShadow: "0 0 52px -6px hsl(var(--primary) / 0.08)" },
          "100%": { boxShadow: "0 0 48px -6px hsl(var(--primary) / 0.06)" },
        },
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(25%)" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite forwards",
        "bounce-x": "bounce-x 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    "dark",
    "retro",
    "cyberpunk",
    "paper",
    "aurora",
    "synthwave",
    {
      pattern:
        /^(.*?)(dark|retro|cyberpunk|paper|aurora|synthwave)([:.])(.*?)$/,
    },
  ],
};
