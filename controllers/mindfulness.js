const mindfulness = require("../models/mindfulness");
const User = require("../models/user");

async function add(req, res) {
  const user = await User.findById(req.user._id);
  console.log(req.body);
  const mindfulness = await mindfulness.create(req.body);
  user.mindfulness.push(mindfulness._id);
  await user.save();
  res.redirect("/weekOverview");
}

async function deletemindfulness(req, res) {
  const mindfulness = await mindfulness.findByIdAndDelete(
    req.params.mindfulnessId
  );

  res.redirect("/weekOverview");
}

async function update(req, res) {
  await mindfulness.findOneAndUpdate(
    { _id: req.params.mindfulnessId },
    req.body
  );
  res.redirect("/weekOverview");
}

// async function rendermindfulness(req, res) {
//   try {
//     const weekOptions = await mindfulness.schema.path("dayOfWeekOption")
//       .enumValues;
//     const options = await mindfulness.schema.path("mindfulnessOption")
//       .enumValues;
//     res.render("mindfulness", { weekOptions, options });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// }

// async function rendermindfulness(req, res) {
//   const user = await User.findById(req.user._id);
//   console.log(req.body);
//   const mindfulness = await Mindfulness.create(req.body);
//   user.mindfulness.push(mindfulness._id);
//   await user.save();
//   res.redirect("/weekOverview");
// }

module.exports = {
  add,
  deletemindfulness,
  update,
  // rendermindfulness,
};
