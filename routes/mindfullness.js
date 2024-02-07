const express = require("express");
const router = express.Router();
const Mindfullness = require("../models/mindfullness");
const mindfullnessCtrl = require("../controllers/mindfullness");


router.get("/", mindfullnessCtrl.renderMindfullness);


  router.post("/",  mindfullnessCtrl.add);
  router.delete("/:mindfullnessId", mindfullnessCtrl.deleteMindfullness);
  router.put("/:mindfullnessId", mindfullnessCtrl.update);
 
module.exports = router;