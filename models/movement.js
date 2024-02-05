const mongoose = require("mongoose");
const movementSchema = new mongoose.Schema({
  Movement: {
    type: String,
    enum: ['Walk', 'Run', 'Swim', 'Ride', 'Rest',]
  },
});

module.exports = mongoose.model("movement", movementSchema);