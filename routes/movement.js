const express = require("express");
const router = express.Router();
const Movement = require("../models/movement");

router.get("/", async (req, res) => {
    try {
      const options = await Movement.schema.path("Movement").enumValues;
      res.render("movement", { options });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });


module.exports = router;