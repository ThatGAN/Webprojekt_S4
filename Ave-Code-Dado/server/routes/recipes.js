const express = require("express");
const mongoose = require("mongoose");

const {
  getRecipes,
  getRecipe,
  createRecipe,
  //   updateRecipe,
  //   likeRecipe,
  //   deleteRecipe,
} = require("../controller/recipe.js");

const router = express.Router();

router.get("/", getRecipes);
router.post("/", createRecipe);
router.get("/:id", getRecipe);
// router.patch("/:id", updateRecipe);
// router.delete("/:id", deleteRecipe);
// router.patch("/:id/likeRecipe", likeRecipe);
module.exports = router;
