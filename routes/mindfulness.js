const express = require("express");
const router = express.Router();
const Mindfulness = require("../models/mindfulness");
const mindfulnessCtrl = require("../controllers/mindfulness");

router.get("/", async (req, res) => {
    try {
      const options = await Mindfulness.schema.path("mindfulnessOption").enumValues;
  
      res.render("mindfulness", { options });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

router.post("/", mindfulnessCtrl.add);
router.delete("/:mindfulnessId", mindfulnessCtrl.deletemindfulness);
router.put("/:mindfulnessId", mindfulnessCtrl.update);

module.exports = router;
