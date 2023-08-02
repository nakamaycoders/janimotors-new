const Category = require('../Models/category')
const Product = require('../Models/product')

const createCategories = (categories, parentId = null) => {
  const categoryList = []
  let category
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined)
  } else {
    category = categories.filter((cat) => cat.parentId == parentId)
  }
  for (let c of category) {
    categoryList.push({
      _id: c._id,
      name: c.name,
      slug: c.slug,
      parentId: c.parentId,
      categoryImage: c.categoryImage,
      type: c.type,
      children: createCategories(categories, c._id),
    })
  }
  return categoryList
}

exports.initialData = async (req, res) => {
  const categories = await Category.find({}).exec()
  const products = await Product.find({})
    // createdBy: req.user._id
    .select('_id name condition price year stock vin model trim vin engine description milage interiorColor exteriorColor productPictures category')
    .populate({ path: 'category', select: '_id name' })
    .exec()
  // const orders = await Order.find({})
  //   .populate("items.productId", "name")
  //   .exec();
  res.status(200).json({
    categories: createCategories(categories),
    products,
    //   orders,
  })
}
