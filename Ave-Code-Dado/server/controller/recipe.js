const recipePost = require("../models/recipePost.js");

const getRecipes = async (req, res) => {
  try {
    const postRecipe = await recipePost.find();

    res.status(200).json(postRecipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createRecipes = async (req, res) => {
  const body = req.body;

  const newRecipe = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getRecipes, createRecipes };
