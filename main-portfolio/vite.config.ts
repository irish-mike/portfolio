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
      'src': path.resolve(__dirname, './src'), // Add this line
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Add global SCSS imports here if needed
        // additionalData: `@import "src/styles/variables.scss";`
      },
    },
  },
});
