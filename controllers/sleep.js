const Sleep = require("../models/sleep");
const User = require("../models/user");

async function add(req, res) {
    const user = await User.findById(req.user._id);
    console.log(req.body);
    const sleep = await Sleep.create(req.body);
    user.sleep.push(sleep._id);
    await user.save();
    res.redirect("/weekOverview");
  };
  

module.exports = {
  add,
  
};
