const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
  name: String,
  photo: String
});

const University = mongoose.model("University", universitySchema);
module.exports = University;
