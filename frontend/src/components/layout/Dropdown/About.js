import React, { useState } from "react";
import "./Inverntory.css";
import { aboutUsDropdown } from "../Navbar/data";
import { Link } from "react-router-dom";

/**
 * @author
 * @function About
 **/

export const About = (props) => {
    // const [dropdown,setDropdown] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
     
  return (
    <>
      <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {aboutUsDropdown.map((item) => {
          return (
            <li key={item.id} >
              <Link to={item.path} onClick={() => setClick(false)} className={item.cName}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  );
};
