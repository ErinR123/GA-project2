const mongoose = require("mongoose");
const movementSchema = new mongoose.Schema({
  movementOption: {
    type: String,
    enum: ['Walk', 'Run', 'Swim', 'Ride', 'Rest',]
  },
});

module.exports = mongoose.model("Movement", movementSchema);

