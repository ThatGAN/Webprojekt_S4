const recipePost = require("../models/recipePost.js");

const getRecipes = async (req, res) => {
  try {
    const postRecipe = await recipePost.find();

    res.status(200).json(postRecipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await recipePost.findById(id);

    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createRecipe = async (req, res) => {
  const { name, description, tags, kcal, selctedFile } = req.body;

  const newRecipePost = new recipePost({
    name,
    description,
    tags,
    kcal,
    selctedFile,
  });

  try {
    await newRecipePost.save();

    res.status(201).json(newRecipePost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getRecipes, getRecipe, createRecipe };
