import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const basePath = process.env.VITE_BASE_PATH || (command === 'build' ? '/reazul-portfolio/' : '/');

  return {
    plugins: [react()],
    base: basePath,
    server: {
      port: 5173,
      open: false
    }
  }
})
