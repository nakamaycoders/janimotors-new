const express = require('express');
const { registerAdmin, login,logout } = require('../Controllers/Admin/admin');
const { registerValidation, isValidated, loginValidation } = require('../validators/Validation');
// const {requireLogin} = require('../middleware/auth');
const router = express.Router();

// router.post('/admin/register',registerValidation ,isValidated, registerAdmin);
router.post('/admin/login',loginValidation,isValidated,login);
router.post('/admin/logout',logout);

module.exports = router