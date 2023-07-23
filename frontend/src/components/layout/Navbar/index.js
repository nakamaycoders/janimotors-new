import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Box from '@mui/material/Box'
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../../actions/categoryAction";
import "./Navbar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import logo from "../../../assets/logo .png";

/**
 * @author
 * @function Navbar
 **/

export const Navbar = (props) => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const displayCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.parentId ? (
            <Link to={`/${category.slug}`}>
              {category.name}
            </Link>
          ) : (
            <>
              <label htmlFor="drop-2" className="toggle">
                {category.name}
              </label>
              <Link to="#">{category.name}</Link>
              <input type="checkbox" id="drop-2" />
            </>
          )}
          {category.children.length > 0 ? (
            <ul>
              <li>
                <Link to="/view-all-inventories">View All Inventories</Link>
              </li>
              {displayCategories(category.children)}
            </ul>
          ) : null}
        </li>
      );
    }

    return myCategories;
  };

  return (
    <>
      <nav className="container">
        <div id="logo">
          <Link to="/">
            <img
              className="img-fluid"
              style={{ width: "400px" }}
              src={logo}
              alt="JANI MOTORS CARS"
            />
          </Link>
        </div>
        <label for="drop" style={{ float: "right" }} className="toggle">
          <DehazeIcon></DehazeIcon>
        </label>
        <input type="checkbox" id="drop" />
        <ul className="menu">
          {category.categories.length > 0
            ? displayCategories(category.categories)
            : null}
          <li>
            {/* <!-- First Tier Drop Down --> */}
            <label for="drop-1" className="toggle">
              Financing
            </label>
            <Link href="#">Financing</Link>
            <input type="checkbox" id="drop-1" />
            <ul>
              <li>
                <Link to="/creditapproval">Online Credit Approval</Link>
              </li>
              <li>
                <Link to="/tradeincar">Calculate Your Trade </Link>
              </li>
              <li>
                <Link to="/calculator">Calculate Payment</Link>
              </li>
            </ul>
          </li>

          <li>
            <label htmlFor="drop-3" className="toggle">
              About
            </label>
            <Link to="#">About Us</Link>
            <input type="checkbox" id="drop-3" />
            <ul>
              {/* <li>
                <Link to="/ourdealership">Our dealership</Link>
              </li> */}
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/event">Events</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
