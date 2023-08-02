const Trade = require("../Models/tradeIn");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//hello is tis trrdae

exports.createTradeInForm = (req, res) => {
  const {
    yearOption,
    make,
    model,
    vin,
    bodystyle,
    trim,
    exteriorColor,
    interiorColor,
    Cylinders,
    Liters,
    Mileage,
    Transmission,
    LienHolder,
    EstimatedPayoff,
    AdditionalOptions,
    firstName,
    lastName,
    email,
    state,
    city,
    address,
    zip,
    phone,
    view,
  } = req.body;

  const trade = new Trade({
    yearOption,
    make,
    model,
    vin,
    bodystyle,
    trim,
    exteriorColor,
    interiorColor,
    Cylinders,
    Liters,
    Mileage,
    Transmission,
    LienHolder,
    EstimatedPayoff,
    AdditionalOptions,
    firstName,
    lastName,
    email,
    state,
    city,
    address,
    zip,
    phone,
    view,
  });
  trade.save((err, data) => {
    if (err) {
      return res.status(400).json({ err });
    }
    if (data) {
      return res.status(201).json({
        trade,
      });
    }
  });
};

exports.getTradeInForm = async (req, res) => {
  const tradeInfo = await Trade.find();

  res.status(200).json({
    success: true,
    tradeInfo,
  });
};

exports.getTradeInDetailsById = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const result = await Trade.findOne({ _id: id });
  if (!result) {
    return next(new ErrorHander("Not found", 404));
  }
  res.status(200).json({
    success: true,
    result,
  });
});

exports.deleteTradeInFormById = catchAsyncErrors(async (req, res, next) => {
  const result = await Trade.findById(req.params.id);
  if (!result) {
    return next(new ErrorHander("Something Went Wrong", 400));
  }

  await result.remove();

  res.status(201).json({
    success: true,
    message: "Deleted Successfully",
  });
});

exports.updateTradeInDetails = catchAsyncErrors(async (req, res, next) => {
  const updatedData = await Trade.findByIdAndUpdate(
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
        updatedData,
      },
    });
  } catch (err) {
    console.log(err);
  }
});
