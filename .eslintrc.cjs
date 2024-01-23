module.exports = {
  extends: ['@sweetalert2/eslint-config'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  globals: {
    Swal: true,
    frenchkiss: true,
  },
}
