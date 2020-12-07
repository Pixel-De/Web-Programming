const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String, // turul ni
      required: true, //hooson baaj bolohgu
      unique: true, //dahin davtagdashgui
      trim: true, //hooson zai baival shahah
      minlength: 3, //hamgiin bagada avah temdegt
    },
  },
  {
    timestamps: true, //uussen, uurchlugdsun hugatsaag ni hadgalj avdag auto field
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
