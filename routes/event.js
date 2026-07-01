const express= require("express");

const router= express.Router();

const{
    addEvent,
    getEvents,
} = require("../controllers/event");

router.post("/add", addEvent);
router.get("/", getEvents);

module.exports= router;