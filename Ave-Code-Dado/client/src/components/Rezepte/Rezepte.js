import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Rezept from "./Rezept/Rezept";
import useStyles from "./styles";

const Rezepte = ({ setCurrentId }) => {
  const { recipes, isLoading } = useSelector((state) => state.recipes);
  const classes = useStyles();

  if (!recipes.length && !isLoading) return "No recipes";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {recipes?.map((recipe) => (
        <Grid key={recipe._id} item xs={12} sm={12} md={6} lg={6}>
          <Rezept recipe={recipe} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Rezepte;
