import { getRecipes } from "../../actions/recipes";
import React, { useState, useEffect, Component } from "react";
import { Container, Grow, Grid } from "@material-ui/core";

import { useDispatch } from "react-redux";
import Rezepte from "../../components/Rezepte/Rezepte";
import Form from "../../components/Form/Form";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [currentId, dispatch]);
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
  </Grow>;
};

export default Home;
