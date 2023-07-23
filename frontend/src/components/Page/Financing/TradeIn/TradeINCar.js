import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";
import Layout from "../../../layout/layout/layout";
import FormikControl from "./FormikControl";
import "./TradeInCar.css";
import { useHistory } from "react-router-dom";
import MetaData from "../../../layout/MetaData";
import { Helmet } from "react-helmet-async";

const TradeINcar = () => {

  let history= useHistory();

 
  let stateObj = [ 
                  "select an option",
                "AK - Alaska", 
                "AL - Alabama", 
                "AR - Arkansas", 
                "AS - American Samoa", 
                "AZ - Arizona", 
                "CA - California", 
                "CO - Colorado", 
                "CT - Connecticut", 
                "DC - District of Columbia", 
                "DE - Delaware", 
                "FL - Florida", 
                "GA - Georgia", 
                "GU - Guam", 
                "HI - Hawaii", 
                "IA - Iowa", 
                "ID - Idaho", 
                "IL - Illinois", 
                "IN - Indiana", 
                "KS - Kansas", 
                "KY - Kentucky", 
                "LA - Louisiana", 
                "MA - Massachusetts", 
                "MD - Maryland", 
                "ME - Maine", 
                "MI - Michigan", 
                "MN - Minnesota", 
                "MO - Missouri", 
                "MS - Mississippi", 
                "MT - Montana", 
                "NC - North Carolina", 
                "ND - North Dakota", 
                "NE - Nebraska", 
                "NH - New Hampshire", 
                "NJ - New Jersey", 
                "NM - New Mexico", 
                "NV - Nevada", 
                "NY - New York", 
                "OH - Ohio", 
                "OK - Oklahoma", 
                "OR - Oregon", 
                "PA - Pennsylvania", 
                "PR - Puerto Rico", 
                "RI - Rhode Island", 
                "SC - South Carolina", 
                "SD - South Dakota", 
                "TN - Tennessee", 
                "TX - Texas", 
                "UT - Utah", 
                "VA - Virginia", 
                "VI - Virgin Islands", 
                "VT - Vermont", 
                "WA - Washington", 
                "WI - Wisconsin", 
                "WV - West Virginia", 
                "WY - Wyoming"]


  const obj = [
    "select an option",
    "Acura",
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "KTM",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Landwind",
    "Lexus",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];
  let stateItems = stateObj.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  let optionItems = obj.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const bodyStyle = [
    { key: "Select an option", value: "" },
    { key: "2 door", value: "2door" },
    { key: "4 door", value: "4door" },
    { key: "Hatch back", value: "Hatchback" },
  ];

  const transmissionsObj = [
    { key: "Select an option", value: "" },
    { key: "Manual", value: "Manual" },
    { key: "Automatic", value: "Automatic" },
  ];

  //Gets Years from 1900 to 2022
  const arrayOfyears = ["Select an option"];
  const currentDate = new Date();
  for (let i = 1900; i <= currentDate.getFullYear(); i++) {
    arrayOfyears.push(i);
  }

  let optionsForYear = arrayOfyears.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

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
    AdditionalOptions: Yup.string()
      // .oneOf([Yup.ref('password'), null], 'Password must match')
      .required("Message is required"),
    yearOption: Yup.string().required("Year is required"),
    make: Yup.string().required("Make is required"),
    model: Yup.string().required("Model is required"),
    vin: Yup.string().required("Vin is required"),
    zip: Yup.string().required("Zip is required"),
  });
  return (
<>
    <Helmet>
    <title>Calculate Your Trade || JANI MOTORS</title>
    <meta name="JANI MOTORS" content="JANI MOTORS"/>
    <meta name="description" content=" Bring your old car to us, and we can help you trade it in to get
            something newer and better. We love finding ways to help our
            customers get the vehicles that they really want. A trade-in
            will give your budget a boost. Before you know it, you will be
            able to afford vehicles that were previously out of your reach.
            This is a great way to get rid of that old car too. This way you
            can avoid going through the tedious private sale process. You
            don’t have to drive down here yet. You can get an appraisal for
            your old vehicle by simply filling out the form below. We want
            you to have the information that you need to make the right
            decision without any strings attached.." />
    <link rel="canonical" href="/tradeincar" />
  </Helmet>

    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        yearOption: "",
        make: "",
        model: "",
        vin: "",
        bodystyle: "",
        trim: "",
        exteriorColor: "",
        interiorColor: "",
        Cylinders: "",
        Liters: "",
        Mileage: "",
        Transmission: "",
        LienHolder: "",
        EstimatedPayoff: "",
        AdditionalOptions: "",
        zip:"",
        address:"",
        city:"",
        state:"",
      }}
      validationSchema={validate}
      onSubmit={(data) => {
        // console.log(data);

        axios({
          method: "post",
          url: "https://janimotors-api.onrender.com/api/trade-in",
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
        {/* <MetaData title={`Calculate Your Trade || JANI MOTORS`}/> */}
       
        <Layout>
          <div>
            <div className="container text-center">
              <h1 style={{ color: "red" }}>WHAT IS MY VEHICLE WORTH?</h1>
              <p style={{ color: "white" }}>
                Bring your old car to us, and we can help you trade it in to get
                something newer and better. We love finding ways to help our
                customers get the vehicles that they really want. A trade-in
                will give your budget a boost. Before you know it, you will be
                able to afford vehicles that were previously out of your reach.
                This is a great way to get rid of that old car too. This way you
                can avoid going through the tedious private sale process. You
                don’t have to drive down here yet. You can get an appraisal for
                your old vehicle by simply filling out the form below. We want
                you to have the information that you need to make the right
                decision without any strings attached.
              </p>

              <div className="row  " style={{ margin: "15px 0 15px 0" }}>
                <div className="   col-md-6">
                  <h2 style={{ color: "red" }}>Vehicle Information</h2>
                  {/* ---------------------------------------------------------------------------------------- */}
                  <Form  >
                    <FormikControl
                      control="select"
                      label="Year"
                      name="yearOption"
                      options={optionsForYear}
                    />
                    <FormikControl
                      control="select"
                      label="Make"
                      name="make"
                      options={optionItems}
                    />

                    <TextField  label="Model" name="model" type="text" />
                    <TextField label="Vin" name="vin" type="text" />
                    <FormikControl
                      control="select"
                      label="Body Style"
                      name="bodystyle"
                      options={bodyStyle}
                    />
                    <TextField label="Trim" name="trim" type="text" />
                    <TextField
                      label="Exterior color"
                      name="exteriorColor"
                      type="text"
                    />
                    <TextField
                      label="Interior color"
                      name="interiorColor"
                      type="text"
                    />
                    <TextField label="Cylinders" name="Cylinders" type="text" />
                    <TextField label="Liters" name="Liters" type="text" />
                    <TextField label="Mileage" name="Mileage" type="text" />
                    <FormikControl
                      control="select"
                      label="Transmission"
                      name="Transmission"
                      options={transmissionsObj}
                    />
                    <TextField
                      label="Lien Holder"
                      name="LienHolder"
                      type="text"
                    />
                    <TextField
                      label="Estimated Payoff"
                      name="EstimatedPayoff"
                      type="text"
                    />

                    <span style={{ color: "white" }}>Additional Options</span>
                    <Field
                      as="textarea"
                      label=" AdditionalOptions"
                      id="AdditionalOptions"
                      name="AdditionalOptions"
                    ></Field>
                  </Form>
                </div>

                <div className="col-md-6">
                  <h2 style={{ color: "red" }}>Contact Information</h2>
                  <Form >
                    <TextField
                      label="First Name"
                      name="firstName"
                      type="text"
                    />
                    <TextField label="last Name" name="lastName" type="text" />
                    <TextField label="Address" name="address" type="text" />
                    <TextField label="City" name="city" type="text" />
                    <FormikControl
                      control="select"
                      label="State"
                      name="state"
                      options={stateItems}
                    />
                    <TextField label="Zip" name="zip" type="number" />
                    <TextField label="Day Phone" name="phone" type="number" />
                    <TextField label="Email" name="email" type="email" />

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
              </div>
            </div>
          </div>
          
        </Layout>
        </>
      )}
    </Formik>
    </>
  );
};

export default TradeINcar;
