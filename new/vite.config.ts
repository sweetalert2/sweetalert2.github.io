import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import injectHTML from 'vite-plugin-html-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), injectHTML()],
  build: {
    minify: false,
    target: 'esnext',
    rollupOptions: {
      input: {
        main: 'index.html',
        recipeGallery: 'recipe-gallery/index.html',
        recipeQueueWithProgressSteps: 'recipe-gallery/queue-with-progress-steps.html',
        recipeBootstrapCustomLoader: 'recipe-gallery/bootstrap-custom-loader.html',
        recipeReact: 'recipe-gallery/sweetalert2-react.html',
        recipeReactRouter: 'recipe-gallery/sweetalert2-react-router.html',
        recipeFormik: 'recipe-gallery/sweetalert2-formik.html',
        recipeThreeButtonsDialog: 'recipe-gallery/three-buttons-dialog.html',
        recipeDrawAttention: 'recipe-gallery/draw-attention.html',
        recipeColoredToasts: 'recipe-gallery/colored-toasts.html',
      },
    },
  },
})
