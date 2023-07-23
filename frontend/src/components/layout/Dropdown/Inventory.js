import React, { useState } from "react";
import "./Inverntory.css";
import { inventoryDropdown } from "../Navbar/data";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Inventory
 **/

export const Inventory = (props) => {
    // const [dropdown,setDropdown] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
     
  return (
    <>
      <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {inventoryDropdown.map((item) => {
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
