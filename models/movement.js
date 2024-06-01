const mongoose = require("mongoose");
const movementSchema = new mongoose.Schema({
  movementOption: {
    type: String,
    enum: ["Walked", "Ran", "Swam", "Rode", "Rest Day"],
  },
});

module.exports = mongoose.model("Movement", movementSchema);
