import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Axios from "axios";
import './CA.css'
import MetaData from "../../../components/layouts/MetaData";


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
      <MetaData title="View Credit Details - Admin Dashboard" />
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
             <td className="boldIt2">First Name</td>
             <td >{responseData.fname}</td>
             <td className="boldIt2">First Name</td>
             <td >{responseData.Cofname}</td>
            

          </tr>
          <tr>
             <td className="boldIt2">Middle Name</td>
             <td >{responseData.midName}</td>
             <td className="boldIt2">Middle Name</td>
             <td >{responseData.CoMidName}</td>
          </tr>
          <tr>
             <td className="boldIt2">Last Name</td>
             <td >{responseData.lName}</td>
             <td className="boldIt2">Last Name</td>
             <td >{responseData.ColName}</td>
          </tr>
          {/* ------------------------------------------------------------------- */}
          <tr>
             <td className="boldIt2">Suffix</td>
             <td >{responseData.Suffix}</td>
             <td className="boldIt2">Suffix</td>
             <td >{responseData.CoSuffix}</td>
            </tr>
          <tr>
             <td className="boldIt2">Home Number</td>
             <td >{responseData.homeNum}</td>
             <td className="boldIt2">Home Number</td>
             <td >{responseData.CohomeNum}</td>
          </tr>
          <tr>
             <td className="boldIt2">Cell No</td>
             <td >{responseData.cellNum}</td>
             <td className="boldIt2">Cell No</td>
             <td >{responseData.CocellNum}</td>
          </tr>
          <tr>
             <td className="boldIt2">Email</td>
             <td >{responseData.email}</td>
             <td className="boldIt2">Email</td>
             <td >{responseData.Coemail}</td>
          </tr>
          <tr>
             <td className="boldIt2">Rural Route</td>
             <td >{responseData.rr}</td>
             <td className="boldIt2">Rural Route</td>
             <td >{responseData.Corr}</td>
          </tr>
          <tr>
             <td className="boldIt2">Box</td>
             <td >{responseData.box}</td>
             <td className="boldIt2">Box</td>
             <td >{responseData.Cobox}</td>
          </tr>
          <tr>
             <td className="boldIt2">Street</td>
             <td >{responseData.street}</td>
             <td className="boldIt2">Street</td>
             <td >{responseData.Costreet}</td>
          </tr>
          <tr>
             <td className="boldIt2">Street Name</td>
             <td >{responseData.StreetName}</td>
             <td className="boldIt2">Street Name</td>
             <td >{responseData.CoStreetName}</td>
          </tr>
          <tr>
             <td className="boldIt2">Street Type</td>
             <td >{responseData.StreetOptional}</td>
             <td className="boldIt2">Street Type</td>
             <td >{responseData.CoStreetOptional}</td>
          </tr>
          <tr>
             <td className="boldIt2">APT</td>
             <td >{responseData.apt}</td>
             <td className="boldIt2">APT</td>
             <td >{responseData.Coapt}</td>
          </tr>
          <tr>
             <td className="boldIt2">ZIP</td>
             <td >{responseData.zip}</td>
             <td className="boldIt2">ZIP</td>
             <td >{responseData.Cozip}</td>
          </tr>
          <tr>
             <td className="boldIt2">City</td>
             <td >{responseData.city}</td>
             <td className="boldIt2">City</td>
             <td >{responseData.Cocity}</td>
          </tr>
          <tr>
             <td className="boldIt2">State</td>
             <td >{responseData.State}</td>
             <td className="boldIt2">State</td>
             <td >{responseData.CoState}</td>
          </tr>
          <tr>
             <td className="boldIt2">Housing status</td>
             <td >{responseData.House}</td>
             <td className="boldIt2">Housing status</td>
             <td >{responseData.CoHouse}</td>
          </tr>
          <tr>
             <td className="boldIt2">Year</td>
             <td >{responseData.Year}</td>
             <td className="boldIt2">Year</td>
             <td >{responseData.CoYear}</td>
          </tr>
          <tr>
             <td className="boldIt2">Month</td>
             <td >{responseData.Month}</td>
             <td className="boldIt2">Month</td>
             <td >{responseData.CoMonth}</td>
          </tr>
          <tr>
             <td className="boldIt2">Mortgage</td>
             <td >{responseData.Mortgage}</td>
             <td className="boldIt2">Mortgage</td>
             <td >{responseData.CoMortgage}</td>
          </tr>
          <tr>
             <td className="boldIt2">Dob</td>
             <td >{responseData.Dob}</td>
             <td className="boldIt2">Dob</td>
             <td >{responseData.Codob}</td>
          </tr>
          <tr>
             <td className="boldIt2">SSN</td>
             <td >{responseData.SSN}</td>
             <td className="boldIt2">SSN</td>
             <td >{responseData.CoSSN}</td>
          </tr>
          <tr>
             <td className="boldIt2">Co-Applicant Relation</td>
             <td >{responseData.CoApplicantRelation}</td>
             <td className="boldIt2">-</td>
             <td className="boldIt2">-</td>
          </tr>
          <tr>
             <td className="boldIt2">SelectHousingStatus</td>
             <td >{responseData.SelectHousingStatus}</td>
             <td className="boldIt2">SelectHousingStatus</td>
             <td >{responseData.CoSelectHousingStatus}</td>
          </tr>
          <tr>
             <td className="boldIt2">Employee Status</td>
             <td >{responseData.EmploymentStatus}</td>
             <td className="boldIt2"> Employee Status</td>
             <td >{responseData.CoEmploymentStatus}</td>
          </tr>
          <tr>
             <td className="boldIt2">WorkTitle</td>
             <td >{responseData.WorkTitle}</td>
             <td className="boldIt2">WorkTitle</td>
             <td >{responseData.CoWorkTitle}</td>
          </tr>
          <tr>
             <td className="boldIt2">WorkPhone</td>
             <td >{responseData.WorkPhone}</td>
             <td className="boldIt2">WorkPhone</td>
             <td >{responseData.CoWorkPhone}</td>
          </tr>
          <tr>
             <td className="boldIt2">Years</td>
             <td >{responseData.yearss}</td>
             <td className="boldIt2">Years</td>
             <td >{responseData.Coyearss}</td>
          </tr>
          <tr>
             <td className="boldIt2">Months</td>
             <td >{responseData.monthss}</td>
             <td className="boldIt2">Months</td>
             <td >{responseData.Comonthss}</td>
          </tr>
          <tr>
             <td className="boldIt2">Self WorkPhone</td>
             <td >{responseData.SelfWorkPhone}</td>
             <td className="boldIt2">Self WorkPhone</td>
             <td >{responseData.CoSelfWorkPhone}</td>
          </tr>
          <tr>
             <td className="boldIt2">Self Year</td>
             <td >{responseData.Selfyear}</td>
             <td className="boldIt2">Self Year</td>
             <td >{responseData.CoSelfyear}</td>
          </tr>
          <tr>
             <td className="boldIt2">Self Months</td>
             <td >{responseData.Selfmonths}</td>
             <td className="boldIt2">Self Months</td>
             <td >{responseData.CoSelfmonths}</td>
          </tr>
          <tr>
             <td className="boldIt2">source of income</td>
             <td >{responseData.SourceofIncome}</td>
             <td className="boldIt2">source of income</td>
             <td >{responseData.coSourceOfIncome}</td>
          </tr>
          <tr>
             <td className="boldIt2">Per Year</td>
             <td >{responseData.PerYear}</td>
             <td className="boldIt2">Per Year</td>
             <td >{responseData.CoPerYear}</td>
          </tr>
         
            
          
        </tbody>
      </table>
      <Link to="/Credit-Approval">
        <Button variant="outlined my-3"> &larr; Go Back</Button>
      </Link>
      </main>
    </>
  );
}
