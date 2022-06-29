// const mongoose = import('mongoose');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  kcal: Number,
  selectedFile: String,

  likes: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("recipePost", recipeSchema);
