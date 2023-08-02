const Contact = require("../Models/contact");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createContactForm = (req, res) => {
  const { firstName, lastName, email, phone, message, view } = req.body;

  const contact = new Contact({
    firstName,
    lastName,
    email,
    phone,
    message,
    view,
  });
  contact.save((err, data) => {
    if (err) {
      return res.status(400).json({ err });
    }
    if (data) {
      return res.status(201).json({
        contact,
      });
    }
  });
};

exports.getContactForm = async (req, res) => {
  const contactInfo = await Contact.find();

  res.status(201).json({
    success: true,
    contactInfo,
  });
};

exports.getContactDetailsById = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findOne({ _id: id });
  if (!result) {
    return next(new ErrorHander("Not found", 404));
  }
  res.status(200).json({
    success: true,
    result,
  });
});

exports.deleteContactFormById = catchAsyncErrors(async (req, res, next) => {
  const result = await Contact.findById(req.params.id);
  if (!result) {
    return next(new ErrorHander("Something Went Wrong", 400));
  }

  await result.remove();

  res.status(201).json({
    success: true,
    message: "Deleted Successfully",
  });
});

exports.updateDetails = catchAsyncErrors(async (req, res, next) => {
  const updatedData = await Contact.findByIdAndUpdate(
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
