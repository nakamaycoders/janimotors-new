// import React,{useState,useEffect} from 'react'
// import { getProductDetailsById } from '../../actions/product.action';
// import {useDispatch,useSelector} from 'react-redux'
// import TextField from '@mui/material/TextField'
// // import {useParams} from 'react-router-dom'
// export const EditProductModel = ({ match }) => {
//   const productId = match.params.productId
//   const dispatch = useDispatch()
//   const { product } = useSelector((state) => state.product)
//   // console.log(productId)
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [stock, setStock] = useState("");
//   const [engine, setEngine] = useState("");
//   const [condition, setCondition] = useState("");
//   const [trim, setTrim] = useState("");
//   const [model, setModel] = useState("");
//   const [vin, setVin] = useState("");
//   const [milage, setMilage] = useState("");
//   const [description, setDescription] = useState("");
//   const [categoryId, setCategoryId] = useState("");
//   const [productPictures, setProductPictures] = useState([]);

//   useEffect(() => {
//     if(!product){
//       dispatch(getProductDetailsById(productId))
//     }
//     else{
//       setName(product.name)
//     }
//   }, [dispatch,productId,product])
  

//   return (
//     <div>
//         <TextField
//           style={{ margin: "9px 3px", width: "-webkit-fill-available" }}
//           typr="text"
//           autoComplete="off"
//           required
//           id="outlined-required"
//           label="Name"
//           variant="outlined"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//     </div>
//   )
// }
