import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/krishnacomputercenter_New/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});