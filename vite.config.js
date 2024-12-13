import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // visualizer({ open: false  }) // Automatically open the bundle analysis after build
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // This will split out dependencies in node_modules into separate chunks
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Set a higher limit for chunk size warnings
  },
});
