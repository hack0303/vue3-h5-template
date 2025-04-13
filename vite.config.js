import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx', '.jsx', '.css', '.less', '.scss', '.sass'],
  },
  // Vue 3 specific config
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
});