import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import css from './ContactForm.module.css'

const ContactForm = () => {

const nameId = useId();
const numberId = useId();

   const initialValues = {
    name: "",
    number: "",
  };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={() => { }}>
            <Form className={css.containerForm}>
                 <label className={css.formLabel} htmlFor={nameId}>
            Name
                </label>
                <Field  type="text"
              name="name"
              id={nameId}
              placeholder="Name"
            />

            </Form>
        </Formik>
)
}
export default ContactForm;
