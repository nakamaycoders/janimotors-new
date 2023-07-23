import React, { useEffect, useState } from "react";
import './CreateProduct.css';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, updateProduct, getProductDetails } from "../../actions/productAction";
// import { useAlert } from "react-alert";
import Button from '@mui/material/Button';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MetaData from "../../components/layouts/MetaData";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import {ImageUrl} from '../../UrlConfig'
import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";
import {
  useParams,
} from "react-router-dom";

const UpdateProduct = ({ history,match }) => {
  const dispatch = useDispatch();
//   const alert = useAlert();
  const { error, product } = useSelector((state) => state.productDetails);
  const { loading, error:updateError, isUpdated } = useSelector((state) => state.products);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [engine, setEngine] = useState("");
  const [condition, setCondition] = useState("");
  const [trim, setTrim] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [milage, setMilage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  // const [oldProductPictures, setOldProductPictures] = useState([]);
  // const [imagesPreview, setImagesPreview] = useState([]);
  const Category = useSelector((state) => state.category);

  const createCategoryList = (categories, options = []) => {
    for (let Category of categories) {
      options.push({ value: Category._id, name: Category.name });
      if (Category.children.length > 0) {
        createCategoryList(Category.children, options);
      }
    }
    return options;
  };

  let productId = match.params.productid
  console.log("productId hai",productId)
  // console.log(productId)

  console.log("product hai",product)
  console.log("product._id hai",product._id)
  
  useEffect(() => {
    
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    }else{
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setStock(product.stock);
      setEngine(product.engine);
      setTrim(product.trim);
      setCondition(product.condition);
      setModel(product.model);
      setVin(product.vin);
      setMilage(product.milage);
      setCategory(product.category);
      setStock(product.stock);
      setProductPictures(product.productPictures);
    }
      if (error) {
        dispatch(clearErrors());
      }
      if (updateError) {
        // alert.error(updateError);
        dispatch(clearErrors());
      }
  
      if (isUpdated) {
        // alert.success("Product Created Successfully");
        history.push("/product/all");
        dispatch({ type: UPDATE_PRODUCT_RESET });
      }
    
   
  }, [dispatch,error,history, isUpdated,productId,product,updateError])

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("stock", stock);
    myForm.set("price", price);
    myForm.set("engine", engine);
    myForm.set("trim", trim);
    myForm.set("model", model);
    myForm.set("milage", milage);
    myForm.set("condition", condition);
    myForm.set("vin", vin);
    myForm.set("description", description);
    myForm.set("category", category);

    for (let pic of productPictures) {
      myForm.append("productPicture", pic);
    }
    // productPictures.forEach((image) => {
    //     myForm.append("productPicture", image);
    //   });
    dispatch(updateProduct(productId,myForm));
  };
  
  // const createProductImagesChange = (e) => {
    const updateProductImagesChange = (e) => {
      setProductPictures([...productPictures, e.target.files[0]]);
      // setImagesPreview([]);
      // files.forEach((file) => {
      //   const reader = new FileReader();
  
      //   reader.onload = () => {
      //     if (reader.readyState === 2) {
      //       setImagesPreview((old) => [...old, reader.result]);
      //     }
      //   };
  
      //   reader.readAsDataURL(file);
      // });
    };
    // const files = Array.from(e.target.files);

    // setProductPictures([]);
    // setImagesPreview([]);

    // files.forEach((file) => {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setImagesPreview((old) => [...old, reader.result]);
    //       setProductPictures((old) => [...old, reader.result]);
    //     }
    //   };

    //   reader.readAsDataURL(file);
    // });
  // };

  return (
      <>
      <MetaData title="Update Product" />
    <main className="content">
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <h1>Update Product</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              {/* <AccountTreeIcon /> */}
        <FormControl fullWidth>

              <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={product.category}
            label="Select Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {createCategoryList(Category.categories).map((item) => (
              <MenuItem key={item} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          </FormControl>
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Milage"
                required
                value={milage}
                onChange={(e) => setMilage(e.target.value)}
              />
            </div>

            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Vin"
                required
                value={vin}
                onChange={(e) => setVin(e.target.value)}
              />
            </div>

            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Model"
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Engine"
                required
                value={engine}
                onChange={(e) => setEngine(e.target.value)}
              />
            </div>
            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Condition"
                required
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              />
            </div>
            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Trim"
                required
                value={trim}
                onChange={(e) => setTrim(e.target.value)}
              />
            </div>

{/* {console.log(productPictures)} */}
           {productPictures.length > 0
          ? productPictures.map((pic, item) => <div key={item}>{pic.name}</div>)
          : null} 

            <div id="createProductFormFile">
              <input
                type="file"
                name="productPictures"
                accept="image/*"
                onChange={updateProductImagesChange}
                multiple
              />
            </div>
            {/* <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div> */}

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Update
            </Button>
          </form>
        </div>
      </div>
      </main>
      </>
  )
};

export default UpdateProduct;
