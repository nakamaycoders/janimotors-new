import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Cardcaro.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../../actions/productAction";
import { ImageUrl } from "../../../UrlConfig";
import {Link} from 'react-router-dom'
/**
 * @author
 * @function Cardss
 **/

export const Cardss = (props) => {
  const dispatch = useDispatch();
  let { products, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch,error]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <h1  className="ci">Current Inventory</h1>
      <Carousel
        autoPlaySpeed={3500}
        autoPlay={true}
        infinite={true}
        responsive={responsive}
        // showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {products && products.map((p,index) => {
          return (
            <div key={index} className="card container">
              <img
                src={ImageUrl(p.productPictures[0].img)}
                alt="JANI MOTORS CARS"
                className="img-fluid"
              />
              <div className="okok ">
                <h4 className="title">{p.name}</h4>
                <tr>
                  <td>
                    <h5 style={{marginRight: "52px"}}>
                    <span style={{fontWeight:400,textTransform:"uppercase",fontSize:"initial"}}>Mileage</span>
                       <br/> {p.milage}</h5>
                  </td>
                  <td>
                    <h5><span style={{fontWeight:400,textTransform:"uppercase",fontSize:"initial"}}>Stock #</span> <br/> {p.stock}</h5>
                  </td>
                </tr>
                <h5 className="show">Engine <br/> {p.engine} </h5>
              </div>

              <div className="hc">
                <h5>
                  Price : <br />
                  ${p.price}
                </h5>
                <button className="bte btn show-btn btn-primary">Details</button>
                <button className="btn hide btn-success">
                  <Link to={`/product/${p._id}`} className="text-decoration-none">View Details</Link>
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
      ;
    </>
  );
};
