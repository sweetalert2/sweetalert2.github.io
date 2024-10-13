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
        'main': 'index.html',
        'recipe-gallery': 'recipe-gallery/index.html',
        'queue-with-progress-steps': 'recipe-gallery/queue-with-progress-steps.html',
        'bootstrap-custom-loader': 'recipe-gallery/bootstrap-custom-loader.html',
        'custom-icon': 'recipe-gallery/custom-icon.html',
        'sweetalert2-react': 'recipe-gallery/sweetalert2-react.html',
        'sweetalert2-react-router': 'recipe-gallery/sweetalert2-react-router.html',
        'sweetalert2-formik': 'recipe-gallery/sweetalert2-formik.html',
        'three-buttons-dialog': 'recipe-gallery/three-buttons-dialog.html',
        'draw-attention': 'recipe-gallery/draw-attention.html',
        'colored-toasts': 'recipe-gallery/colored-toasts.html',
        'crop-image': 'recipe-gallery/crop-image.html',
        'login-form': 'recipe-gallery/login-form.html',
        'input-datepicker': 'recipe-gallery/input-datepicker.html',
        'i18n-l10n': 'recipe-gallery/i18n-l10n.html',
        'input-number-input-range': 'recipe-gallery/input-number-input-range.html',
        'validation-message-custom-icon': 'recipe-gallery/validation-message-custom-icon.html',
        'blurred-backdrop': 'recipe-gallery/blurred-backdrop.html',
        'sidebars-drawers': 'recipe-gallery/sidebars-drawers.html',
      },
    },
  },
  css: {
    // https://stackoverflow.com/a/79003101/1331425
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
      },
    },
  },
})
