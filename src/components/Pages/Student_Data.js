import React from 'react';
import './Student.css';
import { useFormik } from 'formik';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  city: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'First Name Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.mobile) {
    errors.mobile = 'Mobile number Required';
  } else if (/^([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.mobile)) {
    errors.mobile = 'Must be valid number';
  }
  if (!values.city) {
    errors.city = 'City Required';
  } else if (values.city.length > 10) {
    errors.city = 'Must be 10 characters or less';
  }
  return errors;
};
const StudentData = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div className='container'>
        <h2>Student Form</h2>
        <div className='form_control'>
          <label htmlFor='firstName'>First Name</label>
          <input
            id='firstName'
            name='firstName'
            type='text'
            placeholder='Gangadhar'
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className='error'>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className='form_control'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Morti'
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className='error'>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className='form_control'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='abc@cleverground.com'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className='form_control'>
          <label htmlFor='mobileNumber'>Mobile:</label>
          <input
            id='mobile'
            type='text'
            name='mobile'
            placeholder='0123456789 '
            pattern='[0-9]*'
            maxLength='10'
            onChange={formik.handleChange}
            value={formik.values.mobile}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className='error'>{formik.errors.mobile}</div>
          ) : null}
        </div>
        <div className='form_control'>
          <label htmlFor='city'>City: </label>

          <input
            id='city'
            type='text'
            name='city'
            placeholder='Kolhapur'
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className='error'>{formik.errors.city}</div>
          ) : null}
        </div>

        <div>
          <button className='btn' type='submit' onClick={formik.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentData;

