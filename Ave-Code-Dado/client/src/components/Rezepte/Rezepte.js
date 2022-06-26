import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Rezept from "./Rezept/Rezept";
import useSytles from "./styles.js";

const Rezepte = ({ setCurrentId }) => {
  const recipes = useSelector((state) => state.recipes);
  const classes = useSytles();

  console.log(recipes);

  return !recipes.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {recipes.map((recipe) => (
        <Grid key={recipe._id} item xs={12} sm={6} md={6}>
          <Rezept recipe={recipe} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Rezepte;
