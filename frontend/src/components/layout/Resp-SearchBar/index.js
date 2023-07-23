import React, { useState, useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../actions/categoryAction";

/**
 * @author
 * @function RespSearch
 **/

export const RespSearch = () => {
  const dispatch = useDispatch();
  let { products } = useSelector((state) => state.product);
  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  let history = useHistory();
  const [keyword, setKeyword] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [body, setBody] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/view-all-inventories/${keyword}`);
    } else if (model.trim()) {
      history.push(`/view-all-inventories/&model=${model}`);
    } else if (make.trim()) {
      history.push(`/view-all-inventories/&make=${make}`);
    } else if (year.trim()) {
      history.push(`/view-all-inventories/&year=${year}`);
    } else if (body.trim()) {
      history.push(`/${body}`);
      // history.push(`/view-all-inventories/&body=${body}`);
    } else {
      history.push("/");
    }
  };
  return (
    <>
      <div className="col-md-4 col-lg-3 pt-3">
        <div className="search-div">
          <select
            class="form-select"
            onChange={(e) => setModel(e.target.value)}
            aria-label="Default select example"
          >
            <option selected disabled>
              Model
            </option>
            {products.map((p, index) => (
              <option key={index}>{p.model}</option>
            ))}
          </select>
        </div>
        <div className="search-div">
          <select
            class="form-select"
            onChange={(e) => setMake(e.target.value)}
            aria-label="Default select example"
          >
            <option selected disabled>
              Make
            </option>
            {products.map((p, index) => (
              <option key={index}>{p.make}</option>
            ))}
          </select>
        </div>
        <div className="search-div">
          <select
            class="form-select"
            onChange={(e) => setYear(e.target.value)}
            aria-label="Default select example"
          >
            <option selected disabled>
              Year
            </option>
            {products.map((p, index) => (
              <option key={index}>{p.year}</option>
            ))}
          </select>
        </div>
        <div className="search-div">
          <select
            class="form-select"
            onChange={(e) => setBody(e.target.value)}
            aria-label="Default select example"
          >
            <option selected disabled>
              Body
            </option>
            {category.categories.length > 0
              ? category.categories[0].children.map((p) => (
                  <option>{p.slug}</option>
                ))
              : null}
          </select>
        </div>

        <div className="search-btn">
          <form className="searchBox" onSubmit={handleSearch}>
            <input
              type="text"
              className="input-1"
              placeholder="search"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input type="submit" className="btn btn-primary" style={{borderRadius:'15px'}} value="Search" />
          </form>
        </div>
      </div>
    </>
  );
};
