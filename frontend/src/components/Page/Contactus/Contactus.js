import React from "react";
import { Formik, Form, Field, useField } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";
import Layout from "../../layout/layout/layout";
import "../Contactus/Contactus.css";
import { useHistory } from "react-router-dom";
import MetaData from "../../layout/MetaData";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const MyTextArea = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <textarea className="text-area" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  let history = useHistory();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("First Name is Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Last Name is Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone is required"),
    message: Yup.string()
      // .oneOf([Yup.ref('password'), null], 'Password must match')
      .required("Message is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={validate}
      onSubmit={(data) => {
        console.log(data);

        axios({
          method: "post",
          url: "https://janimotors-api.onrender.com/api/contact",
          data: data,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            //handle success
            // console.log(response);
            // alert("New User Successfully Added.");
          })
          .catch(function (response) {
            //handle error
            // console.log(response);
          });
        history.go(0);
      }}
    >
      {(formik) => (
        <>
          {/* <MetaData title={`Contact Us---JANI MOTORS`}/> */}
          <Helmet>
            <title>Contact Us || JANI MOTORS</title>
            <meta name="Contact Us" content="JANI MOTORS" />
            <meta
              name="description"
              content=" If you don't want to pick up the phone, then send us an email using the provided form below."
            />
            <link rel="canonical" href="/contactus" />
          </Helmet>
          <Layout>
            <div className="container text-center pt-2">
              <h1 className="pt-2" style={{ color: "red " }}>
                Contact US
              </h1>
              <p style={{ color: "white" }}>
                Don’t let your questions go unanswered. Call on Jani motors. We
                can answer any questions that you may have about our vehicles,
                the car buying process, or any aspect of our business. If you
                don’t want to pick up the phone, then just use your keyboard and
                send us an email using the provided form below. You can always
                stop by and see us in person too.
              </p>
              <Form className="col-md-">
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Phone" name="phone" type="number" />
                
                {/* <TextField   className="form-control"
      component="textarea" row={40} col={40} label="Message" name="message" type="text" /> */}

                <MyTextArea
                  label="Message"
                  name="message"
                  rows="4"
                  cols="30"
                  // placeholder="Once upon a time there was a princess who lived at the top of a glass hill."
                />

                {/* <span style={{ color: "white" }}>Message</span> */}

                {/* <Field
                      as="textarea"
                      label=" Message"
                      id="Message"
                      name="message"
                    ></Field> */}
                <button
                  className="btn btn-primary mt-3"
                  type="submit"
                  style={{ marginRight: 20 }}
                >
                  Submit
                </button>
                <button className="btn btn-warning mt-3 ml-3" type="reset">
                  Reset
                </button>
              </Form>
            </div>
          </Layout>
        </>
      )}
    </Formik>
  );
};

export default ContactUs;
