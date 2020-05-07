import React from "react"
import {ErrorMessage, Field, Form, Formik} from 'formik'
import cx from 'classnames'
import * as Yup from 'yup'

import SEO from "./seo"
import Recaptcha from 'react-google-recaptcha'
import SubmitButton from './submit-button'
import Subtitle from './mix/SubTitle'
import Container from './mix/Container'


const initialValues = {
    name: '',
    email: '',
    message: ''
}

const inputStyle = cond => cx(
    "w-full rounded p-2", {
        "border-2 border-error": cond,
        'border-2 border-secondary mb-8': !cond
    })

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Your name should have at least 2 letters.')
        .max(64, 'Your name should not exceed 64 characters')
        .required(),
    email: Yup.string().email().required(),
    message: Yup.string().required()
})

const ContactPage = () => {

    const [recaptcha, setRecaptcha] = React.useState(false)


    const apiKey = 'temporary-development-key'
    const recaptchaKey = '6LdmSvEUAAAAAEzb7u2hvzONKBWfBkmIjf2BRfPb'


    const onSubmit = (values, {setSubmitting, resetForm}) => {
        setSubmitting(true)
        setTimeout(() => {
            values.apiKey = site.siteMetadata.apiKey
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
            resetForm()
        }, 500)
    }

    return <>
        <SEO
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            title="Contact"
        />
        <Container>
        <section className="mx-auto w-4/5 md:w-3/5">
            <Subtitle>CONTACT FORM</Subtitle>
            <p className=" mb-8 mt-8 leading-loose">
                Please fill in the contact form. We will reply as soon as possible to your messages.
            </p>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                {
                    ({
                         values,
                         errors,
                         touched,
                         handleChange,
                         handleSubmit,
                         isSubmitting
                     }) =>
                        <Form
                            onSubmit={handleSubmit}>
                            <Field
                                type="text"
                                name="name"
                                placeholder="name"
                                className={inputStyle(errors.name && touched.name)}/>
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="mb-6 text-sm text-error italic"/>

                            <Field
                                type="email"
                                name="email"
                                placeholder="email"
                                className={inputStyle(errors.email && touched.email)}/>
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="mb-6 text-sm text-error italic"/>

                            <textarea
                                className={inputStyle(errors.message && touched.message)}
                                name="message"
                                placeholder="message"
                                onChange={handleChange}
                                value={values.message}
                                rows="8"/>
                            <ErrorMessage
                                name="message"
                                component="div"
                                className="mb-6 text-sm text-error italic"/>
                            <div className="w-full block lg:flex justify-between ">
                                <Recaptcha
                                  className='mb-6 overflow-hidden border-secondary border-2'
                                    onChange={() => {
                                        setRecaptcha(true)
                                    }}
                                    sitekey={recaptchaKey}

                                />

                                <SubmitButton disabled={isSubmitting || !recaptcha}/>
                            </div>
                        </Form>
                }
            </Formik>
        </section>
            </Container>
  </>
}

export default ContactPage
