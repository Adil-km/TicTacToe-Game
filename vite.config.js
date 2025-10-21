// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Import the correct plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Use the Vite plugin
  ],
})