import React,{useEffect} from 'react'
import Layout from '../../layout/layout/layout'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailsById } from '../../../actions';
import './ProductDetail.css'
import { 
    IoIosArrowForward, 
    IoIosStar, 
    IoMdCart 
  } from 'react-icons/io';
  import { BiDollar } from 'react-icons/bi';
  import { AiFillThunderbolt } from 'react-icons/ai';
//   import { MaterialButton } from '../../layouts/MaterialUI/MaterialUI';
import { ImageUrl } from '../../../UrlConfig';
import { Link } from 'react-router-dom';

export default function ProductDetail(props) {
    const {product,loading} = useSelector((state) => state.product);
    // console.log(product)
    const dispatch = useDispatch();
  
    useEffect(() => {
      const { productId } = props.match.params;
    //   console.log(props);
      const payload = {
        params: {
          productId
        }
      }
      dispatch(getProductDetailsById(payload));
    }, []);

    if(Object.keys(product.productDetails).length === 0){
      return null;
    }
  
  return (
    <Layout>
    <div className='container-fluid'>
        <div className="productDescriptionContainer " style={{color:'white'}}>
        <div className="flexRow">
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img src={ImageUrl(product.productDetails.productPictures[0].img)} alt='picture' />
            </div>
     

            {/* action buttons */}
            
          </div>
          <div className="verticalImageStack">
            {
                product.productDetails.productPictures.map((thumb, index) => 
              <div className="thumbnail">
                <img className='img-fluid' src={ImageUrl(thumb.img)} alt={thumb.img} />
              </div>
              )
            }
           {/* { console.log(ImageUrl(product.productDetails.productPictures[0].img))} */}
            {/* <div className="thumbnail active">
              {
                product.productDetails.productPictures.map((thumb, index) => 
                <img src={ImageUrl(thumb.img)} alt={thumb.img} />)
              }
            </div> */}
          </div>
        </div>
        <div>

          {/* home > category > subCategory > productName */}
          <div className="breed">
            <ul>
              <li><Link to="/">Home</Link><IoIosArrowForward /></li>
              <li><Link to="">Suv</Link><IoIosArrowForward /></li>
              <li><Link >{product.productDetails.name}</Link></li>
            </ul>
          </div>
          {/* product description */}
          <div className="productDetails">
              <p className="productTitle">{product.productDetails.name}</p>
{/*  <BiDollar /> */}
            <div className="flexRow priceContainer">
            <span style={{
                  width: '100px',
                  fontSize: '18px',
                  color: 'white',
                  fontWeight: '600',
                  marginRight: '20px'
              }}>Price: </span>
              <span className="price"><BiDollar />{product.productDetails.price}</span>
              {/* <span>i</span> */}
              </div>
            <div>

            <div className="flexRow priceContainer">
            <span style={{
                  width: '100px',
                  fontSize: '18px',
                  color: 'white',
                  fontWeight: '600',
                  marginRight: '20px'
              }}>Type: </span>
              <span className="price text-capitalize">{product.productDetails.condition}</span>
              {/* <span>i</span> */}
              </div>

            <div className="flexRow priceContainer">
            <span style={{
                  width: '100px',
                  fontSize: '18px',
                  color: 'white',
                  fontWeight: '600',
                  marginRight: '20px'
              }}>Make: </span>
              <span className="price text-capitalize">{product.productDetails.name}</span>
              {/* <span>i</span> */}
              </div>
            <div className="flexRow priceContainer">
            <span style={{
                  width: '100px',
                  fontSize: '18px',
                  color: 'white',
                  fontWeight: '600',
                  marginRight: '20px'
              }}>Model: </span>
              <span className="price text-capitalize">{product.productDetails.model}</span>
              {/* <span>i</span> */}
              </div>
            <div className="flexRow priceContainer">
            <span style={{
                  width: '100px',
                  fontSize: '18px',
                  color: 'white',
                  fontWeight: '600',
                  marginRight: '20px'
              }}>Trim: </span>
              <span className="price text-capitalize">{product.productDetails.trim}</span>
              {/* <span>i</span> */}
              </div>
            <div className="flexRow priceContainer">
            <span style={{
                  width: '100px',
                  fontSize: '18px',
                  color: 'white',
                  fontWeight: '600',
                  marginRight: '20px'
              }}>Milage: </span>
              <span className="price text-capitalize">{product.productDetails.milage}</span>
              {/* <span>i</span> */}
              </div>
            <div className="flexRow priceContainer">
            <span style={{
                  width: '100px',
                  fontSize: '18px',
                  color: 'white',
                  fontWeight: '600',
                  marginRight: '20px'
              }}>Vin: </span>
              <span className="price text-capitalize">{product.productDetails.vin}</span>
              {/* <span>i</span> */}
              </div>
 
              <p style={{ display: 'flex' }}>
                <span style={{
                  width: '100px',
                  fontSize: '22px',
                  color: 'white',
                  fontWeight: '600',
                  marginRight: '20px'
              }}>Description: </span>
              <span className='price' style={{
              }}>{product.productDetails.description}</span>
              </p>
            </div>
          </div>
          

        </div>
      </div>
      </div>
        
    
    </Layout>
  )
}
