// const mongoose = import('mongoose');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  description: String,
  selectedFile: String,
  tag: [String],
  kcal: Number,

  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// const recipePost = mongoose.model("recipePost", recipeSchema);

// export default recipePost;
module.exports = mongoose.model("recipePost", recipeSchema);
