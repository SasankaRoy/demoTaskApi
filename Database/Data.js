const mongoose = require("mongoose");

const DataSchecma = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("data", DataSchecma);
