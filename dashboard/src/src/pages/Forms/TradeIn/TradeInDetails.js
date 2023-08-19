import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Axios from "axios";
import MetaData from "../../../components/layouts/MetaData";


export default function CustomizedTables(props) {
  let [responseData, setResponseData] = useState("");
  const url = "https://janimotors-api.onrender.com/api/trade-in/information";
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
  }, []);

  // if(Object.keys(responseData).length === 0){
  //   return null
  // }

  return (
    <>
      <MetaData title={`View Trade In Details - Admin Dashboard`} />
      <main className="content">
        <table className="table-resptable-dark">
          <thead>
            <tr>
              <th>Fields</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{responseData.firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{responseData.lastName}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{responseData.email}</td>
            </tr>
            {/* <tr>
            <td>Phone</td>
            <td>{responseData.phone}</td>
          </tr> */}
            <tr>
              <td>Make</td>
              <td>{responseData.make}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{responseData.yearOption}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{responseData.model}</td>
            </tr>
            <tr>
              <td>VIN</td>
              <td>{responseData.vin}</td>
            </tr>
            <tr>
              <td>Body Style</td>
              <td>{responseData.bodystyle}</td>
            </tr>
            <tr>
              <td>Trim</td>
              <td>{responseData.trim}</td>
            </tr>
            <tr>
              <td>Exterior Color</td>
              <td>{responseData.exteriorColor}</td>
            </tr>
            <tr>
              <td>Interior Color</td>
              <td>{responseData.interiorColor}</td>
            </tr>
            <tr>
              <td>Cylinders</td>
              <td>{responseData.Cylinders}</td>
            </tr>
            <tr>
              <td>Mileage</td>
              <td>{responseData.Mileage}</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>{responseData.Transmission}</td>
            </tr>
            <tr>
              <td>Lien Holder</td>
              <td>{responseData.LienHolder}</td>
            </tr>
            <tr>
              <td>Estimated Payoff</td>
              <td>{responseData.EstimatedPayoff}</td>
            </tr>
            <tr>
              <td>Additional Options</td>
              <td>{responseData.AdditionalOptions}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{responseData.state}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{responseData.city}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{responseData.address}</td>
            </tr>
            <tr>
              <td>Zip</td>
              <td>{responseData.zip}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{responseData.phone}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/trade-in-jani-motors">
          <Button variant="outlined my-3"> &larr; Go Back</Button>
        </Link>
      </main>
    </>
  );
}
