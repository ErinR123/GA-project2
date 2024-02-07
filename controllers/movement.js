const Movement = require("../models/movement");
const User = require("../models/user");

async function add(req, res) {
  const user = await User.findById(req.user._id);
  console.log(req.body);
  const movement = await Movement.create(req.body);
  user.movement.push(movement._id);
  await user.save();
  res.redirect("/weekOverview");
}

async function deleteMovement(req, res) {
  const movement = await Movement.findByIdAndDelete(req.params.movementId);

  

  res.redirect("/weekOverview");
};

async function update(req, res) {
  await Movement.findOneAndUpdate(
    {_id: req.params.movementId},
    // update object with updated properties
    req.body,
    // options object with new: true to make sure updated doc is returned
  );
  res.redirect("/weekOverview");
}

module.exports = {
  add,
  deleteMovement,
  update,
};
