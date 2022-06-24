import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import styles1 from "./Form.css";
import useStyles from "./styles";
import { createRecipe, updateRecipe } from "../../actions/recipes";

const Form = ({ currentId, setCurrentId }) => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    description: "",
    tags: "",
    kcal: "",
    selectedFile: "",
  });

  const recipe = useSelector((state) =>
    currentId
      ? state.recipes.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const classes1 = styles1;

  useEffect(() => {
    if (recipe) setRecipeData(recipe);
  }, [recipe]);

  const clear = () => {
    setCurrentId(0);
    setRecipeData({
      name: "",
      description: "",
      tags: "",
      kcal: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createRecipe(recipeData));
      clear();
    } else {
      dispatch(updateRecipe(currentId, recipeData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Bearbeite" ${recipe.name}"` : "Erstelle ein Rezept"}
        </Typography>
        <TextField
          className={classes1.underline}
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={recipeData.name}
          onChange={(e) =>
            setRecipeData({ ...recipeData, name: e.target.value })
          }
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
        <TextField
          className="underline"
          name="tags"
          variant="outlined"
          label="Zutaten (Komma unterteilt)"
          fullWidth
          value={recipeData.tags}
          onChange={(e) =>
            setRecipeData({ ...recipeData, tags: e.target.value.split(",") })
          }
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
