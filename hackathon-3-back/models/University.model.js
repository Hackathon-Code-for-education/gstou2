const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
  name: String,
  image: [],
  email: String,
  siteUrl: String,
  news: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "UniversityNew",
    },
  ],
  institute: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Institute",
    },
  ],
  dormitory: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Dormitory",
  },
  docsImg: {
    type: String,
  },
  selectionCommittee: {
    mail: String,
    phone: String,
  },
  reviews: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Review",
    },
  ],
});

const University = mongoose.model("University", universitySchema);
module.exports = University;
