import React from "react";
import { Link } from "react-router-dom";
import { navmenu } from "../Nav/Data";
import "./style.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

export const Nav = (props) => {
  return (
    <>
      {/* <div className="container-fluid wrapper">
        <ul className="header-list">
          {navmenu.map((item, index) => {
            return (
              <div>
              <li key={index}>
                <Link to={item.path} className={item.cName}>
                  {item.title}
                </Link>
              </li>
              

               </div>


            );
          })}
           
         
          <li>
            <a href="tel:+815-219-1969" className="nav-menues">
              815-219-1969
            </a>
          </li>
        </ul>
      </div> */}

      <div className="container-fluid wrapper" style={{color:"white"}}>
        <div className="d-flex justify-content-end">
          <div style={{    marginRight: '20px'}}>

          <span><LocationOnIcon/> 512 Saint Charles Road Carol Stream , IL 60188</span>
          </div>
          <div >
          <span><a  href="tel:+815-219-1969" style={{textDecoration:"none " , color:"white"}}><PhoneIcon/> (815) 219-1969</a></span>
          </div>
        </div>
      </div>
    </>
  );
};
