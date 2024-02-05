const mongoose = require("mongoose");


const mindfullnessSchema = new mongoose.Schema({
  mindfullnessOption: {
    type: String,
    enum: ['Meditate', 'Time outside', 'Read', 'Spoke to a friend', 'Art']
  },

});

module.exports = mongoose.model("Mindfullness", mindfullnessSchema);