import React,{useEffect} from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ProductDetail.css";
import {useSelector,useDispatch} from 'react-redux';
import {clearErrors, getProductDetails} from '../../../actions/productAction'
import {ImageUrl} from '../../../UrlConfig';
import Loader from "../../layout/Loader/Loader";
// import { BiDollar } from 'react-icons/bi';
import Layout from "../../layout/layout/layout";
// import { useAlert } from "react-alert";
import MetaData from "../../layout/MetaData";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  // const alert = useAlert();

  const {product,loading,error} = useSelector((state) => state.productDetails)
  console.log(product)
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    const { productId } = props.match.params;
    //   console.log(props);
      const payload = {
        params: {
          productId
        }
      }
    dispatch(getProductDetails(payload))
  
  }, [dispatch,props.match.params,error])
  
  const properties = {
    autoplay: false,
    indicators: true,
  };

  if(Object.keys(product).length === 0){
    return null;
  }
  return (
    <>
          <MetaData title={`${product.name} || JANI MOTORS`}/>
      <Layout>
    <div className=" row container-fluid AAA">
      {loading ? (
        <Loader />
      ) : error ? (
        "error"
      ) : (
        <>
        <div className="col-md-6 col-sm-12 pt-3">
          <Fade {...properties}>
            {product.productPictures && product.productPictures.map((product, index) => {
              return (
                <div key={index}>
                  <img
                    src={ImageUrl(product.img)}
                    style={{
                      height: "476px",
                      width: "1000px",
                      borderRadius: "10px",
                      // marginLeft:"7px"
                    }}
                    alt="car"
                    className=" image img-fluid"
                  />
                </div>
              );
            })}
          </Fade>

          <div className="text-center container pt-5 BB  ">
            <h3 style={{ color: "red" }} className="">
              DESCRIPTION
            </h3>
            <p className="para" id="para" style={{color:"white"}}>
              {product.description}
            </p>
          </div>
        </div>
        <div className="col-md-6 pt-4 CC order-sm-1">
          <h1 style={{ color: "red" }}>
            {product.name}
          </h1>

          <span style={{ color: "red",fontSize:"22px" }}>{product.price}</span>

          <table class="table">
            <tbody style={{ color: "white" }}>
            <tr>
                <th scope="row">STOCK:</th>
                <td>{product.stock}</td>
              </tr>
              <tr>
                <th scope="row">TYPE:</th>
                <td>{product.condition}</td>
              </tr>
              <tr>
                <th scope="row">MAKE:</th>
                <td>{product.make}</td>
              </tr>
              <tr>
                <th scope="row">MODEL:</th>
                <td>{product.model}</td>
              </tr>
              <tr>
                <th scope="row">TRIM:</th>
                <td>
                  {product.trim}
                </td>
              </tr>
              <tr>
                <th scope="row">YEAR:</th>
                <td>{product.year}</td>
              </tr>
              
              <tr>
                <th scope="row">MILAGE:</th>
                <td>{product.milage}</td>
              </tr>
              <tr>
                <th scope="row">INTERIOR COLOR:</th>
                <td>{product.interiorColor}</td>
              </tr>
              <tr>
                <th scope="row">EXTERIOR COLOR:</th>
                <td>{product.exteriorColor}</td>
              </tr>
              <tr>
                <th scope="row">VIN:</th>
                <td>{product.vin}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
      )}
    </div>
    </Layout>
    </>
  );
};

export default ProductDetail;
