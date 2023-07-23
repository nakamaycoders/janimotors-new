import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Creditapproval.css";
import { FaInfoCircle } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

{/* <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="zip"
            render={({ field }) => (
              <TextField
                id="zip"
                label="ZIP"
                variant="outlined"
                // placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <TextField
                id="city"
                label="CITY"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid> */}
function Step2(props) {
  const message = "Select Housing Status";
  const arrayOfHouse = [
    "Mortgage",
    "Rent",
    "Own Outright",
    "Military",
    "Family",
    "Other",
  ];
  const [selectValue, setselectValue] = useState({ val: "" });
  const [formError, setFormError] = useState(false);

  let optionsForHouse = arrayOfHouse.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const handleFormSubmission = () => {
    if (selectValue.val === "") {
      setFormError(true);
      setFormError1(true);
    }
  };
  const handleChange1 = (e) => {
    setselectValue({ val: e.target.value });

    setFormError(false);
  };

  const message1 = "Select State";
  const [selectValue1, setselectValue1] = useState({ val: "" });
  const [formError1, setFormError1] = useState(false);

  const handleChange2 = (e) => {
    setselectValue1({ val: e.target.value });

    setFormError(false);
  };

  const [Datevalue, setDateValue] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue) => {
    setDateValue(newValue);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // console.log(watch());
  Step2.defaultProps = {
    secondPerson: '',

};
  // console.log(errors.name)
  return (
    <div>
      <div className="row creditForm">
        <div className="col-sm-12 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">{props.secondPerson} Applicant Housing</h1>
          <p className="alert">
            <FaInfoCircle /> All fields are required unless indicated as
            optional.
          </p>
          <h5>
            <b>Address</b>
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row creditForm">
              <div className="col-12 col-md-2">
                <label className="col-form-label">Street No:</label>
                <input
                  type="text"
                  placeholder="Street #"
                  className={`form-control ${errors.street && "invalid"}`}
                  {...register("street", {
                    required: "Street is Required",
                  })}
                  onKeyUp={() => {
                    trigger("street");
                  }}
                />
                {errors.street && (
                  <small className="text-danger">{errors.street.message}</small>
                )}
              </div>
              <div className="col-12 col-md-4">
                <label className="col-form-label">Street Name:</label>
                <input
                  type="text"
                  placeholder="Street Name"
                  className={`form-control ${errors.streetName && "invalid"}`}
                  {...register("streetName", {
                    required: "Street Name is Required",
                  })}
                  onKeyUp={() => {
                    trigger("streetName");
                  }}
                />
                {errors.street && (
                  <small className="text-danger">
                    {errors.streetName.message}
                  </small>
                )}
              </div>
              <div className="col-12 col-md-4">
                <label className="col-form-label">Street Type:</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Street Type</option>
                  <option value="1">Avenue</option>
                  <option value="2">Boulevard</option>
                  <option value="3">Circle</option>
                  <option value="4">Crescent</option>
                  <option value="4">Court</option>
                  <option value="5">Drive</option>
                  <option value="6">Freeway</option>
                  <option value="7">Highway</option>
                  <option value="8">Lane</option>
                  <option value="9">Path</option>
                  <option value="10">Parkway</option>
                  <option value="11">Place</option>
                  <option value="12">Plaza</option>
                  <option value="13">Road</option>
                  <option value="14">Square</option>
                  <option value="15">Street</option>
                  <option value="16">Terrace</option>
                  <option value="17">Turnpike</option>
                  <option value="18">Trail</option>
                  <option value="19">Way</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-1">
              <label className="col-form-label">Apartment #:</label>
              <input
                type="text"
                placeholder="Optional"
                className={`form-control ${errors.apartment && "invalid"}`}
              />
            </div>
            <div className="form-group row creditForm">
              <div className="col-12 col-md-2">
                <label className="col-form-label">Zip Code:</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className={`form-control ${errors.zipCode && "invalid"}`}
                  {...register("zipCode", {
                    required: "Zip Code is Required",
                  })}
                  onKeyUp={() => {
                    trigger("zipCode");
                  }}
                />
                {errors.zipCode && (
                  <small className="text-danger">
                    {errors.zipCode.message}
                  </small>
                )}
              </div>
              <div className="col-12 col-md-2">
                <label className="col-form-label">City:</label>
                <input
                  type="text"
                  placeholder="City"
                  className={`form-control ${errors.city && "invalid"}`}
                  {...register("city", {
                    required: "City is Required",
                  })}
                  onKeyUp={() => {
                    trigger("city");
                  }}
                />
                {errors.city && (
                  <small className="text-danger">{errors.city.message}</small>
                )}
              </div>
              <div className="col-12 col-md-3">
                <div className="form-group text-start">
                  <label className="col-form-label">State:</label>
                  <select
                    className="form-select"
                    value={selectValue1.val}
                    onChange={handleChange2}
                  >
                    <option>Select State</option>
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
                  {formError1 && (
                    <small className="text-danger">{message1}</small>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className="row creditForm">
              <div className="col-6 col-md-3">
                <b>Housing Status</b>
                <div className="form-group text-start">
                  <select
                    className="form-select"
                    value={selectValue.val}
                    onChange={handleChange1}
                  >
                    <option>Select Housing Satus</option>
                    {optionsForHouse}
                  </select>
                  {formError && (
                    <small className="text-danger">{message}</small>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-2">
                <b>Time at Address (Years)</b> <br />
                {/* <label className="col-form-label">Years</label> */}
                <input
                  type="number"
                  placeholder="Years"
                  min = "0"
                  className={`form-control ${errors.years && "invalid"}`}
                  {...register("years", {
                    required: "Years is Required",
                  })}
                  onKeyUp={() => {
                    trigger("years");
                  }}
                />
                {errors.years && (
                  <small className="text-danger">{errors.years.message}</small>
                )}
              </div>
              {/* <div className="col-12 col-md-2 pt-4">
                {/* <label className="col-form-label">Months</label> */}
                {/* <input
                  type="number"
                  placeholder="Months"
                  className={`form-control ${errors.months && "invalid"}`}
                  {...register("months", {
                    required: "Months is Required",
                  })}
                  onKeyUp={() => {
                    trigger("months");
                  }}
                /> */}
                {/* {errors.months && (
                  <small className="text-danger">{errors.months.message}</small>
                )} */}
              {/* </div> */} 
              <div className="col-12 col-md-2">
                <b>Mortgage Payment/Rent</b> <br />
                {/* <label className="col-form-label">Years</label> */}
                <input
                  type="number"
                  placeholder="$ Per Month"
                  min = "0"
                  className={`form-control ${errors.payment && "invalid"}`}
                  {...register("payment", {
                    required: "Payment is Required",
                  })}
                  onKeyUp={() => {
                    trigger("payment");
                  }}
                />
                {errors.payment && (
                  <small className="text-danger">
                    {errors.payment.message}
                  </small>
                )}
              </div>
            </div>
            <hr />
            <div className="row creditForm">
              <div className="form-group col-12 col-md-2 pt-2">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={Datevalue}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="col-6 col-md-2 pt-4">(mm/dd/yyyy)</div>
            </div>
            <div className="row creditForm">
              <div className="form-group col-12 col-md-4">
                <label className="col-form-label">SSN / ITIN:</label>
                <input
                  type="text"
                  placeholder="SSN / ITIN"
                  className={`form-control ${errors.snn && "invalid"}`}
                  {...register("snn", {
                    required: "SSN / ITIN is Required",
                  })}
                  onKeyUp={() => {
                    trigger("snn");
                  }}
                />
                {errors.snn && (
                  <small className="text-danger">{errors.snn.message}</small>
                )}
              </div>
              <div className="col-6 col-md-8 selectSuffix"><b> Why do we need this?</b>
              <p>Please enter your Social Security Number or Individual Taxpayer Identification Number to ensure we're reviewing the correct credit report information while we consider your application.</p>
              </div>

            </div>
            <p class="text-muted">
              Note: Your personal information is secure with us.
            </p>
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
    
  );
  
}

export default Step2;
