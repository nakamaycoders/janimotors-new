const express = require("express");
const { createContactForm, deleteContactFormById, getContactDetailsById,getContactForm, updateDetails } = require("../Controllers/contact");

const router = express.Router();

router.post('/contact',createContactForm);
router.get('/contact/information',getContactForm);
router.delete('/contact/delete/:id',deleteContactFormById);
router.get('/contact/information/:id',getContactDetailsById);
router.patch('/contact/update/:id',updateDetails);

module.exports = router;