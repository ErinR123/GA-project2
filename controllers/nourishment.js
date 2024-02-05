const Nourishment = require("../models/nourishment");
const User = require("../models/user");

async function add(req, res) {
    const user = await User.findById(req.user._id);
    console.log(req.body);
    const nourishment = await Nourishment.create(req.body);
    user.nourishment.push(nourishment._id);
    await user.save();
    res.redirect("/weekOverview");
  };
module.exports = {
  add,
}