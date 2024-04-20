const mongoose = require("mongoose");

const dormitoreSchema = mongoose.Schema({
    title: String,
    description: String,
    image: [
        {
            type: mongoose.SchemaTypes.String
        }
    ],
    rating: Number,
});

const Dormitore = mongoose.model("Dormitore", dormitoreSchema);
module.exports = Dormitore;
