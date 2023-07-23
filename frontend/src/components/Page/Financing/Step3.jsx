import React, { useState } from "react";
import "./Creditapproval.css";
import { FaInfoCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import "./Creditapproval.css";

function Step3(props) {
  const message1 = "Select Employment Status";
  const [selectValue, setselectValue] = useState({ val: "" });
  const [formError, setFormError] = useState(false);

  const handleFormSubmission = () => {
    if (selectValue.val === "") {
      setFormError(true);
    }
  };
  const handleChange1 = (e) => {
    setselectValue({ val: e.target.value });

    setFormError(false);
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

  // console.log(errors.name)

  // let value;
  // const selected = () => {
  //   if (value == "aadhar") {
  //     document.getElementById("adc").style.display = "block";
  //   } else {
  //     document.getElementById("adc").style.display = "none";
  //   }
  // };

  const getInputValue = (event) => {
    const userValue = event.target.value;

    console.log(userValue);
  };

  const [selectedValue, setSelectedValue] = useState({ val: " " });
  // console.log(setSelectedValue);
  // handle onChange event of the dropdown
  const SelectValueChanger = (e) => {
    setSelectedValue({ val: e.target.value });
   
  };
  // document.getElementById("formWrapper").style.display = "block";
  console.log(selectedValue.val);
  switch (selectedValue.val) {

    case "select" :
    case "unemployed":
    case "retired":
    case "retiredMilitary":
      
      document.getElementById("employed").style.display = "none"; // same as activeMilitary and others
      document.getElementById("selfEmployed").style.display = "none";
      document.getElementById("student").style.display = "none";
     

      //retiredMilitary is Empty
      //unemployed is Empty
      //retired is Empty
      break;

    case "employed": 
    case "activeMilitary":
    case "others":
      document.getElementById("employed").style.display = "block"; // same as activeMilitary and others
      document.getElementById("selfEmployed").style.display = "none";
      document.getElementById("student").style.display = "none";

      break;

    case "selfEmployed":
      document.getElementById("employed").style.display = "none"; // same as activeMilitary and others
      document.getElementById("selfEmployed").style.display = "block";
      document.getElementById("student").style.display = "none";
      

      break;

    case "student":
      document.getElementById("employed").style.display = "none"; // same as activeMilitary and others
      document.getElementById("selfEmployed").style.display = "none";
      document.getElementById("student").style.display = "block";


    break;
    

    default:
      // console.log("Invalid ");
      
    break;
  }
//   Step3.defaultProps = {
//     secondPerson: '',

// };
  return (
    <div>
      <div className="row creditForm">
        <div className="col-sm-12 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">
            {props.secondPerson}Applicant Employment
          </h1>
          <p className="alert">
            <FaInfoCircle /> All fields are required unless indicated as
            optional.
          </p>
          <h5>
            <b>Applicant Employment</b>
          </h5>
          <hr />
          
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ...................................> */}
            
            <select
              id="selector"
              value={selectValue.val}
                    onChange={SelectValueChanger}
            >
              <option value="select">Select Employment Status</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="selfEmployed">Self-Employed</option>
              <option value="student">Student</option>
              <option value="retired">Retired</option>
              <option value="activeMilitary">Active Military</option>
              <option value="retiredMilitary">Retired Military</option>
              <option value="others">Other</option>
            </select>
            {formError && (
                    <small className="text-danger">{message1}</small>
                  )}
            <div id= "formWrapper" >
            <div id="employed" style={{display: "none"}}>
              <div className="row creditForm">
                <div className="col-12 col-md-4">
                  <label className="col-form-label" for="employed">Employer:</label>
                  <input
                    onChange={getInputValue}
                    type="text"
                    placeholder="Employer"
                    className={`form-control ${errors.employer && "invalid"}`}
                    {...register("employer", {
                      required: "Employer is Required",
                    })}
                    onKeyUp={() => {
                      trigger("employer");
                    }}
                  />
                  {errors.employer && (
                    <small className="text-danger">
                      {errors.employer.message}
                    </small>
                  )}
                </div>
                <div className="col-12 col-md-4">
                  <label className="col-form-label" for="aadhar">Work Title:</label>
                  <input
                    onChange={getInputValue}
                    type="text"
                    placeholder="Work Title"
                    className={`form-control ${errors.workTitle && "invalid"}`}
                    {...register("workTitle", {
                      required: "Work Title is Required",
                    })}
                    onKeyUp={() => {
                      trigger("workTitle");
                    }}
                  />
                  {errors.workTitle && (
                    <small className="text-danger">
                      {errors.workTitle.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <label className="col-form-label" for="aadhar">Work Phone:</label>
                <input
                  onChange={getInputValue}
                  type="text"
                  className={`form-control ${errors.phone && "invalid"}`}
                  {...register("phone", {
                    required: "Phone is Required",
                    pattern: {
                      value:
                        /^\s*(?:\+?(\d{1,3}))?[-. (](\d{3})[-. )](\d{3})[-. ](\d{4})(?: *x(\d+))?\s$/,
                      message: "Invalid phone no",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("phone");
                  }}
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone.message}</small>
                )}
              </div>
              <p class="text-muted">
                I consent to receive autodialed, pre-recorded and artificial
                voice telemarketing and sales calls and text messages from or on
                behalf of dealer (or any financing source to which dealer
                assigns my contract) at the telephone number(s) provided in this
                communication, including any cell phone numbers. I understand
                that this consent is not a condition of purchase or credit.
              </p>
              <div className="row creditForm">
                <div className="col-12 col-md-2">
                  <b>Time at Job</b> <br />
                  <label className="col-form-label">Years</label>
                  <input
                    onChange={getInputValue}
                    type="number"
                    placeholder="Years"
                    className={`form-control ${errors.years && "invalid"}`}
                    {...register("years", {
                      required: "Years is Required",
                    })}
                    onKeyUp={() => {
                      trigger("years");
                    }}
                  />
                  {errors.years && (
                    <small className="text-danger">
                      {errors.years.message}
                    </small>
                  )}
                </div>
                <div className="col-12 col-md-2 pt-4">
                  <label className="col-form-label">Months</label>
                  <input
                    onChange={getInputValue}
                    type="number"
                    placeholder="Months"
                    className={`form-control ${errors.months && "invalid"}`}
                    {...register("months", {
                      required: "Months is Required",
                    })}
                    onKeyUp={() => {
                      trigger("months");
                    }}
                  />
                  {errors.months && (
                    <small className="text-danger">
                      {errors.months.message}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div id="selfEmployed"  style={{display: "none"}}>
              <div className="col-12 col-md-4">
                <b>Self-Employmed:</b>
                <br />
                <label for="Self-Employed">Work Phone:</label>
                <input
                  onChange={getInputValue}
                  type="text"
                  className={`form-control ${errors.phone && "invalid"}`}
                  {...register("phone", {
                    required: "Phone is Required",
                    pattern: {
                      value:
                        /^\s*(?:\+?(\d{1,3}))?[-. (](\d{3})[-. )](\d{3})[-. ](\d{4})(?: *x(\d+))?\s$/,
                      message: "Invalid phone no",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("phone");
                  }}
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone.message}</small>
                )}
              </div>
              <p class="text-muted">
                I consent to receive autodialed, pre-recorded and artificial
                voice telemarketing and sales calls and text messages from or on
                behalf of dealer (or any financing source to which dealer
                assigns my contract) at the telephone number(s) provided in this
                communication, including any cell phone numbers. I understand
                that this consent is not a condition of purchase or credit.
              </p>
              <div className="row creditForm">
                <div className="col-12 col-md-2">
                  <b>Time at Job</b> <br />
                  <label className="col-form-label">Years</label>
                  <input
                    onChange={getInputValue}
                    type="number"
                    placeholder="Years"
                    className={`form-control ${errors.years && "invalid"}`}
                    {...register("years", {
                      required: "Years is Required",
                    })}
                    onKeyUp={() => {
                      trigger("years");
                    }}
                  />
                  {errors.years && (
                    <small className="text-danger">
                      {errors.years.message}
                    </small>
                  )}
                </div>
                <div className="col-12 col-md-2 pt-4">
                  <label className="col-form-label">Months</label>
                  <input
                    onChange={getInputValue}
                    type="number"
                    placeholder="Months"
                    className={`form-control ${errors.months && "invalid"}`}
                    {...register("months", {
                      required: "Months is Required",
                    })}
                    onKeyUp={() => {
                      trigger("months");
                    }}
                  />
                  {errors.months && (
                    <small className="text-danger">
                      {errors.months.message}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div id="student"  style={{display: "none"}}>
              <div className="row creditForm">
                <div className="col-12 col-md-4">
                  <label className="col-form-label" for="student">School Name:</label>
                  <input
                    onChange={getInputValue}
                    type="text"
                    placeholder="School Name"
                    className={`form-control ${errors.schoolName && "invalid"}`}
                    {...register("schoolName", {
                      required: "School Name is Required",
                    })}
                    onKeyUp={() => {
                      trigger("schoolName");
                    }}
                  />
                  {errors.schoolName && (
                    <small className="text-danger">
                      {errors.schoolName.message}
                    </small>
                  )}
                </div>
                <div className="col-12 col-md-4">
                  <label className="col-form-label" for="aadhar">School Title:</label>
                  <input
                    onChange={getInputValue}
                    type="text"
                    placeholder="Student"
                    className={`form-control ${errors.studentTitle && "invalid"}`}
                    {...register("studentTitle", {
                      required: "School Title is Required",
                    })}
                    onKeyUp={() => {
                      trigger("studentTitle");
                    }}
                  />
                  {errors.studentTitle && (
                    <small className="text-danger">
                      {errors.studentTitle.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <label className="col-form-label" for="aadhar">School Phone:</label>
                <input
                  onChange={getInputValue}
                  type="text"
                  className={`form-control ${errors.studentPhone && "invalid"}`}
                  {...register("studentPhone", {
                    required: "School Phone is Required",
                    pattern: {
                      value:
                        /^\s*(?:\+?(\d{1,3}))?[-. (](\d{3})[-. )](\d{3})[-. ](\d{4})(?: *x(\d+))?\s$/,
                      message: "Invalid phone no",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("studentPhone");
                  }}
                />
                {errors.studentPhone && (
                  <small className="text-danger">{errors.studentPhone.message}</small>
                )}
              </div>
              <p class="text-muted">
                I consent to receive autodialed, pre-recorded and artificial
                voice telemarketing and sales calls and text messages from or on
                behalf of dealer (or any financing source to which dealer
                assigns my contract) at the telephone number(s) provided in this
                communication, including any cell phone numbers. I understand
                that this consent is not a condition of purchase or credit.
              </p>
              <div className="row creditForm">
                <div className="col-12 col-md-2">
                  <b>Time at School</b> <br />
                  <label className="col-form-label">Years</label>
                  <input
                    onChange={getInputValue}
                    type="number"
                    placeholder="Years"
                    className={`form-control ${errors.years && "invalid"}`}
                    {...register("years", {
                      required: "Years is Required",
                    })}
                    onKeyUp={() => {
                      trigger("years");
                    }}
                  />
                  {errors.years && (
                    <small className="text-danger">
                      {errors.years.message}
                    </small>
                  )}
                </div>
                <div className="col-12 col-md-2 pt-4">
                  <label className="col-form-label">Months</label>
                  <input
                    onChange={getInputValue}
                    type="number"
                    placeholder="Months"
                    className={`form-control ${errors.months && "invalid"}`}
                    {...register("months", {
                      required: "Months is Required",
                    })}
                    onKeyUp={() => {
                      trigger("months");
                    }}
                  />
                  {errors.months && (
                    <small className="text-danger">
                      {errors.months.message}
                    </small>
                  )}
                </div>
              </div>
            </div>
            {/* <......................................................................> */}
            </div>
            <hr />
            <b>
              Income: Please enter all sources of income you wish us to
              consider.
            </b>
            <p class="text-muted">
              **Alimony, child support, or separate maintenance income need not
              be revealed if you do not wish to have it considered as a basis
              for repaying this obligation.
            </p>
            <div className="row creditForm">
              <div className="col-12 col-md-4">
                <label className="col-form-label">Income:</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Income Source</option>
                  <option value="1">Salary/Wages</option>
                  <option value="2">Incentive or Bonus Income</option>
                  <option value="3">Retirement</option>
                  <option value="4">Child Support**</option>
                  <option value="4">
                    Family or Spousal Support (Alimony)**
                  </option>
                  <option value="5">Disability</option>
                  <option value="6">Housing Allowance</option>
                  <option value="7">Military Allowance</option>
                  <option value="8">Municipal Bond Interest</option>
                  <option value="9">Public Assistance Programs</option>
                  <option value="10">Social Security Benefits</option>
                  <option value="11">Workers' Compensation</option>
                  <option value="12">Other (taxable)</option>
                  <option value="13">Other (non-taxable)</option>
                </select>
              </div>
              <div className="col-12 col-md-2">
                <label className="col-form-label">Per Year:</label>
                <input
                  type="number"
                  placeholder="$ Per Year"
                  min = "0"
                  className={`form-control ${errors.paymentYear && "invalid"}`}
                  {...register("paymentYear", {
                    required: "$ Per Year is Required",
                  })}
                  onKeyUp={() => {
                    trigger("paymentYear");
                  }}
                />
                {errors.paymentYear && (
                  <small className="text-danger">
                    {errors.paymentYear.message}
                  </small>
                )}
              </div>
            </div>
            <div className="row creditForm">
              <div className="col-12 col-md-4">
                <label className="col-form-label">Income: (Optional)</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Income Source</option>
                  <option value="1">Salary/Wages</option>
                  <option value="2">Incentive or Bonus Income</option>
                  <option value="3">Retirement</option>
                  <option value="4">Child Support**</option>
                  <option value="4">
                    Family or Spousal Support (Alimony)**
                  </option>
                  <option value="5">Disability</option>
                  <option value="6">Housing Allowance</option>
                  <option value="7">Military Allowance</option>
                  <option value="8">Municipal Bond Interest</option>
                  <option value="9">Public Assistance Programs</option>
                  <option value="10">Social Security Benefits</option>
                  <option value="11">Workers' Compensation</option>
                  <option value="12">Other (taxable)</option>
                  <option value="13">Other (non-taxable)</option>
                </select>
              </div>
              <div className="col-12 col-md-2">
                <label className="col-form-label">Per Year: (Optional)</label>
                <input
                  type="number"
                  placeholder="$ Per Year (Optional)"
                  className={`form-control}`}
                />
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Send message"
              onClick={handleFormSubmission}
            />
          </form>
        
        </div>
      </div>
    </div>
  );
}

export default Step3;
