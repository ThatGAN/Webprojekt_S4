import React, { Component } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Header from "../../../Header";
import App from "../../../App";

class Rezepte extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        <div>
          <Container maxidth="lg">
            <AppBar>
              <Typography variant="h2" align="center">
                Rezepte
              </Typography>
              {/* <img src={rezepte} alt="rezepte" height="60"></img> */}
            </AppBar>
          </Container>
        </div>
      </>
    );
  }
}

export default Rezepte;
