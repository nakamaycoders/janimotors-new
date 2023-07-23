import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Container, Row, Col } from "react-bootstrap";
import "./Creditapproval.css";
import { FaCar, FaListAlt } from "react-icons/fa";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useForm } from "react-hook-form";
import Layout from "../../layout/layout/layout";

const steps = [
  "Applicant Contact Info",
  "Applicant Housing",
  "Applicant Employment",
  "Review",
];

export default function Creditapproval() {
 
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
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [StateStep1, setStateStep1] = useState(true);
  const [StateStep2, setStateStep2] = useState(false);
  const [StateStep3, setStateStep3] = useState(false);
  // const [StateStep4, setStateStep4] = useState(false);
  const [Joint, setJoint] = useState(false);


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    console.log(activeStep);
    switch (activeStep) {
      case 0:
        console.log("step 2");
        setStateStep1(false);
        setStateStep2(true);
        setStateStep3(false);
        // setStateStep4(false);

        break;

      case 1:
        console.log("step 3");
        setStateStep1(false);
        setStateStep2(false);
        setStateStep3(true);
        // setStateStep4(false);

        break;

      case 2:
        console.log("step 3");
        setStateStep1(false);
        setStateStep2(false);
        setStateStep3(false);
        // setStateStep4(true);
        break;

      default:
        break;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    handleSubmit(onSubmit);
  };

  const handleRadioChangeJoint = () =>{
    console.log("3 more steps added");
    setJoint(true);
  }

  const handleRadioChangeIndividual = () =>{
    console.log("3 steps deducted");
    setJoint(false);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
    setStateStep1(true);
  };
  return (
    <div>
      <Layout>
        <Container>
          <Row className="creditForm">
            <h1>FINANCING</h1>
          </Row>
          <Row className="creditForm">
            <Col md={{ span: 3, offset: 1 }}>
              <h3>
                <FaCar /> JANI MOTORS
              </h3>
            </Col>
          </Row>
          <Row className="applyHeading">
            <Col style={{ textAlign: "center" }}>
              <h5>
                <FaListAlt /> Apply for Financing!
              </h5>
            </Col>
          </Row>
          <Row className="creditForm">
            <Col>
              <div
                class="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autocomplete="off"
                  
                  onChange={handleRadioChangeIndividual}

                />
                <label class="btn btn-primary" for="btnradio1" >
                Individual
                </label>

                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autocomplete="off"
                  onChange={handleRadioChangeJoint}
                />

                <label class="btn btn-primary" for="btnradio2">
                Joint
                </label>
              </div>
            </Col>
          </Row>

          <Row>
            <Box sx={{ width: "100%" }} className="creditForm">
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepOptional(index)) {
                    labelProps.optional = (
                      <Typography variant="caption"></Typography>
                    );
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {/* ----------------------------------------------------------------------------------------- */}
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    Step {activeStep + 1}
                    {StateStep1 && <Step1 />}
                    {StateStep2 && <Step2 />}
                    {StateStep3 && <Step3 />}
                    {/* {StateStep4 && <Step4 />} */}

                    {StateStep1 && Joint && <Step1 secondPerson="2nd " />}
                    {StateStep2 && Joint && <Step2 secondPerson="2nd " />}
                    {StateStep3 && Joint && <Step3 secondPerson="2nd " />}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    {/* {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )} */}

                    <Button type="submit" form="form1"
                    onClick={handleNext}>
                      
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
