const express = require('express');
const { addCategory, getCategories, updateCategories, deleteCategories } = require('../Controllers/category');
const router = express.Router()
const shortid = require('shortid');
const path = require('path')
const multer = require('multer');
const { requireLogin } = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });
const upload = multer({storage});


router.post('/category/create',requireLogin, upload.single("categoryImage"),addCategory);

router.get('/category/getCategories',getCategories)

//Update Category
router.post("/category/update",upload.array("categoryImage"),updateCategories);
//Delete Category
router.post("/category/delete",deleteCategories);

module.exports = router