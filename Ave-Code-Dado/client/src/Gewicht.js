import React, { Component } from "react";
import HeaderAdd from "./Header_add.js";
import ConfirmAddButton from "./confirm_add_button.js";

class Gewicht extends Component {
  render() {
    return (
      <div>
        <HeaderAdd titel="Gewicht" />
        <ConfirmAddButton />
      </div>
    );
  }
}

export default Gewicht;
