const express = require("express");
const { createTradeInForm, deleteTradeInFormById, getTradeInDetailsById,getTradeInForm,updateTradeInDetails } = require("../Controllers/tradeIn");

const router = express.Router();

router.post('/trade-in',createTradeInForm);
router.get('/trade-in/information',getTradeInForm);
router.delete('/trade-in/delete/:id',deleteTradeInFormById);
router.get('/trade-in/information/:id',getTradeInDetailsById);
router.patch('/trade-in/update/:id',updateTradeInDetails);


module.exports = router;