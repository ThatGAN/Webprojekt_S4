const express = require("express");
const mongoose = require("mongoose");

const {
  getRecipe,
  getRecipes,
  createRecipe,
  updateRecipe,
  likeRecipe,
  deleteRecipe,
  getRecipesBySearch,
} = require("../controller/recipe.js");

const router = express.Router();
const { auth } = require("../middleware/auth.js");

router.get("/search", getRecipesBySearch);
router.get("/", getRecipes);
router.get("/:id", getRecipe);

router.post("/", auth, createRecipe);
router.patch("/:id", auth, updateRecipe);
router.delete("/:id", auth, deleteRecipe);
router.patch("/:id/likeRecipe", auth, likeRecipe);
module.exports = router;
