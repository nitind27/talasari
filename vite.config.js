import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    proxy: {
      '/locales': {
        target: 'http://localhost:5173', // Or your dev server port
        changeOrigin: true,
      },
    },
    },
})
