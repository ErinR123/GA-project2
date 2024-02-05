const express = require("express");
const router = express.Router();
const Mindfullness = require("../models/mindfullness");
const mindfullnessCtrl = require("../controllers/mindfullness");
//  const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/",  async (req, res) => {
    try {
      const options = await Mindfullness.schema.path("mindfullnessOption").enumValues;
      res.render("mindfullness", { options });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  router.post("/",  mindfullnessCtrl.add);
  
module.exports = router;