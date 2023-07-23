import React from "react";
import "../Aboutus/Aboutus.css";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner.png";

function AboutUs() {
  return (
   
    <div className="container-fluid pt-4   ">
      <div className="row">
        
        <div className="col-md-4 ">
        <Link to='/'>
          <img className="img-fluid" src={banner} alt="JANI MOTORS CARS" />
        </Link>
        </div>
        <div className="col-md-8 pt-4 " style={{ color: "white" }}>
          <p>
           
            We proudly serve our customers. We offer a large selection of pre-owned vehicles at affordable prices
            for everyone. We are committed to providing our customers with the
            best service, to get you a step closer to your vehicle that
            satisfies your needs. Our dealership is always ready to assist you
            in the car buying process!
          </p>

          <button type="button" className="btn btn-pri">
            <Link style={{textDecoration:"none"}} to="/contactus">
            Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
