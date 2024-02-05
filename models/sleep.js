const mongoose = require("mongoose");
const sleepSchema = new mongoose.Schema({
  Sleep: {
    type: String,
    enum: ['3 Hours', '4 Hours', '5 Hours', '6 Hours', '7 Hours', '8 Hours', '10 Hours']
  },
});

module.exports = mongoose.model("sleep", sleepSchema);
