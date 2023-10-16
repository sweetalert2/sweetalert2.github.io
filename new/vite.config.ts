import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
