const express = require("express");

const { createJointForm, getJointForm, getJointDetailsById, deleteJointFormById, updateDetails } = require("../Controllers/JointForm");
const router = express.Router();

router.post('/joint/send',createJointForm);
router.get('/joint/information',getJointForm);
router.delete('/joint/delete/:id',deleteJointFormById);
router.get('/joint/information/:id',getJointDetailsById);
router.patch('/joint/update/:id',updateDetails);

module.exports = router;