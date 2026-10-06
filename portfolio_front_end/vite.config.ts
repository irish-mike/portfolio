import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';

dotenv.config({ path: '../.env' });

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173
  },
  resolve: {
    alias: {
      "@assets": path.resolve(import.meta.dirname, "./src/assets"),
      "@components": path.resolve(import.meta.dirname, "./src/components"),
      "@data": path.resolve(import.meta.dirname, "./src/data"),
      "@entities": path.resolve(import.meta.dirname, "./src/entities"),
      "@features": path.resolve(import.meta.dirname, "./src/features"),
      "@hooks": path.resolve(import.meta.dirname, "./src/hooks"),
      "@pages": path.resolve(import.meta.dirname, "./src/pages"),
      "@providers": path.resolve(import.meta.dirname, "./src/providers"),
      "@routing": path.resolve(import.meta.dirname, "./src/routing"),
      "@services": path.resolve(import.meta.dirname, "./src/services"),
      "@state": path.resolve(import.meta.dirname, "./src/state"),
    },
  }
});
