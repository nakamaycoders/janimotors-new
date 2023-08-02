const CategoryModel = require('../Models/category');
const slugify = require('slugify')
const shortid = require('shortid')

const  createCategories = (categories,parentId = null) => {
     
    const categoryList = [];
    let category;
    if(parentId == null){
        category = categories.filter(cat => cat.parentId == undefined)
    }else{
        category = categories.filter(cat => cat.parentId == parentId)
    }
    for(let c of category){
        categoryList.push({
            _id: c._id,
            name: c.name,
            slug: c.slug,
            parentId: c.parentId,
            categoryImage:c.categoryImage,
            children: createCategories(categories,c._id)
        })
    }
    return categoryList;
}

exports.addCategory = (req,res) =>{

        const categoryObj = {
            name: req.body.name,
             slug: `${slugify(req.body.name)}-${shortid.generate()}`
            // createdBy: req.user._id,
        }
        if(req.file){
            categoryObj.categoryImage = process.env.IMG_API + '/public/' + req.file.filename;
        }

        if(req.body.parentId){
            categoryObj.parentId = req.body.parentId
        }
        const cat = new CategoryModel(categoryObj)
        cat.save((err,category)=>{
            if(err){
                return res.status(400).json({
                    err
                })
            }
            if (category) {
                return res.status(201).json({
                    success:true,
                    category
                })
            }
        })
    }

exports.getCategories = (req,res) =>{
    CategoryModel.find({}).exec((err,categories)=>{
        if(err){
            return res.status(400).json({
                err
            })
        }
            if(categories){
                const categoryList = createCategories(categories);
                return res.status(200).json({
                    success:true,
                    categoryList
                })
            }
        });
    }

    exports.updateCategories = async (req, res) => {
        const { _id, name, parentId, type } = req.body;
        const updatedCategories = [];
        if (name instanceof Array) {
          for (let i = 0; i < name.length; i++) {
            const category = {
              name: name[i],
              type: type[i],
            };
            if (parentId[i] !== "") {
              category.parentId = parentId[i];
            }
      
            const updatedCategory = await CategoryModel.findOneAndUpdate(
              { _id: _id[i] },
              category,
              { new: true }
            );
            updatedCategories.push(updatedCategory);
          }
          return res.status(201).json({ updateCategories: updatedCategories });
        } else {
          const category = {
            name,
            type,
          };
          if (parentId !== "") {
            category.parentId = parentId;
          }
          const updatedCategory = await CategoryModel.findOneAndUpdate({ _id }, category, {
            new: true,
          });
          return res.status(201).json({ updatedCategory });
        }
      };

      exports.deleteCategories = async (req, res) => {
        const { ids } = req.body.payload;
        const deletedCategories = [];
        for (let i = 0; i < ids.length; i++) {
          const deleteCategory = await CategoryModel.findOneAndDelete({
            _id: ids[i]._id,
          });
          deletedCategories.push(deleteCategory);
        }
      
        if (deletedCategories.length == ids.length) {
          res.status(201).json({ message: "Categories removed" });
        } else {
          res.status(400).json({ message: "Something went wrong" });
        }
      };