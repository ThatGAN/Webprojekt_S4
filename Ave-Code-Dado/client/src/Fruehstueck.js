import React, { Component } from "react";
import HeaderAdd from "./Header_add.js";
import ConfirmAddButton from "./confirm_add_button.js";

class Fruestueck extends Component {
  render() {
    return (
      <div>
        <HeaderAdd titel="Frühstück" />
        <ConfirmAddButton />
      </div>
    );
  }
}

export default Fruestueck;
