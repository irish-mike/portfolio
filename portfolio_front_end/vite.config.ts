import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

dotenv.config({ path: '../.env' });

export default defineConfig({
  plugins: [
    react(),
    mkcert()
  ],
  server: {
    https: true,
    host: 'localhost',
    port: 5173
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@providers": path.resolve(__dirname, "./src/providers"),
      "@routing": path.resolve(__dirname, "./src/routing"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@state": path.resolve(__dirname, "./src/state"),
    },
  }
});