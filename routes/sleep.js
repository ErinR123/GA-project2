const express = require("express");
const router = express.Router();

const Sleep = require("../models/sleep");

const sleepCtrl = require("../controllers/sleep");

router.get("/", async (req, res) => {
  try {
    const options = await Sleep.schema.path("sleepOption").enumValues;
    res.render("sleep", { options });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", sleepCtrl.add);

router.delete("/:sleepId", sleepCtrl.deleteSleep);

router.put("/:sleepId", sleepCtrl.update);

module.exports = router;
