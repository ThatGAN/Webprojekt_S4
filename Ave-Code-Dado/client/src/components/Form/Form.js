import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import useStyles from "./styles";
import { createRecipe, updateRecipe } from "../../actions/recipes";
import { Camera } from "react-camera-pro";

const Form = ({ currentId, setCurrentId }) => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    tags: "",
    kcal: "",
    selectedFile: "",
  });

  const recipe = useSelector((state) =>
    currentId
      ? state.recipes.recipes.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!recipe?.title) clear();
    if (recipe) setRecipeData(recipe);
  }, [recipe]);

  const clear = () => {
    setCurrentId(0);
    setRecipeData({
      title: "",
      description: "",
      tags: [],
      kcal: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(
        createRecipe({ ...recipeData, name: user?.result?.name }, navigate)
      );
      clear();
    } else {
      dispatch(
        updateRecipe(currentId, { ...recipeData, name: user?.result?.name })
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Bitte Anmelden um eingene Rezepte einzustellen und Rezepte anderer zu
          Liken
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setRecipeData({ ...recipeData, tags: [...recipeData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setRecipeData({
      ...recipeData,
      tags: recipeData.tags.filter((tag) => tag !== chipToDelete),
    });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Bearbeite" ${recipe.title}"` : "Erstelle ein Rezept"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={recipeData.title}
          onChange={(e) =>
            setRecipeData({ ...recipeData, title: e.target.value })
          }
          style={{ borderBottom: "0px" }}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Rezeptanweisungen"
          fullWidth
          multiline
          minRows={6}
          value={recipeData.description}
          onChange={(e) =>
            setRecipeData({ ...recipeData, description: e.target.value })
          }
        />
        <ChipInput
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={recipeData.tags}
          onAdd={(chip) => handleAddChip(chip)}
          onDelete={(chip) => handleDeleteChip(chip)}
        />
        <TextField
          className="underline"
          name="kcal"
          variant="outlined"
          label="kcal"
          fullWidth
          value={recipeData.kcal}
          onChange={(e) =>
            setRecipeData({ ...recipeData, kcal: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setRecipeData({ ...recipeData, selectedFile: base64 })
            }
          />
          <div>
            <Camera ref={camera} />
            <button onClick={() => setImage(camera.current.takePhoto())}>
              Take photo
            </button>
            <img src={image} alt="Taken photo" />
          </div>
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
