const express = require("express");
const {postCredit,getCredit,deleteCreditFormById,updateCreditDetails,getCreditDetailsById} = require("../Controllers/credit")
const router = express.Router();


router.post("/credit/send",postCredit);
router.get('/credit/information',getCredit);
router.get('/credit/information/:id',getCreditDetailsById);
router.delete('/credit/delete/:id',deleteCreditFormById);
router.patch('/credit/update/:id',updateCreditDetails);


module.exports = router;
