import functions from './functions'

// Import ./functionStrings pre-evaluated. See notes in file.
import functionStrings from /* preval */ './functionStrings'

// Combine `functions` & `functionStrings` into one `examples` object
const examples = {}
Object.entries(functions).forEach(([id, fn]) => {
  examples[id] = {id, fn, fnString: functionStrings[id]}
})

export default examples
