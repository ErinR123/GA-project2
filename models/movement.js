const mongoose = require("mongoose");
const movementSchema = new mongoose.Schema({
  movementOption: {
    type: String,
    enum: ["Walked", "Ran", "Swam", "Rode", "Rest Day"],
    required: true, 
  },
  date: {
    type: Date,
    default: Date.now, 
  },
});

module.exports = mongoose.model("Movement", movementSchema);
