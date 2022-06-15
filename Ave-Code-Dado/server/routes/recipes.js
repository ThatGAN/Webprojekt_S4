const express = require("express");

const { getRecipes, createRecipes } = require("../controller/recipe.js");

const router = express.Router();

router.get("/", getRecipes);
router.post("/", createRecipes);

// export default router;
module.exports = router;
