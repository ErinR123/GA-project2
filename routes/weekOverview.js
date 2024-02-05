const express = require("express");
const router = express.Router();
const mindfullnessModel = require('../models/mindfullness');
const User = require("../models/user");


router.get("/", async (req, res) => {
    // const user = req.user._id
    // const mindfullnessItems = mindfullnessModel.find({ user }) (get all mindfullnessItems with that user)
    const user = await User.findById(req.user._id).populate("mindfullness");

    // pass that to weekOverview view
    res.render('weekOverview', {user});

});

module.exports = router;