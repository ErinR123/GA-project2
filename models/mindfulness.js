const mongoose = require("mongoose");

const mindfulnessSchema = new mongoose.Schema({
  mindfulnessOption: {
    type: String,
    enum: [
      "Meditate",
      "Time outside",
      "Read for 30 Minutes",
      "Spoke to a friend",
      "Art",
    ],
    required: true, 
  },
  date: {
    type: Date,
    default: Date.now, 
  },
});

module.exports = mongoose.model("mindfulness", mindfulnessSchema);
