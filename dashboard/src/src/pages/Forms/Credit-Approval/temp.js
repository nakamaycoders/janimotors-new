import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Axios from "axios";
// import './contactDetails.css'

export default function CustomizedTables(props) {
  let [responseData, setResponseData] = useState("");
  const url = "https://janimotors-api.onrender.com/api/joint/information";
  
  const getContactInfoById = async () => {
    const id = props.location.params.id;
    try {
      const res = await Axios.get(`${url}/${id}`);
      setResponseData(res.data.result);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  useEffect(() => {
    getContactInfoById();
  },[]);
  // if(Object.keys(responseData).length === 0){
  //     return localStorage.getItem(id)
  // }

  return (
    <>
    <main className="content">
      <table className="table-resptable-dark">
        <thead>
          <tr>
            <th>Applicant Fields</th>
            <th>Data</th>
            <th>Co-Applicant Fields</th>
            <th>Data</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{responseData.fname}</td>
            
          </tr>
          <tr>
            <td>Middle Name</td>
            <td>{responseData.midName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{responseData.lName}</td>
          </tr>
          <tr>
            <td>Suffix</td>
            <td>{responseData.Suffix}</td>
          </tr>
          <tr>
            <td>Home Number</td>
            <td>{responseData.homeNum}</td>
          </tr>
          <tr>
            <td>Cell No</td>
            <td>{responseData.cellNum}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{responseData.email}</td>
          </tr>
          <tr>
            <td>Rural Route</td>
            <td>{responseData.rr}</td>
          </tr>
          <tr>
            <td>Box</td>
            <td>{responseData.box}</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>{responseData.street}</td>
          </tr>
          <tr>
            <td>Street Name</td>
            <td>{responseData.StreetName}</td>
          </tr>
          <tr>
            <td>Street Type</td>
            <td>{responseData.StreetOptional}</td>
          </tr>
          <tr>
            <td>APT</td>
            <td>{responseData.apt}</td>
          </tr>
          <tr>
            <td>ZIP</td>
            <td>{responseData.zip}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{responseData.city}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{responseData.State}</td>
          </tr>
          <tr>
            <td>House</td>
            <td>{responseData.House}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{responseData.Year}</td>
          </tr>
          <tr>
            <td>Month</td>
            <td>{responseData.Month}</td>
          </tr>
          <tr>
            <td>Mortgage</td>
            <td>{responseData.Mortgage}</td>
          </tr>
          <tr>
            <td>Dob</td>
            <td>{responseData.Dob}</td>
          </tr>
          <tr>
            <td>SSN</td>
            <td>{responseData.SSN}</td>
          </tr>
          <tr>
            <td>Co-Applicant Relation</td>
            <td>{responseData.CoApplicantRelation}</td>
          </tr>
          <tr>
            <td>SelectHousingStatus</td>
            <td>{responseData.SelectHousingStatus}</td>
          </tr>
          <tr>
            <td>Employer</td>
            <td>{responseData.Employer}</td>
          </tr>
          <tr>
            <td>WorkTitle</td>
            <td>{responseData.WorkTitle}</td>
          </tr>
          <tr>
            <td>WorkPhone</td>
            <td>{responseData.WorkPhone}</td>
          </tr>
          <tr>
            <td>Years</td>
            <td>{responseData.yearss}</td>
          </tr>
          <tr>
            <td>Months</td>
            <td>{responseData.monthss}</td>
          </tr>
          <tr>
            <td>Self WorkPhone</td>
            <td>{responseData.SelfWorkPhone}</td>
          </tr>
          <tr>
            <td>Self Year</td>
            <td>{responseData.Selfyear}</td>
          </tr>
          <tr>
            <td>Self Months</td>
            <td>{responseData.Selfmonths}</td>
          </tr>
          <tr>
            <td>Emp Status</td>
            <td>{responseData.EmpStatus}</td>
          </tr>
          <tr>
            <td>Per Year</td>
            <td>{responseData.PerYear}</td>
          </tr>
         
            
          
        </tbody>
      </table>
      <Link to="">
        <Button variant="outlined my-3"> &larr; Go Back</Button>
      </Link>
      </main>
    </>
  );
}
