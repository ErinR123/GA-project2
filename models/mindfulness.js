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
  dayOfWeekOption: {
    type: String,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
});

module.exports = mongoose.model("mindfulness", mindfulnessSchema);
