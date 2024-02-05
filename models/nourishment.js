const mongoose = require("mongoose");
const nourishmentSchema = new mongoose.Schema({
  nourishmentOption: {
    type: String,
    enum: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
  },
});

module.exports = mongoose.model("Nourishment", nourishmentSchema);