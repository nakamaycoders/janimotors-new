import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useAlert } from 'react-alert';
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearErrors, getProductsBySlug } from "../../../actions/productAction";
import { ImageUrl } from "../../../UrlConfig";
import getParams from "../../../utils/getParams";
import Card from "../../layout/Card/Card";
import Layout from "../../layout/layout/layout";
import Loader from "../../layout/Loader/Loader";
import { MaterialButton } from "../../layout/MaterialUI/MaterialUI";
import MetaData from "../../layout/MetaData";
import { RespSearch } from "../../layout/Resp-SearchBar";
import "./Product.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Product(props) {
  const dispatch = useDispatch();
  let { products, error, loading } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    if(error){
    dispatch(clearErrors());
    }
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, [dispatch,error,props]);

  return (
    <>
        <MetaData title={`${props.match.params.slug} ---JANI MOTORS`}/>
        <div className="container-fluid">
          <div className="row">
            <RespSearch />
               
            <div className="col-md-9">
            {loading ? (
                <Loader />
              )
              : error ? (
                "error"
              )
              :
              (
                <>
              {products &&
                products.map((p) => {
                  return (
                    <div className="row">
                      <div className="col-md-6 col-sm-12 pt-3">
                        <Link to={`/product/${p._id}`}>
                          <img
                            className="img-fluid"
                            src={ImageUrl(p.productPictures[0].img)}
                            alt=""
                          ></img>
                        </Link>
                      </div>
                      <div
                        className="col-md-4 col-sm-12 pt-3 detailsss"
                        style={{ color: "white" }}
                      >
                        <span style={{width:"200px"}} >{p.name}</span>
                        <div>
                          <span className="fw-bolder">Price: </span>
                          <span>{p.price}</span>
                        </div>

                        <div className="d-flex pt-2">
                          <div>
                            <span className="fw-bolder">milage: </span>
                            <span>{p.milage}</span>
                          </div>

                          <div>
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
                  );
                })}
                </>
              )
            } 
            </div>
          </div>
        </div>
    </>
  );
}

export default Product;
