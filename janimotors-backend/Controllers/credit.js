const Credit = require('../Models/credit')
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.postCredit = catchAsyncErrors(async(req, res, next) => {
    const {
      fName,
      lName,
      mName,
      Suffix,
      homeNum,
      cellNum,
      email,
      Vemail,
      rr,
      box,
      street,
      StreetName,
      StreetOptional,
      apt,
      zip,
      city,
      State,
      House,
      Year,
      Month,
      Mortgage,
      Dob,
      SSN,
      EmploymentStatus,
      SelectHousingStatus,
      Employer,
      WorkTitle,
      WorkPhone,
      yearss,
      monthss,
      SelfWorkPhone,
      Selfyear,
      Selfmonths,
      EmpStatus,
      PerYear,
    } = req.body;
  
  
    const creditData = new Credit({
      fName,
      lName,
      mName,
      Suffix,
      homeNum,
      cellNum,
      email,
      Vemail,
      rr,
      box,
      street,
      StreetName,
      StreetOptional,
      apt,
      zip,
      city,
      State,
      House,
      Year,
      Month,
      Mortgage,
      Dob,
      SSN,
      EmploymentStatus,
      SelectHousingStatus,
      Employer,
      WorkTitle,
      WorkPhone,
      yearss,
      monthss,
      SelfWorkPhone,
      Selfyear,
      Selfmonths,
      EmpStatus,
      PerYear,
    });
    
    creditData.save((err, data) => {
      if (err) {
        return res.status(400).json({
          err,
        });
      }
      if (data) {
        return res.status(201).json({
            creditData,
        });
      }
    });
  });

exports.getCredit =  catchAsyncErrors(async(req,res,next) => {
    const creditInfo = await Credit.find();
  
    res.status(201).json({
      success: true,
      creditInfo,
    });
});

exports.deleteCreditFormById = catchAsyncErrors(async (req, res, next) => {
  const result = await Credit.findById(req.params.id);
  if (!result) {
    return next(new ErrorHander("Something Went Wrong", 400));
  }

  await result.remove();

  res.status(201).json({
    success: true,
    message: "Deleted Successfully",
  });
});

exports.getCreditDetailsById = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const result = await Credit.findOne({ _id: id });
  if (!result) {
    return next(new ErrorHander("Not found", 404));
  }
  res.status(200).json({
    success: true,
    result,
  });
});

exports.updateCreditDetails = catchAsyncErrors(async (req, res, next) => {
  const updatedCreditData = await Credit.findByIdAndUpdate(
    req.params.id,
    { view: "read" },
    {
      new: true,
      runValidators: true,
    }
  );
  try {
    res.status(200).json({
      status: "Success",
      data: {
        updatedCreditData,
      },
    });
  } catch (err) {
    console.log(err);
  }
});
