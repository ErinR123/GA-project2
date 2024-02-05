const Mindfullness = require("../models/mindfullness");

async function add(req, res) {
  // Update this line because now we need the _id of the new movie
  const mindfullness = await Mindfullness.create(req.body);
  // Redirect to the new movie's show functionality
  res.redirect("/weekOverview");
}

module.exports = {
  add,
}