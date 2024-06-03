const express = require("express");
const router = express.Router();
const mindfulness = require("../models/mindfulness");
const mindfulnessCtrl = require("../controllers/mindfulness");

router.get("/", mindfulnessCtrl.rendermindfulness);

router.post("/", mindfulnessCtrl.add);
router.delete("/:mindfulnessId", mindfulnessCtrl.deletemindfulness);
router.put("/:mindfulnessId", mindfulnessCtrl.update);

module.exports = router;
