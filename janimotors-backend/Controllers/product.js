const Product = require("../Models/product");
const category = require("../Models/category")
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const ApiFeatures = require("../utils/apifeatures");
const slugify = require('slugify');
const path = require("path");
const fs = require('fs');
const { dir } = require("console");

// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async(req, res, next) => {

  const {
    name,
    price,
    engine,
    trim,
    vin,
    condition,
    interiorColor,
    exteriorColor,
    milage,
    stock,
    model,
    make,
    year,
    description,
    category,
  } = req.body;

 

  let productPictures = [];
  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    engine,
    model,
    condition,
    trim,
    vin,
    interiorColor,
    exteriorColor,
    milage,
    make,
    stock,
    year,
    description,
    productPictures:productPictures,
    category,
    // createdBy: req.user._id,
  });
  
  product.save((err, product) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    if (product) {
      return res.status(201).json({
        product,
        // file: req.files,
      });
    }
  });
});

//get product by slug
exports.getProductsBySlug = (req, res) => {
  // return next(new ErrorHander("this is my temp alert error",500))
  
  // const resultPerPage = 8;
  // const productsCount =  Product.countDocuments();
  
  const { slug } = req.params;
  category.findOne({ slug: slug })
  .select("_id")
  .exec((err, category) => {
    if (err) {
      return res.status(400).json({err});
    }
    if (category) {
      Product.find({ category: category._id }).exec((error, product) => {
          if (error) {
            return res.status(400).json({
              error,
            });
          } else {
            res.status(200).json({
              success:true,
              product,
              // productsCount,
            });
          }
        });
      }
    });
};

// Get All Product
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
  .search()
  .filter()
 
  let products = await apiFeature.query;

  // let filteredProductsCount = products.length;
  
  // apiFeature.pagination(resultPerPage);
  
  // products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
    // productsCount,
    // resultPerPage,
    // filteredProductsCount,
  });
});

// Get All Product (Admin)
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const { productId } = req.params;
  const product = await Product.findOne({_id: productId});
  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  const {
    name,
    price,
    engine,
    model,
    condition,
    trim,
    vin,
    interiorColor,
    exteriorColor,
    milage,
    stock,
    year,
    description,
    category,
  } = req.body;

  

  if(product){
    product.name = name;
    product.slug = slugify(name);
    product.price = price;
    product.engine = engine;
    product.model = model;
    product.condition = condition;
    product.trim =  trim;
    product.vin =   vin;
    product.interiorColor = interiorColor;
    product.exteriorColor = exteriorColor;
    product.milage = milage;
    product.stock =   stock;
    product.year =  year;
    product.description = description;
    product.category =category;
    
    const updatedProduct = await product.save();
    res.json(updatedProduct)
  }else{
      return next(new ErrorHander("Product not found", 404));
    }
  
});

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  // let del = fs.unlinkSync(path)
  // console.log(del)

  // let productPictures = []
  
 
// MAIN_URL = http://localhost:5000
// console.log("ppp>>",product.productPictures)
// product.productPictures.forEach(item => {
//   // console.log("item>>>>",item)

//   const path = `C:/Users/zubai/OneDrive/Documents/GitHub/janimotors1/back-end/uploads/${item.img}`
//       fs.unlinkSync(path,(err)=>{
//         if(err){
//           console.log(err)
//         }
//       })
// });


  // ,(err)=>{
  //   if(err){
  //     console.log(err)
  //     return
  //   }
  // })
  // console.log("pp>>>",product.productPictures[0].img)
  // console.log(path.join(app,__dirname,`${product.productPictures[0].img}`))
  // ,(err)=>{
  //   if(err){
  //     console.log(err)
  //     return
  //   }
  // })

  // fs.unlink(req.files[0].path, (err)=>{
  //   if(err){
  //     console.log(err)
  //     return
  //   }
  // })

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }
  // console.log("fileNAME>>>>>>>",req.files[0].path)
  // console.log(product)
  
  // const path = "/uploads/"+files.filename
  // fs.unlinkSync(path)
  await product.remove();

  res.status(201).json({
    success: true,
    message: "Product Delete Successfully",
  });
});


