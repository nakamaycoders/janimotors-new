const step1Model = require("../Models/step1");


exports.step1Model = (req, res) => {
  const {
    fname, 
    lname,
    mname,
    phone,
    email
  } = req.body;
  
  const step1 = new step1Model({
    fname, 
    lname,
    mname,
    phone,
    email
  });
  step1.save((err, step1) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    if (step1) {
      return res.status(201).json({
        step1,
        file: req.files,
      });
    }
  });
};