// This code doesn't run on the browser; this file gets pre-evaluated at build-time
//    necessary to get the string value of each function's original source code (not transpiled and compressed)

// for build watch/dev mode: clear cache before `require`ing './functions'
delete require.cache[require.resolve('./functions')]

const functions = require('./functions')

const functionStrings = {}
Object.entries(functions).forEach(([id, fn]) => {
  functionStrings[id] = String(fn)
})

module.exports = functionStrings
