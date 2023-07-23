import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Axios from "axios";
import './contactDetails.css'
import {api} from "../../../UrlConfig"
import MetaData from "../../../components/layouts/MetaData";


export default function CustomizedTables(props) {
  let [responseData, setResponseData] = useState("");
  const url = `${api}/contact/information`;
  
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
      <MetaData title={`View Contact Details - Admin Dashboard`} />
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
          <tr>
            <td>Phone</td>
            <td>{responseData.phone}</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>{responseData.message}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/contactUs/contactUs">
        <Button variant="outlined my-3"> &larr; Go Back</Button>
      </Link>
      </main>
    </>
  );
}
