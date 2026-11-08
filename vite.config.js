import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'client',
  plugins: [react()],
  base: '/undercovel-/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})