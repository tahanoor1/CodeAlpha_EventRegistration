const Event = require("../models/event");

// Add Event
async function addEvent(req, res) {
  try {
    const { title, description, date, location } = req.body;

    const event = await Event.create({
      title,
      description,
      date,
      location,
    });

    return res.status(201).json({
      message: "Event Added Successfully",
      event,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

// Get All Events
async function getEvents(req, res) {
  try {
    const events = await Event.find();

    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  addEvent,
  getEvents,
};