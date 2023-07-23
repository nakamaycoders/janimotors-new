import React,{useState} from "react";
import "./Creditapproval.css";
import { FaInfoCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
// import PropTypes from 'prop-types'

function Step1(props) {
  // const DataArrayStep1 = [];
  const [firstName,setFirstName] = useState({val: ""});

  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
   
    // reset();    //      UNCOMMENT IT AT THE END 
 
    
  };
  // console.log(DataArrayStep1[0].firstName)

  Step1.defaultProps = {
    secondPerson: '',

};
  // console.log(watch());

  // console.log(errors.name)
  return (
    <div>
      <div className="row creditForm">
        <div className="col-sm-12 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">
            {props.secondPerson} Applicant Contact Info
          </h1>
          <p className="alert">
            <FaInfoCircle /> All fields are required unless indicated as
            optional.
          </p>
          <h5>
            <b>Application Type</b>
          </h5>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">
              Individual
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">
              Joint
            </label>
          </div>
          <br />
          <p>
            Please be aware that by selecting "Joint" the applicant and the
            co-applicant agree they intend to apply for joint credit. The
            co-applicant must be present and must indicate his or her acceptance
            of the Terms and Conditions at the end of this application before it
            is submitted.
          </p>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row creditForm">
              <div className="col-12 col-md-4">
                <label className="col-form-label">First Name:</label>
                <input
              
                  type="text"
                  placeholder="First Name"
                  className={`form-control ${errors.name && "invalid"}`}
                  {...register("firstName", {
                    required: "First Name is Required",
                  })}
                  onKeyUp={() => {
                    trigger("firstName");
                  }}
                />
                {errors.firstName && (
                  <small className="text-danger">
                    {errors.firstName.message}
                  </small>
                )}
              </div>
              <div className="col-12 col-md-4">
                <label className="col-form-label">Middle Name:</label>
                <input
                  value={firstName.val}
                  onChange={e => setFirstName({ val: e.target.value })}
                  type="text"
                  placeholder="Optional"
                  className={`form-control ${errors.name && "invalid"}`}
                />
                {/* {console.log(firstName.val)} */}
              </div>
              <div className="col-12 col-md-4">
                <label className="col-form-label">Last Name:</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className={`form-control ${errors.name && "invalid"}`}
                  {...register("lastName", {
                    required: "Last Name is Required",
                  })}
                  onKeyUp={() => {
                    trigger("lastName");
                  }}
                />
                {errors.lastName && (
                  <small className="text-danger">
                    {errors.lastName.message}
                  </small>
                )}
              </div>
            </div>
            <div className="row creditForm">
              <div className="col-6 col-md-2">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Suffix</option>
                  <option value="1">JR</option>
                  <option value="2">SR</option>
                  <option value="3">I</option>
                  <option value="4">II</option>
                  <option value="4">III</option>
                  <option value="5">IV</option>
                </select>
              </div>
              <div className="col-6 col-md-2 selectSuffix">(Optional)</div>
            </div>
            <hr />
            <div className="form-group col-12 col-md-4">
              <label className="col-form-label">Phone:</label>
              <input
                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", {
                  required: "Phone is Required",
                  pattern: {
                    value: "",
                      // {/^\s*(?:\+?(\d{1,3}))?[-. (](\d{3})[-. )](\d{3})[-. ](\d{4})(?: *x(\d+))?\s$}/,
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
            I consent to receive autodialed, pre-recorded and artificial voice telemarketing and sales calls and text messages from or on behalf of dealer (or any financing source to which dealer assigns my contract) at the telephone number(s) provided in this communication, including any cell phone numbers. I understand that this consent is not a condition of purchase or credit.
            </p>
            <div className="form-group col-12 col-md-4">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group col-12 col-md-4">
              <label className="col-form-label">Verify Email:</label>
              <input
                type="text"
                className={`form-control ${errors.verifyEmail && "invalid"}`}
                {...register("verifyEmail", {
                  required: "Verify Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("verifyEmail");
                }}
              />
              {errors.verifyEmail && (
                <small className="text-danger">
                  {errors.verifyEmail.message}
                </small>
              )}
            </div>

            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Send message"
            />
            
          </form>
        </div>
      </div>
    </div>
  );
  
}

export default Step1;
