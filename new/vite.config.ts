import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import injectHTML from 'vite-plugin-html-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), injectHTML()],
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: 'index.html',
        recipeGallery: 'recipe-gallery/index.html',
        recipeReact: 'recipe-gallery/sweetalert2-react.html',
      },
    },
  },
})
