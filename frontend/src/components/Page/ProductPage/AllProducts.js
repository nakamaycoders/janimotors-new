import React, { useEffect, useState } from "react";
import Layout from "../../layout/layout/layout";
import MetaData from "../../layout/MetaData";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../../actions/productAction";
import Loader from "../../layout/Loader/Loader";
import { Link } from "react-router-dom";
import { ImageUrl } from "../../../UrlConfig";
import { RespSearch } from "../../layout/Resp-SearchBar";
import { Helmet } from "react-helmet-async";

const AllProducts = ({ match }) => {
  const dispatch = useDispatch();
  let { products, error, loading } = useSelector((state) => state.product);
  // console.log(products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword));
  }, [dispatch, error, keyword]);
  return (
    <Layout>
      <Helmet>
        <title>Inventory || JANI MOTORS</title>
        <meta name="Inventory" content="JANI MOTORS" />
        <meta
          name="description"
          content="Here you may see all of the top automobiles that Jani Motors has to offer."
        />
        <link rel="canonical" href="/view-all-inventories" />
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <RespSearch />

          <div className="col-md-9">
            {loading ? (
              <Loader />
            ) : error ? (
              "error"
            ) : (
              <>
                {products &&
                  products.map((p) => (
                    // console.log(ImageUrl(p.productPictures[0].img));
                    // return (
                    <div className="row">
                      <div className="col-md-6 col-sm-12 pt-3">
                        <Link to={`/product/${p._id}`}>
                          <img
                            className="img-fluid"
                            src={ImageUrl(p.productPictures[0].img)}
                            alt="JANI MOTORS CARS "
                          ></img>
                        </Link>
                      </div>
                      <div
                        className="col-md-4 col-sm-12 pt-3 detailsss"
                        style={{ color: "white" }}
                      >
                        <span style={{ width: "200px" }}>{p.name}</span>
                        <div>
                          <span className="fw-bolder">Price: </span>
                          <span>${p.price}</span>
                        </div>

                        <div className="d-flex pt-2">
                          <div>
                            <span className="fw-bolder">milage: </span>
                            <span>{p.milage}</span>
                          </div>

                          <div className="">
                            <span className="fw-bolder ms-5">stock: </span>
                            <span>{p.stock}</span>
                          </div>
                        </div>
                        <div className=" pt-2">
                          <span className="fw-bolder ">Engine: </span>
                          <p>{p.engine}</p>
                        </div>

                        <Button variant="contained">
                          <Link
                            to={`/product/${p._id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                    // );
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
