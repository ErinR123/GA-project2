const Movement = require("../models/movement");
const User = require("../models/user");


async function add(req, res) {
    const user = await User.findById(req.user._id);
    console.log(req.body);
    const movement = await Movement.create(req.body);
    user.mindfullness.push(movement._id);
    await user.save();
    res.redirect("/weekOverview");
  };



module.exports = {
  add,
}