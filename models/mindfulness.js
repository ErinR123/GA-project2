const mongoose = require("mongoose");

const mindfulnessSchema = new mongoose.Schema({
  mindfulnessOption: {
    type: String,
    enum: [
      "Meditated",
      "Time outside",
      "Read",
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
