import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import MetaData from "../../../components/layouts/MetaData";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router";
import {api} from "../../../UrlConfig"


const ContactUs = () => {
  let unreadCount = 0;
  const rows = [];
  let [responseData, setResponseData] = useState("");
  const history = useHistory();

  const url = `${api}/contact/information`;

  const getContactInfo = async () => {
    try {
      const res = await Axios.get(url);
      setResponseData(res.data.contactInfo);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getContactInfo();
  }, []);

  responseData &&
    responseData.forEach((item) => {
      rows.splice(0, 0, {
        id: item._id,
        email: item.email,
        lname: item.firstName,
        fname: item.lastName,
        view: item.view,
      });
      if(item.view == "unread"){
        unreadCount= unreadCount +1;
      }
    });

    const deleteContactHandler = (id) => {
    const deleteUrl = `https://jmserver.herokuapp.com/api/contact/delete`;
    try {
      Axios.delete(`${deleteUrl}/${id}`);
      history.go(0);
    } catch (err) {
      alert(err);
    }
  };

  const changeView = (id) => {
    const changeViewUrl = `https://jmserver.herokuapp.com/api/contact/update`;
    try {
      Axios.patch(`${changeViewUrl}/${id}`);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <MetaData title={`Contact Us - Admin Dashboard`} />
      <main className="content">
        <div className="dashboard">
          <div className="productListContainer">
            <h1 id="productListHeading">Contact Submissions</h1>
            <h6>Unread Message(s): {unreadCount}</h6>
            <table className="table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((item) => (
                  <tr key={item.id}>
                    <td
                      style={{
                        fontWeight: `${item.view === "unread" ? "bolder" : ""}`,
                      }}
                    >
                      {item.lname}
                    </td>
                    <td
                      style={{
                        fontWeight: `${item.view === "unread" ? "bolder" : ""}`,
                      }}
                    >
                      {item.fname}
                    </td>
                    <td
                      style={{
                        fontWeight: `${item.view === "unread" ? "bolder" : ""}`,
                      }}
                    >
                      {item.email}
                    </td>
                    <td
                      style={{
                        fontWeight: `${item.view === "unread" ? "bolder" : ""}`,
                      }}
                    >
                      <Link
                        to={{
                          pathname: `/contactUs/contactDetails/${item.id}`,
                          params: { id: item.id },
                        }}
                      >
                        <Button onClick={() => changeView(item.id)}>
                          View
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button onClick={() => deleteContactHandler(item.id)}>
                        <DeleteIcon />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* {console.log(UnreadRow, ReadRow, rows)} */}
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
