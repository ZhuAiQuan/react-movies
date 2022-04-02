import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@': path.resolve(__dirname, './src'),//设置别名
      '_c': path.resolve(__dirname, './src/components')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://m.maizuo.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
