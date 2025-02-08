import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets',
      widgets: '/src/widgets',
      components: '/src/components',
      contexts: '/src/contexts',
      hooks: '/src/hooks',
      pages: '/src/pages',
      services: '/src/services',
      utils: '/src/utils',
      styles: '/src/styles',
    },
  },
})
