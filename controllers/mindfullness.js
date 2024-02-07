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
  const mindfullness = await Mindfullness.findByIdAndDelete(
    req.params.mindfullnessId
  );

  res.redirect("/weekOverview");
}

async function update(req, res) {
  await Mindfullness.findOneAndUpdate(
    { _id: req.params.mindfullnessId },
    // update object with updated properties
    req.body
    // options object with new: true to make sure updated doc is returned
  );
  res.redirect("/weekOverview");
}

async function renderMindfullness(req, res) {
  try {
    const weekOptions = await Mindfullness.schema.path("dayOfWeekOption")
      .enumValues;
    const options = await Mindfullness.schema.path("mindfullnessOption")
      .enumValues;
    res.render("mindfullness", { weekOptions, options });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  add,
  deleteMindfullness,
  update,
  renderMindfullness,
};
