import React, { Component } from "react";
import { useSelector } from "react-redux";

import Header from "../../Header";
import useSytles from "./styles.js";

class Rezepte extends Component {
  render() {
    const recipes = useSelector((state) => state.recipes);
    const classes = useSytles();

    console.log(recipes);

    return <h1> Rezepte</h1>;
  }
}

export default Rezepte;
