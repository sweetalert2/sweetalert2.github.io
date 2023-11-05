import functions from './functions'

const functionStrings: Record<string, string> = {}
Object.entries(functions).forEach(([id, fn]) => {
  functionStrings[id] = String(fn)
    .replace(/import_sweetalert\d+.default/g, 'Swal')
    .replace(/^.*\n/, '')
    .replace(/}$/, '')
    .replace(/(^|\n) {4}/g, '$1')
    .replace(/.*rtl-container.*\n/, '')
    .replace(/(\d)e3/g, '$1000')
    .replace(/\/\*!/g, '/*')
    .replace(/\/\* @__PURE__ \*\/ /g, '')
    // RTL example
    .replace(/\\u([\d\w]{4})/gi, function (_, grp) {
      return String.fromCharCode(parseInt(grp, 16))
    })
    .trim()
})

export default functionStrings
