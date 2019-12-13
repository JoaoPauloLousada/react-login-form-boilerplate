import React from 'react';
import * as Yup from 'yup';

export const FIELDS = {
  EMAIL: "email",
  PASSWORD: "password"
};

export const INITIAL_VALUES = {
  [FIELDS.EMAIL]: "",
  [FIELDS.PASSWORD]: ""
};

export const handleSubmit = (values, actions) => {
  console.log('values', values);
  console.log('actions', actions);
};

export const handleChange = (value) => {
  console.log('value', value);
};

export const SignupSchema = Yup.object().shape({
  [FIELDS.EMAIL]: Yup.string().email('Invalid email').required('Email is required.'),
  [FIELDS.PASSWORD]: Yup.string().required('Password is required')
});

export const formikProps = {
  initialValues: INITIAL_VALUES,
  onSubmit: handleSubmit,
  validationSchema: SignupSchema,
  validateOnChange: true,
};
 

export const TextInput = ({ handleChange, handleBlur, values, name }) => (
  <input 
    type="text"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values[name]}
    name={name}
  />
);

export const PasswordInput = ({ handleChange, handleBlur, values, name }) => (
  <input
    type="password"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values[name]}
    name={name}
  />
);

export const Error = ({msg}) => (
  <div>
    <p>{msg}</p>
  </div>
);
