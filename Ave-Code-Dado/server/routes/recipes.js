const express = require("express");
const mongoose = require("mongoose");

const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  likeRecipe,
  deleteRecipe,
} = require("../controller/recipe.js");

const router = express.Router();
const { auth } = require("../middleware/auth.js");

router.get("/", getRecipes);
router.post("/", auth, createRecipe);
router.get("/:id", auth, getRecipe);
router.patch("/:id", auth, updateRecipe);
router.delete("/:id", auth, deleteRecipe);
router.patch("/:id/likeRecipe", auth, likeRecipe);
module.exports = router;
