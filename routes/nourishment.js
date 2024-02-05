const express = require("express");
const router = express.Router();
const nourishmentCtrl = require("../controllers/nourishment");
const Nourishment = require("../models/nourishment");




router.get("/", async (req, res) => {
    try {
      const options = await Nourishment.schema.path("nourishmentOption").enumValues;
      res.render("nourishment", { options });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

router.post("/", nourishmentCtrl.add);
module.exports = router;