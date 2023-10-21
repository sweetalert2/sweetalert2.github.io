const sweetalert2FormikSrc = `import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import type { FormikErrors, FormikProps } from 'formik'
import { Field, Form, Formik } from 'formik'

type FormValues = { location: string }
let formikRef: FormikProps<FormValues> | null = null

withReactContent(Swal).fire({
  title: 'Where are you from?',
  html: (
    <Formik<FormValues>
      innerRef={(ref) => (formikRef = ref)}
      initialValues={{ location: '' }}
      validate={(values) => {
        const errors: FormikErrors<FormValues> = {}
        if (!values.location) {
          errors.location = 'Required'
        }
        return errors
      }}
      onSubmit={() => {}}
    >
      <Form>
        <Field
          type="text"
          className="swal2-input"
          name="location"
          onKeyPress={(event: React.KeyboardEvent) => event.key === 'Enter' && Swal.clickConfirm()}
        />
      </Form>
    </Formik>
  ),
  didOpen: () => {
    Swal.getPopup()?.querySelector('input')?.focus()
  },
  preConfirm: async () => {
    await formikRef?.submitForm()
    if (formikRef?.isValid) {
      Swal.fire({
        title: formikRef.values.location,
        icon: 'success',
      })
    } else {
      Swal.showValidationMessage(JSON.stringify(formikRef?.errors))
    }
  },
})
`;

export { sweetalert2FormikSrc as default };
