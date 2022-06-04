import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { Timeline, Tween } from 'react-gsap';
import * as Yup from "yup";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router';

const Contact = () => {
  const router = useRouter()

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

  return (
    <div className="Contact--container">
      <Formik
       initialValues={{ email: '', password: '' }}
       validateSchema={SignupSchema}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
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
           <input placeholder='Name' type='text' />
           <input placeholder='Email' type='email' />
           <input placeholder='Message' type='text' />

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

     <Timeline target={
        <div className="next--page" onClick={() => router.push('/projects')}>
          <p>{'<Projects />'}</p>
            <AiOutlineArrowLeft />
        </div>
      }>
        <Tween 
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
        />
      </Timeline>
    </div>
  )
}

export default Contact