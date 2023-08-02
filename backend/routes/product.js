const express = require("express");
const {
  createProduct,
  getProducts,
  getSearchedProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  addToWishList,
  ratings,
  getProductsBySlug,
  getRatings,
  deleteRating
} = require("../controllers/product");
// const { authMiddleware,isAdmin } = require("../middlewares/authMiddleware");
// const {
//   authMiddleware,
//   isAdmin,
// } = require("../middlewares/forAdminPanel/authMiddleware");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { authMiddleware: adminAuthMiddleware, isAdmin: adminIsAdmin } = require("../middlewares/forAdminPanel/authMiddleware");
const {
  uploadImage,
  productImgResize,
} = require("../middlewares/uploadImages");
const { uploadImages } = require("../controllers/uplaodImages");
const router = express.Router();

router.get("/allProducts", getProducts);
router.get("/searchedProducts", getSearchedProducts);
router.post("/", adminAuthMiddleware, adminIsAdmin, createProduct);
router.get("/allrating", getRatings);
router.get("/detail/:id", getProduct);
router.get("/products/:slug/:region",getProductsBySlug);
router.put("/wishlist", adminAuthMiddleware, addToWishList);
router.put("/rating", adminAuthMiddleware, ratings);
router.delete("/delete/rating/:id", adminAuthMiddleware, adminIsAdmin, deleteRating);
router.put("/:id", adminAuthMiddleware, adminIsAdmin, updateProduct);
router.delete("/:id", adminAuthMiddleware, adminIsAdmin, deleteProduct);

module.exports = router;
