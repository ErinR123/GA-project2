const express = require("express");
const router = express.Router();
const Mindfullness = require("../models/mindfullness");
const User = require("../models/user");
const Movement = require("../models/movement");
const Sleep = require("../models/sleep")

router.get("/", async (req, res) => {
  
  const mindfullnessOptions = await Mindfullness.schema.path("mindfullnessOption").enumValues;
  const movementOptions = await Movement.schema.path("movementOption").enumValues;
  const sleepOptions = await Sleep.schema.path("sleepOption").enumValues;
  const weekOptions = await Mindfullness.schema.path("dayOfWeekOption").enumValues;
  const user = await User.findById(req.user._id)
    .populate("mindfullness")
    .populate("movement")
    .populate("sleep")
    

  res.render("weekOverview", { user, mindfullnessOptions, movementOptions, sleepOptions, weekOptions });
});



module.exports = router;
