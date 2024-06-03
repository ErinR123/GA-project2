const Mindfulness = require("../models/mindfulness");
const User = require("../models/user");

async function add(req, res) {
  const user = await User.findById(req.user._id);
  console.log(req.body);
  const mindfulness = await Mindfulness.create(req.body);
  user.mindfulness.push(mindfulness._id);
  await user.save();
  res.redirect("/weekOverview");
}

async function deletemindfulness(req, res) {
  const mindfulness = await Mindfulness.findByIdAndDelete(
    req.params.mindfulnessId
  );

  res.redirect("/weekOverview");
}

async function update(req, res) {
  await Mindfulness.findOneAndUpdate(
    { _id: req.params.mindfulnessId },
    req.body
  );
  res.redirect("/weekOverview");
}



module.exports = {
  add,
  deletemindfulness,
  update,
};
