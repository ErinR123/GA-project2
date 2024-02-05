const Sleep = require("../models/sleep");

async function add(req, res) {
  // Update this line because now we need the _id of the new movie
  const sleep = await Sleep.create(req.body);
  // Redirect to the new movie's show functionality
  res.redirect("/weekOverview");
}

module.exports = {
  add,
}