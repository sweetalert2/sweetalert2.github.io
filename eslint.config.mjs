import sweetAlert2EslintConfig from '@sweetalert2/eslint-config'
import globals from 'globals'

export default [
  ...sweetAlert2EslintConfig,
  {
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.node,
        Swal: true,
        frenchkiss: true,
      },
    },
    ignores: ['dist/*'],
  },
  {
    files: ['src/examples/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
]
