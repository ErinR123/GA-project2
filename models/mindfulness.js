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
  },
});

module.exports = mongoose.model("Mindfulness", mindfulnessSchema);
