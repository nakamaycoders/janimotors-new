import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import {ImLocation} from 'react-icons/im';

const date = new Date();

function Footer() {
  return (
    <div className="footerBody">
      <div className="location">
        <ImLocation /> SELECT YOUR LOCATION
      </div>
      <hr/>
      <div className="top">
        <Container>
          <Row>
            <Col>
              Jani Motors, 512 Saint Charles Road Carol Stream , IL 60188
              
            </Col>
            
          </Row>
        </Container>
      </div>
      <hr></hr>
      <div className="bottom">
      ©{date.getFullYear()} Jani Motors | Privacy Policy | Terms {'&'} Conditions |
        Contact Us 
      
      </div>
    </div>
  );
}

export default Footer;
