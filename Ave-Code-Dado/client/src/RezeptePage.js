import React, { useState, useEffect, Component } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Header from "./Header";
import { useDispatch } from "react-redux";
import Rezepte from "./components/Rezepte/Rezepte";
import Form from "./components/Form/Form";
import { getRecipes } from "./actions/recipes";
import useStyles from "./styles";

const RezeptePage = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      <div>
        <Header className={classes.appBar} position="static" color="inherit" />
      </div>
      <Container className={classes.recipeContainer} maxWidth="lg">
        <Grow in>
          <Container>
            <Grid
              className={classes.mainContainer}
              container
              flexdirection="column-reverse"
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Rezepte setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};
// }

export default RezeptePage;
