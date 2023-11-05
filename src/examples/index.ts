import functions from './functions'

import functionStrings from './functionStrings'

type ExampleId = keyof typeof functions

type Example = {
  id: ExampleId
  fn: () => void
  fnString: string
}

export const examples: Record<ExampleId, Example> = Object.keys(functions).reduce((acc, id) => {
  acc[id as ExampleId] = {
    id: id as ExampleId,
    fn: functions[id as ExampleId],
    fnString: functionStrings[id as ExampleId],
  }
  return acc
}, {} as Record<ExampleId, Example>)
