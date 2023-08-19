import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Axios from "axios";
import './ICFD.css'
import {api} from "../../../UrlConfig"
import MetaData from "../../../components/layouts/MetaData";

export default function CustomizedTables(props) {
  let [responseData, setResponseData] = useState("");
  const URL = "https://janimotors-api.onrender.com/api/credit/information";
// const url = `${api}/credit/information`;
  
  const getContactInfoById = async () => {
    const id = props.location.params.id;
    try {
      const res = await Axios.get(`${URL}/${id}`);
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
      <MetaData title={`View Credit Details - Admin Dashboard`} />
    <main className="content">
      <table className="table-resptable-dark">
        <thead>
          <tr>
            <th>Applicant Fields</th>
            <th>Data</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td className="boldIt">First Name</td> */}
             <td className="boldIt">First Name</td>
             <td >{responseData.fName}</td>
            
          </tr>
          <tr>
             <td className="boldIt">Middle Name</td>
             <td >{responseData.mName}</td>
          </tr>
          <tr>
             <td className="boldIt">Last Name</td>
             <td >{responseData.lName}</td>
          </tr>
          <tr>
             <td className="boldIt">Suffix</td>
             <td >{responseData.Suffix}</td>
          </tr>
          <tr>
             <td className="boldIt">Home Number</td>
             <td >{responseData.homeNum}</td>
          </tr>
          <tr>
             <td className="boldIt">Cell No</td>
             <td >{responseData.cellNum}</td>
          </tr>
          <tr>
             <td className="boldIt">Email</td>
             <td >{responseData.email}</td>
          </tr>
          <tr>
             <td className="boldIt">Rural Route</td>
             <td >{responseData.rr}</td>
          </tr>
          <tr>
             <td className="boldIt">Box</td>
             <td >{responseData.box}</td>
          </tr>
          <tr>
             <td className="boldIt">Street</td>
             <td >{responseData.street}</td>
          </tr>
          <tr>
             <td className="boldIt">Street Name</td>
             <td >{responseData.StreetName}</td>
          </tr>
          <tr>
             <td className="boldIt">Street Type</td>
             <td >{responseData.StreetOptional}</td>
          </tr>
          <tr>
             <td className="boldIt">APT</td>
             <td >{responseData.apt}</td>
          </tr>
          <tr>
             <td className="boldIt">ZIP</td>
             <td >{responseData.zip}</td>
          </tr>
          <tr>
             <td className="boldIt">City</td>
             <td >{responseData.city}</td>
          </tr>
          <tr>
             <td className="boldIt">State</td>
             <td >{responseData.State}</td>
          </tr>
          <tr>
             <td className="boldIt">House status</td>
             <td >{responseData.House}</td>
          </tr>
          <tr>
             <td className="boldIt">Year</td>
             <td >{responseData.Year}</td>
          </tr>
          <tr>
             <td className="boldIt">Month</td>
             <td >{responseData.Month}</td>
          </tr>
          <tr>
             <td className="boldIt">Mortgage</td>
             <td >{responseData.Mortgage}</td>
          </tr>
          <tr>
             <td className="boldIt">Dob</td>
             <td >{responseData.Dob}</td>
          </tr>
          <tr>
             <td className="boldIt">SSN</td>
             <td >{responseData.SSN}</td>
          </tr>
       
          <tr>
             <td className="boldIt">Employer Status</td>
             <td >{responseData.EmploymentStatus}</td>
          </tr>
          <tr>
             <td className="boldIt">WorkTitle</td>
             <td >{responseData.WorkTitle}</td>
          </tr>
          <tr>
             <td className="boldIt">WorkPhone</td>
             <td >{responseData.WorkPhone}</td>
          </tr>
          <tr>
             <td className="boldIt">Years</td>
             <td >{responseData.yearss}</td>
          </tr>
          <tr>
             <td className="boldIt">Months</td>
             <td >{responseData.monthss}</td>
          </tr>
          <tr>
             <td className="boldIt">Self WorkPhone</td>
             <td >{responseData.SelfWorkPhone}</td>
          </tr>
          <tr>
             <td className="boldIt">Self Year</td>
             <td >{responseData.Selfyear}</td>
          </tr>
          <tr>
             <td className="boldIt">Self Months</td>
             <td >{responseData.Selfmonths}</td>
          </tr>
          <tr>
             <td className="boldIt">Emp Status</td>
             <td >{responseData.EmpStatus}</td>
          </tr>
          <tr>
             <td className="boldIt">Per Year</td>
             <td >{responseData.PerYear}</td>
          </tr>
         
            
          
        </tbody>
      </table>
      <Link to="/IndividualCreditForm">
        <Button variant="outlined my-3"> &larr; Go Back</Button>
      </Link>
      </main>
    </>
  );
}
