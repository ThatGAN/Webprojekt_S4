import React, { useState, useEffect, Component } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Header from "./Header";
import { useDispatch } from "react-redux";
import Rezepte from "./components/Rezepte/Rezepte";
import Form from "./components/Form/Form";
import { getRecipes } from "./actions/recipes";

const RezeptePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      <div>
        <Header />
      </div>
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Rezepte />
                {/* setCurrentId={setCurrentId} */}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
                {/* currentId={currentId} setCurrentId={setCurrentId} */}
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
