const mindfullness = require("../models/mindfullness");
const Mindfullness = require("../models/mindfullness");
const User = require("../models/user");

async function add(req, res) {
  const user = await User.findById(req.user._id);
  console.log(req.body);
  const mindfullness = await Mindfullness.create(req.body);
  user.mindfullness.push(mindfullness._id);
  await user.save();
  res.redirect("/weekOverview");
}

async function deleteMindfullness(req, res) {
  const mindfullness = await Mindfullness.findByIdAndDelete(req.params.mindfullnessId);

  

  res.redirect("/weekOverview");
}

module.exports = {
  add,
  deleteMindfullness,
};
