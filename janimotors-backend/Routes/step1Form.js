const express = require("express");
const step1 = require("../Models/step1")

const router = express.Router();

router.use(express.json());

router.post("/form/create",async (req, res) =>{
    let data = new step1(req.body);
    const result = await data.save();
    console.log(result)
    res.send(result);
} );

// router.listen(5000);
module.exports = router;
