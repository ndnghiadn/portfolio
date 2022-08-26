import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useRef } from 'react'
import { Timeline, Tween } from 'react-gsap';
import * as Yup from "yup";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router';
import gsap from 'gsap';

const Contact = () => {
  const router = useRouter()

  const SendMailSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    message: Yup.string()
      .min(10 , 'Too Short!')
      .max(120, 'Too Long!')
      .required('Required')
  });

  return (
    <div className="Contact--container">
      
      <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validateSchema={SendMailSchema}
          onSubmit={(values, { setSubmitting }) => {
              window.open(`mailto:ndnghiadn@gmail.com?subject=${values.name + ' from ' + values.email}&body=${values.message}`)
              setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="form">
              <input
                required
                placeholder='Name'
                name="name"
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <input
                required
                placeholder='Email' 
                name="email"
                type='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <input
                required
                placeholder='Message' 
                name="message" 
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
  
              {/* <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password} */}
              <button type="submit" disabled={isSubmitting}>
                Send
              </button>
            </form>
          )}
      </Formik>
     {/* <Timeline target={
        <div className="next--page noselect" onClick={() => router.push('/projects')}>
          <p>{'<Projects />'}</p>
            <AiOutlineArrowLeft />
        </div>
      }>
        <Tween 
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
        />
      </Timeline> */}
    </div>
  )
}

export default Contact