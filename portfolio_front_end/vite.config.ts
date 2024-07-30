import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@providers": path.resolve(__dirname, "./src/providers"),
      "@routing": path.resolve(__dirname, "./src/routing"),
    },
  }
})
