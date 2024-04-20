const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  login: String,
  password: String,
  role: String,
  showName: Boolean,
  raiting: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
