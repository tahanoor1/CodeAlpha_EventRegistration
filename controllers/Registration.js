const Registration = require("../models/Registration");

// Register for Event
async function registerEvent(req, res) {
  try {
    const { name, email, event } = req.body;

    const registration = await Registration.create({
      name,
      email,
      event,
    });

    res.status(201).json({
      message: "Registration Successful",
      registration,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// Get All Registrations
async function getRegistrations(req, res) {
  try {
    const registrations = await Registration.find().populate("event");

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// Cancel Registration
async function deleteRegistration(req, res) {
  try {
    const { id } = req.params;

    await Registration.findByIdAndDelete(id);

    res.status(200).json({
      message: "Registration Cancelled",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  registerEvent,
  getRegistrations,
  deleteRegistration,
};