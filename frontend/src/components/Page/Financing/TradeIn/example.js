import React, { useState } from "react";
import "react-datetime/css/react-datetime.css";
import "./TradeInCar.css";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Layout from "../../../layout/layout/layout";
import Axios from "axios";

const message = "Please fill out the given field correctly";
function TradeINCar() {
  const url = "https://janimotors-api.onrender.com/api/trade-in";
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [vin, setVin] = useState("");
  const [model, setModel] = useState("");
  const [bodyStyle, setBodyStyle] = useState("");
  const [trim, setTrim] = useState("");
  const [interiorColor, setInteriorColor] = useState("");
  const [exteriorColor, setExteriorColor] = useState("");
  const [cylinders, setCylinders] = useState("");
  const [liters, setLiters] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [lienHolder, setLienHolder] = useState("");
  const [estimatedPayoff, setEstimatedPayoff] = useState("");
  const [additionalOptions, setAdditionalOptions] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");

  const createContactSubmitHandler = (e) => {
    e.preventDefault();

    Axios.post(url, {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      make: make,
      year: year,
      model: model,
      vin: vin,
      bodystyle: bodyStyle,
      interiorColor: interiorColor,
      exteriorColor: exteriorColor,
      zip: zip,
      Cylinders: cylinders,
      Mileage: mileage,
      Transmission: transmission,
      LienHolder: lienHolder,
      EstimatedPayoff:estimatedPayoff,
      state:state,
      AdditionalOptions:additionalOptions,
      trim: trim,
      city:city,
      address:address,
      Liters:liters,
    }).then((res) => {
      console.log(res.data);
    });
  };

  const {
    // register,
    // handleSubmit,
    formState: { errors },
    // reset,
    // trigger,
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   // reset();
  // };

  const [formError, setFormError] = useState(false);
  const [formmakeError, setFormmakeError] = useState(false);

  // ---------------------------------------------------------------------------

  // const [value, setValue] = useState({ val: "" });
  // const [makeValue, setmakeValue] = useState({ val: "" });

  const handleChange = (e) => {
    setYear(e.target.value);

    setFormError(false);
  };
  // console.log(value.val);
  const handleMakeChange = (e) => {
    setMake(e.target.value);

    setFormmakeError(false);
  };

  const handleFormSubmission = () => {
    if (year === "") {
      setFormError(true);
    } else if (year === "") {
      setFormError(false);
    }

    if (make === "") {
      setFormmakeError(true);
    } else if (make === "") {
      setFormmakeError(false);
    }
  };

  //Gets Years from 1900 to 2022
  const arrayOfyears = [];
  const currentDate = new Date();
  for (let i = 1900; i <= currentDate.getFullYear(); i++) {
    arrayOfyears.push(i);
  }

  let optionsForYear = arrayOfyears.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  const obj = [
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

  let optionItems = obj.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <Layout>
      <div>
        <div className="container text-center">
          <h1 style={{ color: "blue" }}>WHAT IS MY VEHICLE WORTH?</h1>
          <p style={{ color: "white" }}>
            Bring your old car to us, and we can help you trade it in to get
            something newer and better. We love finding ways to help our
            customers get the vehicles that they really want. A trade-in will
            give your budget a boost. Before you know it, you will be able to
            afford vehicles that were previously out of your reach. This is a
            great way to get rid of that old car too. This way you can avoid
            going through the tedious private sale process. You don’t have to
            drive down here yet. You can get an appraisal for your old vehicle
            by simply filling out the form below. We want you to have the
            information that you need to make the right decision without any
            strings attached.
          </p>

          <div className="row  " style={{ margin: "15px 0 15px 0" }}>
            <div className="   col-md-6">
              <h2 style={{ color: "blue" }}>Vehicle Information</h2>
              {/* ---------------------------------------------------------------------------------------- */}
              <form
                // handleSubmit={onSubmit}
                onSubmit={createContactSubmitHandler}
                encType="multipart/form-data"
              >
                <div className="form-group text-start">
                  <label>Year</label>
                  <select
                    className="form-select"
                    value={year.val}
                    onChange={handleChange}
                  >
                    <option>Open this select menu</option>
                    {optionsForYear}
                  </select>
                  {formError && (
                    <small className="text-danger">{message}</small>
                  )}
                </div>

                <div className="form-group text-start">
                  <label className="">Make</label>
                  <select
                    className="form-select "
                    value={make.val}
                    onChange={handleMakeChange}
                    aria-label="Default select"
                  >
                    <option selected="">Open this select menu</option>
                    {optionItems}
                  </select>
                  {formmakeError && (
                    <small className="text-danger">{message}</small>
                  )}
                </div>

                <div className="form-group text-start">
                  <label>Model</label>
                  <input
                    type="text"
                    className={`form-control ${errors.model && "invalid"}`}
                    value={model}
                    onChange={(e)=>setModel(e.target.value)}
                    // {...register("model", { required: "Model is Required" })}
                    // onKeyUp={() => {
                    //   trigger("model");
                    // }}
                  />
                  {errors.model && (
                    <small className="text-danger">
                      {errors.model.message}
                    </small>
                  )}
                </div>

                <div className="form-group text-start">
                  <label>VIN</label>
                  <input
                    type="text"
                    className={`form-control ${errors.VIN && "invalid"}`}
                    value={vin}
                    onChange={(e)=>setVin(e.target.value)}
                    // {...register("VIN", { required: "VIN is Required" })}
                    // onKeyUp={() => {
                    //   trigger("VIN");
                    // }}
                  />
                  {errors.VIN && (
                    <small className="text-danger">{errors.VIN.message}</small>
                  )}
                </div>

                <div className="text-start">
                  <label> Body Type </label>
                  <select 
                  className="form-select "
                  value={bodyStyle}
                  onChange={(e)=>setBodyStyle(e.target.value)}
                  aria-label="Default select">
                    <option selected="">Open this select menu</option>
                    <option value="1">Two Door</option>
                    <option value="2">Four Door</option>
                    <option value="3">HatchBack</option>
                  </select>
                  <small> </small>
                </div>

                <div className="form-group text-start">
                  <label className="">Trim</label>
                  <input className="form-control"
                   value={trim}
                   onChange={(e)=>setTrim(e.target.value)}
                  type="text" />
                </div>

                <div className="form-group text-start">
                  <label className="">Exterior Color</label>
                  <input className="form-control"
                   value={exteriorColor}
                   onChange={(e)=>setExteriorColor(e.target.value)}
                  type="text" />
                </div>

                <div className="form-group text-start">
                  <label className="">Interior Color</label>
                  <input className="form-control" 
                   value={interiorColor}
                   onChange={(e)=>setInteriorColor(e.target.value)}
                   type="text" />
                </div>

                <div className="form-group text-start">
                  <label className="">Cylinders</label>
                  <input className="form-control"
                   value={cylinders}
                   onChange={(e)=>setCylinders(e.target.value)}
                    type="text" />
                </div>

                <div className="form-group text-start">
                  <label className="">Liters</label>
                  <input className="form-control"
                   value={liters}
                   onChange={(e)=>setLiters(e.target.value)}
                    type="text" />
                </div>

                <div className="form-group text-start">
                  <label className="">Mileage</label>
                  <input className="form-control"
                   value={mileage}
                   onChange={(e)=>setMileage(e.target.value)} type="text" />
                </div>

                <div className="text-start">
                  <label> Transmission </label>
                  <select className="form-select " 
                   value={transmission}
                   onChange={(e)=>setTransmission(e.target.value)}
                   aria-label="Default select">
                    <option selected="">Open this select menu</option>
                    <option value="1">Manual</option>
                    <option value="2">Automatic</option>
                    {/* <option value="3">Three</option> */}
                  </select>
                </div>

                <div className="form-group text-start">
                  <label className="">Lien Holder</label>
                  <input className="form-control"
                   value={lienHolder}
                   onChange={(e)=>setLienHolder(e.target.value)}
                    type="text" />
                </div>

                <div className="form-group text-start">
                  <label className="">Estimated Payoff</label>
                  <input className="form-control"
                   value={estimatedPayoff}
                   onChange={(e)=>setEstimatedPayoff(e.target.value)} type="text" />
                </div>

                <div className="form-group text-start">
                  <label htmlFor="">Addition options</label>
                  <Form.Control as="textarea"
                   value={additionalOptions}
                   onChange={(e)=>setAdditionalOptions(e.target.value)}
                    rows={3} />
                </div>

              </form>
            </div>

            <div className="col-md-6">
              <h2 style={{ color: "blue" }}>Vehicle Information</h2>
              {/* onSubmit={handleSubmit(onSubmit)} */}
              <form onSubmit={createContactSubmitHandler}>
                <div className="form-group text-start">
                  <label>First Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.FirstName && "invalid"}`}
                    value={fname}
                    onChange={(e)=>setFname(e.target.value)}
                    // {...register("FirstName", {
                    //   required: "First Name is Required",
                    // })}
                    // onKeyUp={() => {
                    //   trigger("FirstName");
                    // }}
                  />
                  {errors.FirstName && (
                    <small className="text-danger">
                      {errors.FirstName.message}
                    </small>
                  )}
                </div>
                <div className="form-group text-start">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.LastName && "invalid"}`}
                    value={lname}
                    onChange={(e)=>setLname(e.target.value)}
                    // {...register("LastName", {
                    //   required: "Last Name is Required",
                    // })}
                    // onKeyUp={() => {
                    //   trigger("LastName");
                    // }}
                  />
                  {errors.LastName && (
                    <small className="text-danger">
                      {errors.LastName.message}
                    </small>
                  )}
                </div>

                <div className="form-group text-start">
                  <label className="">Address</label>
                  <input className="form-control" 
                   value={address}
                   onChange={(e)=>setAddress(e.target.value)}
                   type="text" />

                </div>

                <div className="form-group text-start">
                  <label className="">City</label>
                  <input className="form-control"
                   value={city}
                   onChange={(e)=>setCity(e.target.value)}
                  type="text" />
                </div>

                <div className="text-start">
                  <label> State </label>
                  <select className="form-select "
                   value={state}
                   onChange={(e)=>setState(e.target.value)}
                    aria-label="Default select">
                    <option selected="">Open this select menu</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AS">American Samoa</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FM">Federated States Of Micronesia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>

                <div className="form-group text-start">
                  <label>Zip</label>
                  <input
                    type="text"
                    title="Please enter a Zip Code"
                    pattern="^\s*?\d{5}(?:[-\s]\d{4})?\s*?$"
                    className={`form-control ${errors.Zip && "invalid"}`}
                    value={zip}
                    onChange={(e)=>setZip(e.target.value)}
                    // {...register("Zip", { required: "Zip is Required" })}
                    // onKeyUp={() => {
                    //   trigger("Zip");
                    // }}
                  />
                  {errors.Zip && (
                    <small className="text-danger">{errors.Zip.message}</small>
                  )}
                </div>

                <div className="form-group text-start">
                  <label>Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email && "invalid"}`}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    // {...register("email", {
                    //   required: "Email is Required",
                    //   pattern: {
                    //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    //     message: "Invalid email address",
                    //   },
                    // })}
                    // onKeyUp={() => {
                    //   trigger("email");
                    // }}
                  />
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>
                <div className="form-group text-start">
                  <label>Day Phone</label>
                  <input
                    type="number"
                    className={`form-control ${errors.phone && "invalid"}`}
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    // {...register("phone", {
                    //   required: "Phone is Required",
                    //   pattern: {
                    //     value:
                    //       /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    //     message: "Invalid phone no",
                    //   },
                    // })}
                    // onKeyUp={() => {
                    //   trigger("phone");
                    // }}
                  />
                  {errors.phone && (
                    <small className="text-danger">
                      {errors.phone.message}
                    </small>
                  )}
                </div>
                {/* <div className="form-group text-start">
              <label  >Message:</label>
              <textarea
                className={`form-control ${errors.message && "invalid"}`}
                {...register("message", { required: "Message is Required",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum allowed length is 50 ",
                }
               })}
               onKeyUp={() => {
                trigger("message");
              }}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div> */}
                <input
                  type="submit"
                  className="btn btn-primary my-3"
                  value="Submit"
                  onClick={handleFormSubmission}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TradeINCar;


{/* <Form>
<div className="col-md-6">
<TextField label="Message" name="AdditionalOptions" type="text" />
<FormikControl
control='select'
label='Select a topic'
name='yearOption'
options={optionsForYear}
/>
</div>
{/* <div className="col-md-6">
<TextField label="First Name" name="firstName" type="text" />
<TextField label="last Name" name="lastName" type="text" />
<TextField label="Email" name="email" type="email" />
<TextField label="Phone" name="phone" type="number" />
</div> */}

// </Form>

// <Form className="col-md-6" >
   
// <TextField label="First Name" name="firstName" type="text" />
// <TextField label="last Name" name="lastName" type="text" />
// <TextField label="Email" name="email" type="email" />
// <TextField label="Phone" name="phone" type="number" />



// <button
//   className="btn btn-primary mt-3"
//   type="submit"
//   style={{ marginRight: 20 }}
// >
//   Register
// </button>
// <button className="btn btn-warning mt-3 ml-3" type="reset">
//   Reset
// </button>
// </Form> */}