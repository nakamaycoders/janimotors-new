import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../../actions/productAction";
import { getAllCategory } from "../../../actions/categoryAction";

/**
 * @author
 * @function Search
 **/

export const Search = () => {
  const dispatch = useDispatch();
  let { products, error } = useSelector((state) => state.product);
  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch, error]);
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
      // /${category.slug}?cid=${category._id}
    } else {
      history.push("/");
    }
  };

  return (
    <>
      <div className="search">
        <Container>
          <form className="searchBox" onSubmit={handleSearch} style={{backgroundColor:'black'}}>
            <Row>
            <Col md={3} sm={12}>
                <select
                  className="form-select"
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
              </Col>
              <Col md={3} sm={12}>
                <select
                  className="form-select"
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
              </Col>
              <Col md={3} sm={12}>
                <select
                  className="form-select"
                  onChange={(e) => setModel(e.target.value)}
                  aria-label="Default select example"
                >
                  <option selected disabled>
                    Model
                  </option>
                  {products &&
                    products.map((p, index) => (
                      <option key={index}>{p.model}</option>
                    ))}
                </select>
              </Col>
              
             
              <Col md={3} sm={12}>
                <select
                  className="form-select"
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
              </Col>
            </Row>

              <div className="searchBox">
                <input
                  type="text"
                  className="input-1"
                  placeholder="search"
                  onChange={(e) => setKeyword(e.target.value)}
                  style={{ margin: "10px 0px" }}
                />
                <input type="submit" className="btn btn-primary searchBtn-resp" value="Search" />
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};
