const Movement = require("../models/movement");

async function add(req, res) {
  // Update this line because now we need the _id of the new movie
  const movement = await Movement.create(req.body);
  // Redirect to the new movie's show functionality
  res.redirect("/weekOverview");
}

module.exports = {
  add,
}