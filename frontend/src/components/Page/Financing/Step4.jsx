import React from 'react'
import Form from 'react-bootstrap/Form'
import "./Creditapproval.css";

function Step4(props) {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label className="step4">Name: </Form.Label>
          <Form.Control type="text" value={props.yourFirstName} disabled/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label >Password</Form.Label>
          <Form.Control type="text"  value="123" disabled/>
        </Form.Group>

      </Form>
    </div>
  )
}

export default Step4