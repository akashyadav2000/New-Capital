import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#DCAC36",
        secondary: "#0D0D0D",
        gray: "rgba(255, 255, 255, 0.75)",
        lightGray: "#161616",
      },
    },
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
