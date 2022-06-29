const RecipePost = require("../models/recipePost.js");
const mongoose = require("mongoose");

const getRecipes = async (req, res) => {
  try {
    const postRecipe = await RecipePost.find();

    res.status(200).json(postRecipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await RecipePost.findById(id);

    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createRecipe = async (req, res) => {
  const { title, description, tags, kcal, selectedFile } = req.body;

  const newRecipePost = new RecipePost({
    title,
    description,
    tags,
    kcal,
    selectedFile,
  });

  try {
    await newRecipePost.save();

    res.status(201).json(newRecipePost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { title, description, tags, kcal, selectedFile } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedRecipe = {
    title,
    description,
    tags,
    kcal,
    selectedFile,
    _id: id,
  };

  await RecipePost.findByIdAndUpdate(id, updatedRecipe, { new: true });

  res.json(updatedRecipe);
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await RecipePost.findByIdAndRemove(id);

  res.json({ message: "Recipe deleted successfully." });
};

const likeRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No recipe with id: ${id}`);

  const recipe = await RecipePost.findById(id);

  const updatedRecipe = await RecipePost.findByIdAndUpdate(
    id,
    { likeCount: recipe.likeCount + 1 },
    { new: true }
  );

  res.json(updatedRecipe);
};

module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  likeRecipe,
};
