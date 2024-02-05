const Nourishment = require("../models/nourishment");

async function add(req, res) {
  // Update this line because now we need the _id of the new movie
  const nourishment = await Nourishment.create(req.body);
  // Redirect to the new movie's show functionality
  res.redirect("/weekOverview");
}

module.exports = {
  add,
}