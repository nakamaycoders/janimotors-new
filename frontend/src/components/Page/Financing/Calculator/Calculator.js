import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../../../layout/layout/layout";
// import MetaData from "../../../layout/MetaData";
import { Helmet } from "react-helmet-async";

function Calculator() {
  const interest = 4;

  const clearFields = () => {
    // console.log("fields Cleared");
    setState({ val: "" });
    setDPval({ val: "" });
    setResult({ val: "" });
    setVPstyle({});
    setDPstyle({});
    setMonthsStateVal({ val: "" });
  };
  const CalculateResult = () => {
    if (isNaN(state.val) || isNaN(DPval.val) || isNaN(monthsStateVal.val)) {
      //will check if the entered value is a number or not
      // alert("enter a number");
      // setVPstyle({ border: "2px solid red" });
      setResult({ val: "Check the entered Values and Try again! " });
    } else {
      let calculatedInterest = parseFloat(interest) / 100 / monthsStateVal.val;
      const x = Math.pow(1 + calculatedInterest, monthsStateVal.val);
      const monthly =
        ((parseFloat(state.val) - parseFloat(DPval.val)) *
          x *
          calculatedInterest) /
        (x - 1);
      const finalizedPayment = monthly.toFixed(2);
      // console.log(finalizedPayment);
      if (
        finalizedPayment < 0 ||
        finalizedPayment === "Infinity" ||
        finalizedPayment === "NaN"
      ) {
        setResult({ val: "Check the entered Values and Try again! " });
      } else {
        setResult({ val: finalizedPayment });
      }
    }

    //Error Checking
    if (isNaN(state.val)) {
      setVPstyle({ border: "2px solid red" });
    } else if (isNaN(DPval.val)) {
      setDPstyle({ border: "2px solid red" });
    } else if (isNaN(monthsStateVal.val)) {
      setMonthsStyle({ border: "2px solid red" });
    } else {
      setVPstyle({});
      setDPstyle({});
      setMonthsStyle({});
    }
  };
  const [state, setState] = useState({ val: "" });
  const [DPval, setDPval] = useState({ val: "" });
  const [monthsStateVal, setMonthsStateVal] = useState({ val: "" });
  const [result, setResult] = useState({ val: "" });
  const [VPstyle, setVPstyle] = useState({});
  const [DPstyle, setDPstyle] = useState({});
  const [MonthsStyle, setMonthsStyle] = useState({});

  return (<>
  <Helmet>
        <title>Calculator || JANI MOTORS</title>
        <meta name="description" content=" Do you need assistance finding out how to pay for your next car? Allow
          Jani Motor Cars' finance team to assist you. We work with some of the
          most reputable lenders in the industry, so we can get you the
          financing you need at the prices and conditions you deserve. You can
          use the form below to help you plan ahead. It will calculate a monthly
          loan payment estimate for you based on a number of parameters. Simply
          fill out the form with all of your pertinent data and best
          predictions, push calculate, and the form will take care of the rest.
          This is one another tool provided by Jani Motor Cars to make things
          simpler." />
        <link rel="canonical" href="/calculator" />
      </Helmet>
    <Layout>
    <Container>
      <Row>
        <h1
          style={{ color: "red", textAlign: "center", margin: "7px 0 7px 0" }}
        >
          CALCULATOR
        </h1>
      </Row>
      <Row>
        <h3
          style={{ color: "red", textAlign: "left", margin: "7px 0 7px 0" }}
        >
          What Will My Payments Be?
        </h3>
      </Row>
      <Row>
        <p style={{ color: "white", textAlign: "left", margin: "7px 0 7px 0" }}>
          Do you need assistance finding out how to pay for your next car? Allow
          Jani Motor Cars' finance team to assist you. We work with some of the
          most reputable lenders in the industry, so we can get you the
          financing you need at the prices and conditions you deserve. You can
          use the form below to help you plan ahead. It will calculate a monthly
          loan payment estimate for you based on a number of parameters. Simply
          fill out the form with all of your pertinent data and best
          predictions, push calculate, and the form will take care of the rest.
          This is one another tool provided by Jani Motor Cars to make things
          simpler.
        </p>
      </Row>
      <Row>
        <h4
          style={{ color: "red", textAlign: "left", margin: "7px 0 7px 0" }}
        >
          <b>Finance Calculator:</b>
        </h4>
      </Row>
      <Row style={{ margin: "15px 0 15px 0" }}>
        <Col>
          <Form.Label style={{ color: "white" }}>Vehicle Price</Form.Label>
          <Form.Control
            value={state.val}
            onChange={(e) => setState({ val: e.target.value })}
            className="classForCleanUp"
            id="vehiclePrice"
            type="text"
            placeholder="Vehicle Price"
            style={VPstyle}
          />
        </Col>
        <Col>
          <Form.Label style={{ color: "white" }}>Down Payment</Form.Label>
          <Form.Control
            value={DPval.val}
            onChange={(e) => setDPval({ val: e.target.value })}
            className="classForCleanUp"
            id="downPay"
            type="text"
            placeholder="Down Payment"
            style={DPstyle}
          />
        </Col>
      </Row>
      <Row style={{ margin: "15px 0 15px 0" }}>
        <Col>
          <Form.Label style={{ color: "white" }}>Amount of Loan</Form.Label>
          <Form.Control
            className="classForCleanUp"
            value={state.val - DPval.val}
            id="AofLoan"
            type="text"
            placeholder="Amount of Loan"
            disabled
          />
            {console.log(state.val - DPval.val)
}
        </Col>

        <Col>
          <Form.Label style={{ color: "white" }}>
            Interest Rate <b>(ARP)</b>
          </Form.Label>
          <Form.Control
            className="classForCleanUp"
            id="interest"
            defaultValue={3.9}
            type="text"
            placeholder="Interest"
            disabled
          />
        </Col>
      </Row>
      <Row style={{ margin: "15px 0 15px 0" }}>
        <Col>
          <Form.Label style={{ color: "white" }}>
            Loan Term <b>(months)</b>
          </Form.Label>
          <Form.Control
            value={monthsStateVal.val}
            onChange={(e) => setMonthsStateVal({ val: e.target.value })}
            className="classForCleanUp"
            id="loanTerm"
            type="text"
            placeholder="Months to Repay"
            style={MonthsStyle}
          />
        </Col>
        <Col>
          <Form.Label style={{ color: "white" }}>Estimated payment </Form.Label>
          <Form.Control
            className="classForCleanUp"
            id="CalculatedResult"
            type="text"
            placeholder="Estimated Payment"
            value={result.val}
            disabled
          />
        </Col>
      </Row>
      <div style={{ textAlign: "center"}}>
        <Button style={{ marginRight:"10px"}} variant="primary" size="lg" active onClick={CalculateResult}>
          Calculate
        </Button>{" "}
        <Button
          // style={{ margin: "7px 0 7px 15px" }}
          variant="warning"
          size="lg"
          color="primary"
          active
          onClick={clearFields}
        >
          Clear
        </Button>
      </div>
    </Container>
    </Layout>
  </>
  );
}

export default Calculator;
