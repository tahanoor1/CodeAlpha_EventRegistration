const express = require("express");
const router = express.Router();

const {
  registerEvent,
  getRegistrations,
  deleteRegistration,
} = require("../controllers/registration");

router.post("/", registerEvent);

router.get("/", getRegistrations);

router.delete("/:id", deleteRegistration);

module.exports = router;