const express = require("express");
const {
  updateProduct,
  getAllProducts,
  getAdminProducts,
  getProductsBySlug,
  createProduct,
  deleteProduct,
  getProductDetails,
} = require("../Controllers/product");

const multer = require("multer");
const path = require("path");
const shortid = require("shortid");
const router = express.Router();

const storage = multer.diskStorage({
    destination:  (req, file, cb)=> {
      cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename:  (req, file, cb)=> {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });
const upload = multer({storage})

// router.post("/product/create",upload.array("productPicture"),addProducts);
// router.get("/products/:slug", getProductsBySlug);
// router.post("/products/getProducts",getProducts);
// router.get("/product/:productId", getProductDetailsById);
// router.post("/product/delete/:productId",deleteProducts);


router.route("/view-all-inventories").get(getAllProducts);

router
  .route("/admin/products")
  .get(getAdminProducts);
  
  // upload.array("productPicture"),
router
.post("/admin/product/new",upload.array("productPictures"),createProduct)

router.get("/products/:slug", getProductsBySlug);

router
  .route("/admin/product/:id")
  .put(updateProduct)
  .delete(deleteProduct);

router.route("/product/:productId").get(getProductDetails);


module.exports = router;
