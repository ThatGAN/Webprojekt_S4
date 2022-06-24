// const mongoose = import('mongoose');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  description: String,
  tags: [String],
  kcal: Number,
  selectedFile: String,

  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("recipePost", recipeSchema);
