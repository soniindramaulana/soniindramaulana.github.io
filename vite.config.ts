import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' // Tambahkan baris ini

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: { // Tambahkan blok ini
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})