import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Adjust the path to point to your actual assets directory
      '@images': path.resolve(__dirname, '../assets/images'),
    },
  },
});
