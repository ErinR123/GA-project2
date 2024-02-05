const express = require("express");
const router = express.Router();
const nourishmentCtrl = require("../controllers/nourishment");



router.get("/", (req, res) => {
    res.render('nourishment',)
});

router.post("/", nourishmentCtrl.add);
module.exports = router;