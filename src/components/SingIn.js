import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

const SingIn = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
    const validate = Yup.object({
        firstName: Yup.string().strict()
          .max(15, 'Must be 15 characters or less')
          .required('Required')
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required')
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        email: Yup.string()
          .email('Email is invalid')
          .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,"Only valid email address is allowed")
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Confirm password is required'),
        mobileNumber: Yup.string()
        .required("Phone Number is required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "Invalid Phone Number")
        .max(10, "Invalid Phone Number"),
      })
  
  return  (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          {console.log(formik)}
          <Form>
          <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <TextField label="Mobile Number" name="mobileNumber" type="number" />
            <button className="btn btn-dark mt-3" type="submit" >Register</button>
            
            <button className="btn btn-danger mt-3 ml-11" type="reset"> Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
export default SingIn;
