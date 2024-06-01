const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,

    mindfulness: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "mindfulness",
      },
    ],
    sleep: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sleep",
      },
    ],
    movement: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movement",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
