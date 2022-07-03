const RecipePost = require("../models/recipePost.js");
const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();

const getRecipes = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

    const total = await RecipePost.countDocuments({});
    const recipes = await RecipePost.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      data: recipes,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getRecipesBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const recipes = await RecipePost.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: recipes });
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
  const recipe = req.body;
  recipe.likes = 0;

  const newRecipePost = new RecipePost({
    ...recipe,
    creator: req.userId,
    createdAt: new Date().toISOString(),
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
  const { title, description, zutaten, creator, tags, kcal, selectedFile } =
    req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedRecipe = {
    title,
    description,
    zutaten,
    creator,
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

  console.log(`id: ${id}`);

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No recipe with id: ${id}`);

  const recipe = await RecipePost.findById(id);

  const index = recipe.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    recipe.likes.push(req.userId);
  } else {
    recipe.likes = recipe.likes.filter((id) => id !== String(req.userId));
  }
  const updatedRecipe = await RecipePost.findByIdAndUpdate(id, recipe, {
    new: true,
  });

  // const updatedRecipe = await RecipePost.findByIdAndUpdate(
  //   id,
  //   { likes: recipe.likes + 1 },
  //   { new: true }
  // );

  res.json(updatedRecipe);
};

module.exports = {
  getRecipes,
  getRecipe,
  getRecipesBySearch,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  likeRecipe,
  router,
};
