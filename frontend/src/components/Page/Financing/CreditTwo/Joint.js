import React, { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import Layout from "../../../layout/layout/layout";
import MetaData from "../../../layout/MetaData";

import { Link } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  Grid,
  StepLabel,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import "./credit2.css";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));
function getSteps() {
  return [
    "Applicant Contact Info",
    "Applicant Housing",
    "Applicant Employment",
    "Co-Applicant Contact Info",
    "Co-Applicant Housing",
    "Co-Applicant Employment",
  ];
}
const IncomeSrc = [
  "Salary/Wages",
  "Incentive or Bonus Income",
  "Retirement",
  "Child Support**",
  "Family or Spousal Support (Alimony)**",
  "Disability",
  "Housing Allowance",
  "Municipal Bond Interest",
  "Public Assistance Programs",
  "Social Security Benefits",
  "Workers' Compensation",
  "Other (taxable)",
  "Other (non-taxable)",
];
const AllSuffix = ["SR", "JR", "I", "II", "III", "IV"];
const AllState = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];
const AllHouse = [
  "Mortgage",
  "Rent",
  "Own Outright",
  "Military",
  "Family",
  "Other",
];
const AllStreet = [
  "Avenue",
  "Boulevard",
  "Circle",
  "Crescent",
  "Court",
  "Drive",
  "Freeway",
  "Highway",
  "Lane",
  "Path",
  "Parkway",
  "Place",
  "Plaza",
  "Road",
  "Square",
  "Street",
  "Terrace",
  "Turnpike",
  "Trail",
  "Way",
];
const CoApplicantRelationship = ["Spouse", "Relative", "Other"];
const Step1 = () => {
  const { control , formState: { errors } } = useFormContext();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="fname"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="fname"
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.fname)}
                helperText={errors.fname?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="midName"
            // rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="midName"
                label="Middle Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                
// error={Boolean(errors?.midName)}
// helperText={errors.midName?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="lName"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="lName"
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.lName)}
helperText={errors.lName?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ paddingBottom: "20px", paddingTop: "10px" }}
            id="Suffix"
          >
            Select Suffix (Optional)
          </InputLabel>
          <Controller
            control={control}
            name="Suffix"
            render={({ field }) => (
              <Select
                labelId="Suffix"
                id="Suffix"
                //   multiple
                fullWidth
                input={<OutlinedInput label="Suffix" />}
                {...field}
              >
                {AllSuffix.map((Suffix) => (
                  <MenuItem key={Suffix} value={Suffix}>
                    {Suffix}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>

        <hr />
      </Grid>
      <Grid container>
        <Typography md={3} style={{ paddingTop: "20px" }} variant="h5">
          primary phone number
        </Typography>
      </Grid>

      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="homeNum"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="homeNum"
                label="Home"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                
error={Boolean(errors?.homeNum)}
helperText={errors.homeNum?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="cellNum"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="cellNum"
                label="Cell"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.cellNum)}
helperText={errors.cellNum?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid>
        <Typography>
          I consent to receive autodialed, pre-recorded and artificial voice
          telemarketing and sales calls and text messages from or on behalf of
          dealer (or any financing source to which dealer assigns my contract)
          at the telephone number(s) provided in this communication, including
          any cell phone numbers. I understand that this consent is not a
          condition of purchase or credit.
        </Typography>
      </Grid>

      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "This field is required.",
              pattern: {
                value:
                /\S+@\S+\.\S+/,
                message: "please enter a valid e-mail address.",
              },
            }}
            render={({ field }) => (
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.email)}
                helperText={errors.email?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="Vemail"
            rules={{
              required: "Verify Email is Required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            }}

            render={({ field }) => (
              <TextField
                id="Vemail"
                label="Verify Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.Vemail)}
helperText={errors.Vemail?.message}
                
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
const Step2 = () => {
  const [visible, setVisible] = useState(false);
  // const [checked, setChecked] = useState(false);
  const { control ,formState: { errors } } = useFormContext();
  return (
    <>
      <div className="d-flex">
        <p style={{ fontWeight: "bold", fontSize: "19px" }}>Rular Route</p>
        <div style={{ marginLeft: "30px" }}>
          Yes{" "}
          <input
            type="radio"
            className="mx-2"
            name="isyes"
            value="1"
            onClick={() => setVisible(true)}
          />
        </div>
        <div>
          No{" "}
          <input
            type="radio"
            className="mx-2 mt-1"
            name="isyes"
            value="0"
            onClick={() => setVisible(false)}
          />
        </div>
      </div>
      {visible && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="rr"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                  <TextField
                    id="rrr"
                    label="RR"
                    variant="outlined"
                    // style={{marginRight:'22px'}}
                    // placeholder="Street #"
                    halfWidth
                    margin="normal"
                    {...field}
                    
error={Boolean(errors?.rr)}
helperText={errors.rr?.message}
                  />
                )}
              />
            </Grid>
            {/* <p style={{display:'inline-block',margin:'24px',fontSize:'22px'}}>RR</p> */}

            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="box"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                  <TextField
                    id="BOX"
                    label="BOX"
                    variant="outlined"
                    // placeholder=""
                    halfWidth
                    margin="normal"
                    {...field}
                    
error={Boolean(errors?.box)}
helperText={errors.box?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <span
                style={{
                  display: "inline-block",
                  margin: "24px",
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                BOX(Example: RR 2 BOX 152)
              </span>
            </Grid>
          </Grid>
        </>
      )}

      {!visible && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="streetnum"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                  <TextField
                    id="street #"
                    label="Street #"
                    variant="outlined"
                    // placeholder="Enter Your Phone Number"
                    halfWidth
                    margin="normal"
                    {...field}
                    
error={Boolean(errors?.streetnum)}
helperText={errors.streetnum?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="StreetName"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                  <TextField
                    id="Street"
                    label="Street Name"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                    
error={Boolean(errors?.StreetName)}
helperText={errors.StreetName?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="streetOptional"
              >
                Select Street (Optional)
              </InputLabel>
              <Controller
                control={control}
                name="StreetOptional"
                render={({ field }) => (
                  <Select
                    labelId="Select Street"
                    id="selectStreet"
                    //   multiple
                    // label="Select State"
                    fullWidth
                    input={<OutlinedInput label="Street" />}
                    {...field}
                  >
                    {AllStreet.map((Street) => (
                      <MenuItem key={Street} value={Street}>
                        {Street}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="apt"
                render={({ field }) => (
                  <TextField
                    id="apt #"
                    label="Apt #"
                    variant="outlined"
                    // placeholder="Enter Your Phone Number"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
        </>
      )}

      {/* -------------------SAME */}

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="zip"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="zip"
                label="ZIP"
                variant="outlined"
                // placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.zip)}
helperText={errors.zip?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="city"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="city"
                label="CITY"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.city)}
helperText={errors.city?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="State"
          >
            Select State
          </InputLabel>
          <Controller
            control={control}
            name="State"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <Select
                labelId="State"
                id="State"
                //   multiple
                // label="Select State"
                fullWidth
                input={<OutlinedInput label="State" />}
                {...field}
                error={Boolean(errors?.State)}
helperText={errors.State?.message}
              >
                {AllState.map((State) => (
                  <MenuItem key={State} value={State}>
                    {State}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
      </Grid>
      <hr />

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="House"
          >
            Select Housing Status
          </InputLabel>
          <Controller
            control={control}
            name="SelectHousingStatus"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <Select
                labelId="House"
                id="House"
                fullWidth
                input={<OutlinedInput label="House" />}
                {...field}
                error={Boolean(errors?.SelectHousingStatus)}
helperText={errors.SelectHousingStatus?.message}
              >
                {AllHouse.map((House) => (
                  <MenuItem key={House} value={House}>
                    {House}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="Year"
          >
            Time at Address
          </InputLabel>
          <Controller
            control={control}
            name="Year"
            render={({ field }) => (
              <TextField
                type="number"
                id="year"
                label="Years"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <InputLabel
            style={{
              marginBottom: "10px",
              visibility: "hidden",
              fontWeight: "bolder",
            }}
            id="Month"
          >
            Time at Address
          </InputLabel>
          <Controller
            control={control}
            name="Month"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                type="number"
                id="month"
                label="Months"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.Month)}
helperText={errors.Month?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="Mortgage"
          >
            Mortgage Payment/Rent
          </InputLabel>
          <Controller
            control={control}
            name="Mortgage"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                type="number"
                id="mortgage"
                label="$"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.Mortgage)}
helperText={errors.Mortgage?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <hr />

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="dob"
          >
            Date Of Birth
          </InputLabel>
          <Controller
            control={control}
            name="Dob"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                // type="number"
                id="Dob"
                // label="DOB"
                variant="outlined"
                placeholder="Enter Your DOB"
                halfWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.Dob)}
helperText={errors.Dob?.message}
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="SSN"
          >
            SSN / ITIN
          </InputLabel>
          <Controller
            control={control}
            name="SSN"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                // type="number"
                id="SSN"
                // label="DOB"
                variant="outlined"
                placeholder="***/**/****"
                halfWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.SSN)}
helperText={errors.SSN?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container spcaing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="CoApplicant"
          >
            Relationship to Co-Applicant
          </InputLabel>
          <Controller
            control={control}
            name="CoApplicantRelation"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <Select
                labelId="CoApplicant"
                id="CoApplicant"
                fullWidth
                input={<OutlinedInput label="CoApplicant" />}
                {...field}
                error={Boolean(errors?.CoApplicantRelation)}
helperText={errors.CoApplicantRelation?.message}
              >
                {CoApplicantRelationship.map((Rel) => (
                  <MenuItem key={Rel} value={Rel}>
                    {Rel}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
const Step3 = () => {
  let SURR = true;
  let EAO = false;
  let Self = false;
  let std = false;

  const [HousingStatus, setHousingStatus] = useState("Employed");
  const handleChange = (event) => {
    setHousingStatus(event.target.value);
    console.log("changed", HousingStatus);
  };
  switch (HousingStatus) {
    case "Unemployed":
    case "Retired":
    case "Retired Military":
      SURR = true;
      EAO = false;
      Self = false;
      std = false;
      console.log("SURR", SURR);

      break;
    case "":
    case "Employed":
    case "Active Military":
    case "Other":
      SURR = false;
      EAO = true;
      Self = false;
      std = false;
      console.log("EAO", EAO);
      break;

    case "Self-Employed":
      SURR = false;
      EAO = false;
      Self = true;
      std = false;
      // setSURR(false);
      // setEAO(false);
      // setSelf(true);
      // setstd(false);
      console.log("self", Self);

      break;

    case "Student":
      SURR = false;
      EAO = false;
      Self = false;
      std = true;
      console.log("std", std);

      break;

    default:
      // console.log("Invalid ");

      break;
  }

  const {
    formState: { errors },
    control,
  } = useFormContext();

  const handleClose = (e) => {
    // console.log(e.target.innerText) // => This logs menu item text.
    setHousingStatus(e.target.innerText);
    console.log("changed", HousingStatus);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">
              Select Employee Status
            </InputLabel> */}
            <h6>Select Employee Status</h6>
            {/* select New--------------------------------------------- */}
            <Controller
              control={control}
              name="EmploymentStatus"
              rules={{ required: "Invalid Employment Status" }}
              render={({ field }) => (
                <Select
                  labelId="EmploymentStatus"
                  id="EmploymentStatus"
                  fullWidth
                  input={<OutlinedInput label="EmploymentStatus" />}
                  value={HousingStatus}
                  {...field}
                  error={Boolean(errors?.EmploymentStatus)}
                  helperText={errors.EmploymentStatus?.message}
                >
                  {/* <MenuItem value=""><em>select one value</em></MenuItem> */}
                  <MenuItem onClick={handleClose} value={"Employed"}>
                    Employed
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Unemployed"}>
                    Unemployed
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Self-Employed"}>
                    Self-Employed
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Student"}>
                    Student
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Retired"}>
                    Retired
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Active Military"}>
                    Active Military
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Retired Military"}>
                    Retired Military
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Other"}>
                    Other
                  </MenuItem>
                </Select>
              )}
            />
            {/* Select 1 --------------------------------------------*/}
            {/* <Select

              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={HousingStatus}
              displayEmpty
              onChange={handleChange}
              label="selectEmpStatus"
              variant="outlined"
            >
              <MenuItem value=""><em>select one value</em></MenuItem>
              <MenuItem value={"Employed"}>Employed</MenuItem>
              <MenuItem value={"Unemployed"}>Unemployed</MenuItem>
              <MenuItem value={"Self-Employed"}>Self-Employed</MenuItem>
              <MenuItem value={"Student"}>Student</MenuItem>
              <MenuItem value={"Retired"}>Retired</MenuItem>
              <MenuItem value={"Active Military"}>Active Military</MenuItem>
              <MenuItem value={"Retired Military"}>Retired Military</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select> */}
          </FormControl>
          {/* {console.log(HousingStatus, SURR)} */}
        </Grid>
        {(EAO || std) && (
          <Grid item xs={12} md={2}>
            <InputLabel
              style={{ marginBottom: "10px", fontWeight: "bolder" }}
              id="employer"
            ></InputLabel>
            <Controller
              control={control}
              name="Employer"
              id="empController"
              rules={{ required: "This field is Required." }}
              render={({ field }) => (
                <TextField
                  type="text"
                  id="Employer"
                  // label="Employer"
                  label={std ? "School Name" : "Employer"}
                  variant="outlined"
                  // placeholder="Enter Your Alternate Phone"
                  halfWidth
                  margin="normal"
                  {...field}
                  error={Boolean(errors?.Employer)}
                  helperText={errors.Employer?.message}
                />
              )}
            />
          </Grid>
        )}
      </Grid>
      {/* Work Title--------------------------------------------------- */}
      {(EAO || std) && (
        <div>
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="WorkTitle"
              ></InputLabel>
              <Controller
                control={control}
                name="WorkTitle"
                rules={{ required: "This field is Required." }}
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="WorkTitle"
                    label="Work Title"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                    error={Boolean(errors?.WorkTitle)}
                    helperText={errors.WorkTitle?.message}
                  />
                )}
              />
            </Grid>
          }
          {/* Work Phone--------------------------------------------------- */}
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="WorkPhone"
              ></InputLabel>
              <Controller
                control={control}
                name="WorkPhone"
                rules={{ required: "This field is Required." }}
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="WorkPhone"
                    label={std ? "School Phone" : "Work Phone"}
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                    error={Boolean(errors?.WorkPhone)}
                    helperText={errors.WorkPhone?.message}
                  />
                )}
              />
            </Grid>
          }
          <hr />
          {/* Time At jOb--------------------------------------------------*/}
          {
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="yearss"
                >
                  Time At Job
                </InputLabel>
                <Controller
                  control={control}
                  name="yearss"
                  rules={{ required: "This field is Required." }}
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="yearss"
                      label="Years"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                      error={Boolean(errors?.yearss)}
                      helperText={errors.yearss?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="employer"
                ></InputLabel>
                <Controller
                  control={control}
                  name="monthss"
                  rules={{ required: "This field is Required." }}
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="monthss"
                      label="Months"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                      error={Boolean(errors?.monthss)}
                      helperText={errors.monthss?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
          }
        </div>
      )}

      <hr />
      {Self && (
        <div>
          {/* Work Phone--------------------------------------------------- */}
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="WorkPhone"
              ></InputLabel>
              <Controller
                control={control}
                name="WorkPhone"
                rules={{ required: "This field is Required." }}
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="WorkPhone"
                    label="Work Phone"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                    error={Boolean(errors?.WorkPhone)}
                    helperText={errors.WorkPhone?.message}
                  />
                )}
              />
            </Grid>
          }
          <hr />
          {/* Time At jOb--------------------------------------------------*/}
          {
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="yearss"
                >
                  Time At Job
                </InputLabel>
                <Controller
                  control={control}
                  rules={{ required: "This field is Required." }}
                  name="yearss"
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="yearss"
                      label="Years"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                      error={Boolean(errors?.yearss)}
                      helperText={errors.yearss?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="employer"
                ></InputLabel>
                <Controller
                  control={control}
                  name="monthss"
                  rules={{ required: "This field is Required." }}
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="monthss"
                      label="Months"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                      error={Boolean(errors?.monthss)}
                      helperText={errors.monthss?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
          }
        </div>
      )}
      {/* Source OF income----------------------------------------------- */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="Source of Income"
            value={"Select one"}
          >
            Source of Income
          </InputLabel>
          <Controller
            control={control}
            name="SourceofIncome"
            rules={{ required: "This field is Required." }}
            render={({ field }) => (
              <Select
                labelId="SourceofIncome"
                id="SourceofIncome"
                fullWidth
                input={<OutlinedInput label="EmpStatus" />}
                value={"Select one"}
                {...field}
                error={Boolean(errors?.SourceofIncome)}
                helperText={errors.SourceofIncome?.message}
              >
                {IncomeSrc.map((incSource) => (
                  <MenuItem key={incSource} value={incSource}>
                    {incSource}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="PerYear"
          ></InputLabel>
          <Controller
            control={control}
            name="PerYear"
            render={({ field }) => (
              <TextField
                type="number"
                id="PerYear"
                label="Per Year ($)"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

const Step4 = () => {
  const { control, formState:{errors} } = useFormContext();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="Cofname"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="Cofname"
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.Cofname)}
helperText={errors.Cofname?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="CoMidName"
            render={({ field }) => (
              <TextField
                id="CoMidName"
                label="Middle Name"
                variant="outlined"
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
            name="ColName"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="ColName"
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.ColName)}
helperText={errors.ColName?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4}>
          <InputLabel style={{ paddingBottom: "20px", paddingTop: "10px" }}>
            Select Suffix (Optional)
          </InputLabel>
          <Controller
            control={control}
            name="CoSuffix"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <Select
                labelId="CoSuffix"
                id="CoSuffix"
                //   multiple
                fullWidth
                input={<OutlinedInput label="Suffix" />}
                {...field}
                error={Boolean(errors?.CoSuffix)}
helperText={errors.CoSuffix?.message}
              >
                {AllSuffix.map((Suffix) => (
                  <MenuItem key={Suffix} value={Suffix}>
                    {Suffix}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Typography md={3} style={{ paddingTop: "20px" }} variant="h5">
          primary phone number
        </Typography>
      </Grid>

      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="CohomeNum"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="CohomeNum"
                label="Home"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.CohomeNum)}
helperText={errors.CohomeNum?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="CocellNum"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="CocellNum"
                label="Cell"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.CocellNum)}
helperText={errors.CocellNum?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid>
        <Typography>
          I consent to receive autodialed, pre-recorded and artificial voice
          telemarketing and sales calls and text messages from or on behalf of
          dealer (or any financing source to which dealer assigns my contract)
          at the telephone number(s) provided in this communication, including
          any cell phone numbers. I understand that this consent is not a
          condition of purchase or credit.
        </Typography>
      </Grid>

      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="Coemail"
            rules={{
              required: "This field is required.",
              pattern: {
                value:
                /\S+@\S+\.\S+/,
                message: "please enter a valid e-mail address.",
              },
            }}
            render={({ field }) => (
              <TextField
                id="Coemail"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                
error={Boolean(errors?.fName)}
helperText={errors.fName?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="CoVemail"
            rules={{
              required: "Verify Email is Required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            }}
            render={({ field }) => (
              <TextField
                id="CoVemail"
                label="Verify Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                
error={Boolean(errors?.CoVemail)}
helperText={errors.CoVemail?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
const Step5 = () => {
  const [visible, setVisible] = useState(false);
  // const [checked, setChecked] = useState(false);
  const { control , formState : {errors}} = useFormContext();
  return (
    <>
      {/* <h6>Same address as applicant?</h6>
      <Controller
        control={control}
        name="Applicant Address"
        render={({ field }) => (
          <input
            type="radio"
            name="Corelease"
            checked={status === 1}
            onClick={(e) => radioHandler(1)}
            {...field}
          />
        )}
      />
      No
      <Controller
        control={control}
        name="Corelease"
        render={({ field }) => (
          <input
            type="radio"
            checked={status === 2}
            onClick={(e) => radioHandler(2)}
            {...field}
          />
        )}
      />
      Yes */}
      {/* {status === 1 && ( */}
      <div className="d-flex">
        <p style={{ fontWeight: "bold", fontSize: "19px" }}>Rular Route</p>
        <div style={{ marginLeft: "30px" }}>
          Yes{" "}
          <input
            type="radio"
            className="mx-2"
            name="isyes"
            value="1"
            onClick={() => setVisible(true)}
          />
        </div>
        <div>
          No{" "}
          <input
            type="radio"
            className="mx-2 mt-1"
            name="isyes"
            value="0"
            onClick={() => setVisible(false)}
          />
        </div>
      </div>
      {visible && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="Corr"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                  <TextField
                    id="Corr"
                    label="CoRR"
                    variant="outlined"
                    halfWidth
                    margin="normal"
                    {...field}
                    
error={Boolean(errors?.Corr)}
helperText={errors.Corr?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="Cobox"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                  <TextField
                    id="Cobox"
                    label="CoBOX"
                    variant="outlined"
                    halfWidth
                    margin="normal"
                    {...field}
                    
error={Boolean(errors?.Cobox)}
helperText={errors.Cobox?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <span
                style={{
                  display: "inline-block",
                  margin: "24px",
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                BOX(Example: RR 2 BOX 152)
              </span>
            </Grid>
          </Grid>
        </>
      )}
      {!visible && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="Costreet"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                  <TextField
                    id="Costreet #"
                    label="Street #"
                    variant="outlined"
                    // placeholder="Enter Your Phone Number"
                    halfWidth
                    margin="normal"
                    {...field}
                    
error={Boolean(errors?.Costreet)}
helperText={errors.Costreet?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="CoStreetName"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                  <TextField
                    id="CoStreetName"
                    label="Street Name"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                    
error={Boolean(errors?.CoStreetName)}
helperText={errors.CoStreetName?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="CoStreetOptional"
              >
                Select Street (Optional)
              </InputLabel>
              <Controller
                control={control}
                name="CoStreetOptional"
                render={({ field }) => (
                  <Select
                    labelId="Select Street"
                    id="CoStreetOptional"
                    //   multiple
                    // label="Select State"
                    fullWidth
                    input={<OutlinedInput label="Street" />}
                    {...field}
                  >
                    {AllStreet.map((Street) => (
                      <MenuItem key={Street} value={Street}>
                        {Street}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="Coapt"
                render={({ field }) => (
                  <TextField
                    id="Coapt #"
                    label="Apt #"
                    variant="outlined"
                    // placeholder="Enter Your Phone Number"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
        </>
      )}

      {/* -------------------SAME */}

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="Cozip"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="Cozip"
                label="ZIP"
                variant="outlined"
                // placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
                
error={Boolean(errors?.Cozip)}
helperText={errors.Cozip?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="Cocity"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                id="Cocity"
                label="CITY"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                fullWidth
                margin="normal"
                {...field}
                
error={Boolean(errors?.Cocity)}
helperText={errors.Cocity?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="CoState"
          >
            Select State
          </InputLabel>
          <Controller
            control={control}
            name="CoState"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <Select
                labelId="CoState"
                id="CoState"
                //   multiple
                // label="Select State"
                fullWidth
                input={<OutlinedInput label="State" />}
                {...field}
                
error={Boolean(errors?.CoState)}
helperText={errors.CoState?.message}
              >
                {AllState.map((State) => (
                  <MenuItem key={State} value={State}>
                    {State}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
      </Grid>
      <hr />
      {/* <h6>Same Mortgage/Rent information as applicant?</h6>
      <input
        type="radio"
        name="Corelease2"
        checked={status2 === 3}
        onClick={(e) => radioHandler2(3)}
      />
      No
      <input
        type="radio"
        name="Corelease2"
        checked={status2 === 4}
        onClick={(e) => radioHandler2(4)}
      />
      Yes */}
      {/* {status2 === 3 && ( */}
      <>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <InputLabel
              style={{ marginBottom: "10px", fontWeight: "bolder" }}
              id="CoSelectHousingStatus"
            >
              Select Housing Status
            </InputLabel>
            <Controller
              control={control}
              name="CoSelectHousingStatus"
              rules={{ required: "This field is required." }}
              render={({ field }) => (
                <Select
                  labelId="House"
                  id="CoSelectHousingStatus"
                  fullWidth
                  input={<OutlinedInput label="CoSelectHousingStatus" />}
                  {...field}
                  
error={Boolean(errors?.CoSelectHousingStatus)}
helperText={errors.CoSelectHousingStatus?.message}
                >
                  {AllHouse.map((House) => (
                    <MenuItem key={House} value={House}>
                      {House}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <InputLabel
              style={{ marginBottom: "10px", fontWeight: "bolder" }}
              id="CoYear"
            >
              Time at Address
            </InputLabel>
            <Controller
              control={control}
              name="CoYear"
              rules={{ required: "This field is required." }}
              render={({ field }) => (
                <TextField
                  type="number"
                  id="CoYear"
                  label="Years"
                  variant="outlined"
                  // placeholder="Enter Your Alternate Phone"
                  halfWidth
                  margin="normal"
                  {...field}
                  
error={Boolean(errors?.CoYear)}
helperText={errors.CoYear?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <InputLabel
              style={{
                marginBottom: "10px",
                visibility: "hidden",
                fontWeight: "bolder",
              }}
              id="Month"
            >
              Time at Address
            </InputLabel>
            <Controller
              control={control}
              name="CoMonth"
              rules={{ required: "This field is required." }}
              render={({ field }) => (
                <TextField
                  type="number"
                  id="CoMonth"
                  label="Months"
                  variant="outlined"
                  // placeholder="Enter Your Alternate Phone"
                  halfWidth
                  margin="normal"
                  {...field}
                  
error={Boolean(errors?.CoMonth)}
helperText={errors.CoMonth?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputLabel
              style={{ marginBottom: "10px", fontWeight: "bolder" }}
              id="CoMortgage"
            >
              Mortgage Payment/Rent
            </InputLabel>
            <Controller
              control={control}
              name="CoMortgage"
              rules={{ required: "This field is required." }}
              render={({ field }) => (
                <TextField
                  type="number"
                  id="CoMortgage"
                  label="$"
                  variant="outlined"
                  // placeholder="Enter Your Alternate Phone"
                  halfWidth
                  margin="normal"
                  {...field}
                  
error={Boolean(errors?.CoMortgage)}
helperText={errors.CoMortgage?.message}
                />
              )}
            />
          </Grid>
        </Grid>
      </>
      {/* )} */}
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="Codob"
          >
            Date Of Birth
          </InputLabel>
          <Controller
            control={control}
            name="Codob"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                // type="number"
                id="Codob"
                // label="DOB"
                variant="outlined"
                placeholder="Enter Your DOB"
                halfWidth
                margin="normal"
                {...field}
                
error={Boolean(errors?.Codob)}
helperText={errors.Codob?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="CoSSN"
          >
            SSN / ITIN
          </InputLabel>
          <Controller
            control={control}
            name="CoSSN"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <TextField
                // type="number"
                id="CoSSN"
                // label="DOB"
                variant="outlined"
                placeholder="***/**/****"
                halfWidth
                margin="normal"
                {...field}
                
error={Boolean(errors?.CoSSN)}
helperText={errors.CoSSN?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
const Step6 = () => {
  let SURR = true;
  let EAO = false;
  let Self = false;
  let std = false;

  const [HousingStatus, setHousingStatus] = useState("Employed");
  const handleChange = (event) => {
    setHousingStatus(event.target.value);
    console.log("changed", HousingStatus);
  };
  switch (HousingStatus) {
    case "Unemployed":
    case "Retired":
    case "Retired Military":
      SURR = true;
      EAO = false;
      Self = false;
      std = false;
      console.log("SURR", SURR);

      break;
    case "":
    case "Employed":
    case "Active Military":
    case "Other":
      SURR = false;
      EAO = true;
      Self = false;
      std = false;
      console.log("EAO", EAO);
      break;

    case "Self-Employed":
      SURR = false;
      EAO = false;
      Self = true;
      std = false;
      // setSURR(false);
      // setEAO(false);
      // setSelf(true);
      // setstd(false);
      console.log("self", Self);

      break;

    case "Student":
      SURR = false;
      EAO = false;
      Self = false;
      std = true;
      console.log("std", std);

      break;

    default:
      // console.log("Invalid ");

      break;
  }

  const {
    formState: { errors },
    control,
  } = useFormContext();

  const handleClose = (e) => {
    // console.log(e.target.innerText) // => This logs menu item text.
    setHousingStatus(e.target.innerText);
    console.log("changed", HousingStatus);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">
              Select Employee Status
            </InputLabel> */}
            <h6>Select Employee Status</h6>
            {/* select New--------------------------------------------- */}
            <Controller
              control={control}
              name="CoEmploymentStatus"
              rules={{ required: "Invalid Employment Status" }}
              render={({ field }) => (
                <Select
                  labelId="EmploymentStatus"
                  id="CoEmploymentStatus"
                  fullWidth
                  input={<OutlinedInput label="EmploymentStatus" />}
                  value={HousingStatus}
                  {...field}
                  error={Boolean(errors?.CoEmploymentStatus)}
                  helperText={errors.CoEmploymentStatus?.message}
                >
                  {/* <MenuItem value=""><em>select one value</em></MenuItem> */}
                  <MenuItem onClick={handleClose} value={"Employed"}>
                    Employed
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Unemployed"}>
                    Unemployed
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Self-Employed"}>
                    Self-Employed
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Student"}>
                    Student
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Retired"}>
                    Retired
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Active Military"}>
                    Active Military
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Retired Military"}>
                    Retired Military
                  </MenuItem>
                  <MenuItem onClick={handleClose} value={"Other"}>
                    Other
                  </MenuItem>
                </Select>
              )}
            />
            {/* Select 1 --------------------------------------------*/}
            {/* <Select

              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={HousingStatus}
              displayEmpty
              onChange={handleChange}
              label="selectEmpStatus"
              variant="outlined"
            >
              <MenuItem value=""><em>select one value</em></MenuItem>
              <MenuItem value={"Employed"}>Employed</MenuItem>
              <MenuItem value={"Unemployed"}>Unemployed</MenuItem>
              <MenuItem value={"Self-Employed"}>Self-Employed</MenuItem>
              <MenuItem value={"Student"}>Student</MenuItem>
              <MenuItem value={"Retired"}>Retired</MenuItem>
              <MenuItem value={"Active Military"}>Active Military</MenuItem>
              <MenuItem value={"Retired Military"}>Retired Military</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select> */}
          </FormControl>
          {/* {console.log(HousingStatus, SURR)} */}
        </Grid>
        {(EAO || std) && (
          <Grid item xs={12} md={2}>
            <InputLabel
              style={{ marginBottom: "10px", fontWeight: "bolder" }}
              id="Coemployer"
            ></InputLabel>
            <Controller
              control={control}
              name="coEmployer"
              id="empController"
              rules={{ required: "This field is Required." }}
              render={({ field }) => (
                <TextField
                  type="text"
                  id="Employer"
                  // label="Employer"
                  label={std ? "School Name" : "Employer"}
                  variant="outlined"
                  // placeholder="Enter Your Alternate Phone"
                  halfWidth
                  margin="normal"
                  {...field}
                  error={Boolean(errors?.Employer)}
                  helperText={errors.Employer?.message}
                />
              )}
            />
          </Grid>
        )}
      </Grid>
      {/* Work Title--------------------------------------------------- */}
      {(EAO || std) && (
        <div>
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="WorkTitle"
              ></InputLabel>
              <Controller
                control={control}
                name="coWorkTitle"
                rules={{ required: "This field is Required." }}
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="WorkTitle"
                    label="Work Title"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                    error={Boolean(errors?.WorkTitle)}
                    helperText={errors.WorkTitle?.message}
                  />
                )}
              />
            </Grid>
          }
          {/* Work Phone--------------------------------------------------- */}
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="WorkPhone"
              ></InputLabel>
              <Controller
                control={control}
                name="coWorkPhone"
                rules={{ required: "This field is Required." }}
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="WorkPhone"
                    label={std ? "School Phone" : "Work Phone"}
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                    error={Boolean(errors?.WorkPhone)}
                    helperText={errors.WorkPhone?.message}
                  />
                )}
              />
            </Grid>
          }
          <hr />
          {/* Time At jOb--------------------------------------------------*/}
          {
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="yearss"
                >
                  Time At Job
                </InputLabel>
                <Controller
                  control={control}
                  name="coyearss"
                  rules={{ required: "This field is Required." }}
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="yearss"
                      label="Years"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                      error={Boolean(errors?.yearss)}
                      helperText={errors.yearss?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="employer"
                ></InputLabel>
                <Controller
                  control={control}
                  name="comonthss"
                  rules={{ required: "This field is Required." }}
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="monthss"
                      label="Months"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                      error={Boolean(errors?.monthss)}
                      helperText={errors.monthss?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
          }
        </div>
      )}

      <hr />
      {Self && (
        <div>
          {/* Work Phone--------------------------------------------------- */}
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="WorkPhone"
              ></InputLabel>
              <Controller
                control={control}
                name="coWorkPhone"
                rules={{ required: "This field is Required." }}
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="WorkPhone"
                    label="Work Phone"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                    error={Boolean(errors?.WorkPhone)}
                    helperText={errors.WorkPhone?.message}
                  />
                )}
              />
            </Grid>
          }
          <hr />
          {/* Time At jOb--------------------------------------------------*/}
          {
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="yearss"
                >
                  Time At Job
                </InputLabel>
                <Controller
                  control={control}
                  rules={{ required: "This field is Required." }}
                  name="yearss"
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="yearss"
                      label="Years"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                      error={Boolean(errors?.yearss)}
                      helperText={errors.yearss?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="employer"
                ></InputLabel>
                <Controller
                  control={control}
                  name="monthss"
                  rules={{ required: "This field is Required." }}
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="monthss"
                      label="Months"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                      error={Boolean(errors?.monthss)}
                      helperText={errors.monthss?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
          }
        </div>
      )}
      {/* Source OF income----------------------------------------------- */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="Source of income"
            value={"Select one"}
          >
            Source of Income
          </InputLabel>
          <Controller
            control={control}
            name="coSourceOfIncome"
            rules={{ required: "This field is Required." }}
            render={({ field }) => (
              <Select
                labelId="coSourceOfIncome"
                id="coSourceOfIncome"
                fullWidth
                input={<OutlinedInput label="EmpStatus" />}
                name="coSourceOfIncome"
                value={"Select one"}
                {...field}
                error={Boolean(errors?.coSourceOfIncome)}
                helperText={errors.coSourceOfIncome?.message}
              >
                {IncomeSrc.map((incSource) => (
                  <MenuItem key={incSource} value={incSource}>
                    {incSource}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="PerYear"
          ></InputLabel>
          <Controller
            control={control}
            name="PerYear"
            render={({ field }) => (
              <TextField
                type="number"
                id="PerYear"
                label="Per Year ($)"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    case 3:
      return <Step4 />;
    case 4:
      return <Step5 />;
    case 5:
      return <Step6 />;
    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      fname: "",
      midName: "",
      lName: "",
      Suffix: "",
      homeNum: "",
      cellNum: "",
      email: "",
      Vemail: "",
      rr: "",
      box: "",
      streetnum: "",
      StreetName: "",
      StreetOptional: "",
      apt: "",
      zip: "",
      city: "",
      State: "",

      Year: "",
      Month: "",
      Mortgage: "",
      Dob: "",
      SSN: "",
      CoApplicantRelation: "",
      SelectHousingStatus: "",
      EmploymentStatus: "",
      WorkTitle: "",
      WorkPhone: "",
      yearss: "",
      monthss: "",
      SelfWorkPhone: "",
      Selfyear: "",
      Selfmonths: "",
      EmpStatus: "",
      PerYear: "",
      // // <..................CO-applicant info.............................>
      Cofname: "",
      CoMidName: "",
      ColName: "",
      CoSuffix: "",
      CocellNum: "",
      CohomeNum: "",
      Coemail: "",
      CoVemail: "",

      // // <...........step2.........>
      Corelease: "",
      Corr: "",
      Cobox: "",
      Costreet: "",
      CoStreetName: "",
      CoStreetOptional: "",
      Coapt: "",
      Cozip: "",
      Cocity: "",
      CoState: "",
      Corelease2: "",

      CoYear: "",
      CoMonth: "",
      CoMortgage: "",
      Codob: "",
      CoSSN: "",
      SourceofIncome: "",

      CoSelectHousingStatus: "",
      coSourceOfIncome: "",
      CoEmploymentStatus: "",
      CoEmployer: "",
      CoWorkTitle: "",
      CoWorkPhone: "",
      Coyearss: "",
      Comonthss: "",
      CoSelfWorkPhone: "",
      CoSelfyear: "",
      CoSelfemployer: "",
      CoSelfmonths: "",
      CoEmpStatus: "",
      CoPerYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = (data) => {
    console.log("DATA ===========> ", data);
    if (activeStep == steps.length - 1) {
      axios({
        method: "post",
        url: "https://janimotors-api.onrender.com/api/joint/send",
        data: data,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      }).then((res) => {
        // console.log(res);
        // alert("successfull");
        setActiveStep(activeStep + 1);
      });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <>
      <MetaData title={`Online Credit Approval---JANI MOTORS`} />
      <Layout>
        <div style={{ backgroundColor: "white" }}>
          <div className="btn11 p-5" style={{ backgroundColor: "white" }}>
            <Typography variant="h5" style={{ marginBottom: "10px" }}>
              Application Type
            </Typography>
            <Link
              to="/creditApproval"
              style={{ textDecoration: "none", marginRight: "10px" }}
            >
              <Button variant="contained" color="primary">
                Individual
              </Button>
            </Link>
            <Link to="/joint" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Joint
              </Button>
            </Link>
            <Typography style={{ marginTop: "10px" }}>
              Please be aware that by selecting "Joint" the applicant and the
              co-applicant agree they intend to apply for joint credit. The
              co-applicant must be present and must indicate his or her
              acceptance of the Terms and Conditions at the end of this
              application before it is submitted.
            </Typography>
          </div>
          <Stepper
            style={{ overflowX: "scroll" }}
            alternativeLabel
            activeStep={activeStep}
          >
            {steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <Typography
              variant="h3"
              align="center"
              style={{ backgroundColor: "white", color: "black" }}
            >
              Thank You For Submitting
            </Typography>
          ) : (
            <>
              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(handleNext)}
                  style={{ padding: "2px 39px" }}
                >
                  {getStepContent(activeStep)}

                  <div style={{ textAlign: "center", padding: "10px 0px" }}>
                    <Button
                      className={classes.button}
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      back
                    </Button>

                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      // onClick={handleNext}
                      type="submit"
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </form>
              </FormProvider>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default LinearStepper;
