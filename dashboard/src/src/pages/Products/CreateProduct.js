import React, { useEffect, useState } from "react";
import "./CreateProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
// import { useAlert } from "react-alert";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MetaData from "../../components/layouts/MetaData";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import DescriptionIcon from "@mui/icons-material/Description";
// import StorageIcon from "@mui/icons-material/Storage";
// import SpellcheckIcon from "@mui/icons-material/Spellcheck";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
// import { ToastProvider, useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Image } from 'cloudinary-react';
import axios from "axios";
import { uploadImages } from "../../actions/productAction";
import Dropzone from "react-dropzone";



const CreateProduct = () => {
  const dispatch = useDispatch();
  //   const alert = useAlert();
  // const { addToast } = useToasts();/
  let history = useHistory();

  const[imageError,setimageError]= useState("")

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [engine, setEngine] = useState("");
  const [condition, setCondition] = useState("");
  const [trim, setTrim] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [milage, setMilage] = useState("");
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [interiorColor, setInteriorColor] = useState("");
  const [exteriorColor, setExteriorColor] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  console.log("categoryId--->",categoryId)
  // const [productPictures, setProductPictures] = useState([]);
  const [productPictures, setProductPictures] = useState([]);
  // const [imagesPreview, setImagesPreview] = useState([]);
  const category = useSelector((state) => state.category);
  const imgState = useSelector((state) => state?.uploadedImages?.images);
  const { isLoading } = useSelector((state) => state?.uploadedImages);



  const img = [];
  imgState?.forEach((i) => {
    img?.push({
      public_id: i.public_id,
      url: i.url,
    });
  });


  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    if(success) {
      // alert.success("Product Created Successfully");
      history.push("/product/all");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, history, success,]);

  const createProductSubmitHandler = async (e) => {
    e.preventDefault();
    if (img.length === 0) {
      setImageError("Please upload at least one image!");
    }
    const formData  = new FormData();

    formData.set("name", name);
    // console.log(name);
    formData.set("stock", stock);
    // console.log(stock);
    formData.set("price", price);
    // console.log(price);
    formData.set("engine", engine);
    // console.log(engine);
    formData.set("trim", trim);
    // console.log(trim);
    formData.set("model", model);
    // console.log(model);
    formData.set("milage", milage);
    // console.log(milage);
    formData.set("make", make);
    // console.log(make);
    formData.set("year", year);
    // console.log(year);
    formData.set("interiorColor", interiorColor);
    // console.log(interiorColor);
    formData.set("exteriorColor", exteriorColor);
    // console.log(exteriorColor);
    formData.set("condition", condition);
    // console.log(condition);
    formData.set("vin", vin);
    // console.log(vin);
    formData.set("description", description);
    // console.log(description);
    formData.set("category", categoryId);
    console.log(categoryId);

    
    const imageObjects = imgState?.map((img) => ({
      public_id: img?.public_id,
      url: img?.url,
    }));
    console.log("here is imageObjects",imageObjects)

      const productData = {
        name,
        price,
        stock,
        engine,
        trim,
        model,
        milage,
        make,
        year,
        interiorColor,
        exteriorColor,
        condition,
        vin,
        description,
        category: categoryId,
        images: imageObjects,
      };

    dispatch(createProduct(productData));
    // console.log(createProduct(myForm));
  };



  
  
  

  // const createProductImagesChange = (e) => {
    const createProductImagesChange = (e) => {
      setProductPictures(e.target.files);
    };
    

  return (
    <>
      <MetaData title="Add New Product - Admin Dashboard" />
      <main className="content">
        <div className="dashboard">
          <div className="newProductContainer">
            <form
              className="createProductForm"
              encType="multipart/form-data"
              onSubmit={createProductSubmitHandler}
            >
              <h1>Create Product</h1>

              <div>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              /> */}
              </div>
              <div>
                {/* <AttachMoneyIcon /> */}
                <TextField
                  // type="number"
                  autoComplete="off"
                  fullWidth
                  required
                  id="outlined-required"
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="Price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              /> */}
              </div>

              <div>
                {/* <DescriptionIcon /> */}
                <TextareaAutosize
                  fullWidth
                  required
                  aria-label="minimum height"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  minRows={3}
                  placeholder="Description"
                  style={{ width: "100%", outline: "none" }}
                />

                {/* <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea> */}
              </div>

              <div>
                {/* <AccountTreeIcon /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Category
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryId}
                    label="Select Category"
                    onChange={(e) => setCategoryId(e.target.value)}
                  >
                    {createCategoryList(category.categories).map(
                      (item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {item.name}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </div>

              <div>
                {/* <StorageIcon /> */}
                <TextField
                  // type="number"
                  autoComplete="off"
                  fullWidth
                  required
                  id="outlined-required"
                  label="Stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="Stock"
                required
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              /> */}
              </div>
              <div>
                {/* <StorageIcon /> */}
                <TextField
                  autoComplete="off"
                  fullWidth
                  required
                  id="outlined-required"
                  label="Type"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="Condition"
                required
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              /> */}
              </div>


              <div>
                {/* <StorageIcon /> */}
                <TextField
                  // type="number"
                  autoComplete="off"
                  fullWidth
                  required
                  id="outlined-required"
                  label="Make"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="Make"
                required
                value={make}
                onChange={(e) => setMake(e.target.value)}
              /> */}
              </div>

              <div>
                {/* <StorageIcon /> */}
                <TextField
                  autoComplete="off"
                  fullWidth
                  required
                  id="outlined-required"
                  label="Model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="Model"
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
              /> */}
              </div>

              <div>
                {/* <StorageIcon /> */}
                <TextField
                  autoComplete="off"
                  fullWidth
                  required
                  id="outlined-required"
                  label="Trim"
                  value={trim}
                  onChange={(e) => setTrim(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="Trim"
                required
                value={trim}
                onChange={(e) => setTrim(e.target.value)}
              /> */}
              </div>
              <div>
                {/* <StorageIcon /> */}
                <TextField
                  // type="number"
                  autoComplete="off"
                  fullWidth
                  id="outlined-required"
                  label="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              /> */}
              </div>








              <div>
                {/* <StorageIcon /> */}
                <TextField
                  // type="number"
                  autoComplete="off"
                  fullWidth
                  required
                  id="outlined-required"
                  label="Milage"
                  value={milage}
                  onChange={(e) => setMilage(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="Milage"
                required
                value={milage}
                onChange={(e) => setMilage(e.target.value)}
              /> */}
              </div>

          

            
              <div>
                {/* <StorageIcon /> */}
                <TextField
                  // type="number"
                  autoComplete="off"
                  fullWidth
                  id="outlined-required"
                  label="InteriorColor"
                  value={interiorColor}
                  onChange={(e) => setInteriorColor(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="interiorColor"
                value={interiorColor}
                onChange={(e) => setInteriorColor(e.target.value)}
              /> */}
              </div>

              <div>
                {/* <StorageIcon /> */}
                <TextField
                  // type="number"
                  autoComplete="off"
                  fullWidth
                  id="outlined-required"
                  label="ExteriorColor"
                  value={exteriorColor}
                  onChange={(e) => setExteriorColor(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="exteriorColor"
                value={exteriorColor}
                onChange={(e) => setExteriorColor(e.target.value)}
              /> */}
              </div>

              <div>
                {/* <StorageIcon /> */}
                <TextField
                  autoComplete="off"
                  fullWidth
                  required
                  id="outlined-required"
                  label="Vin"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="Vin"
                required
                value={vin}
                onChange={(e) => setVin(e.target.value)}
              /> */}
              </div>

              
              <div>
                {/* <StorageIcon /> */}
                <TextField
                  autoComplete="off"
                  fullWidth
                  required
                  id="outlined-required"
                  label="Engine"
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                />
                {/* <input
                type="text"
                placeholder="Engine"
                required
                value={engine}
                onChange={(e) => setEngine(e.target.value)}
              /> */}
              </div>
              
             

              {/* {productPictures.length > 0
                ? productPictures.map((pic, item) => (
                    <div key={item}>{pic.name}</div>
                  ))
                : null} */}

              {/* <div id="createProductFormFile">
                <input
                  type="file"
                  accept="image/*"
                  onChange={createProductImagesChange}
                  multiple
                />
              </div>
              <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div> */}
             <div id="createProductFormFile">
             <Dropzone
                onDrop={(acceptedFiles, rejectedFile) =>
                  dispatch(uploadImages(acceptedFiles))
                }
                // onDrop={handleDrop}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
              {imageError && (
                <div className="text-sm ml-3 text-red-600 mt-1">
                  {imageError}
                </div>
              )}
                </div>

                {/* <div id="createProductFormImage">
                  {Array.from(productPictures).map((item) => {
                    return (
                      <img
                        src={item ? URL.createObjectURL(item) : null}
                        alt="Car Preview"
                      />
                    );
                  })}
                </div> */}

<div id="createProductFormImage">
  {Array.from(productPictures).map((item, index) => (
    <Image
      key={index}
      cloudName="jani-motors"
      publicId={item.name} // Assuming 'item.name' contains the Cloudinary publicId
      // width="300"
      crop="scale"
    />
  ))}
</div>


              <Button
                id="createProductBtn"
                type="submit"
                disabled={loading ? true : false}
              >
                Create
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateProduct;
