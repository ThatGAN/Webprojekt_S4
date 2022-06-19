import React, { Component } from "react";
import HeaderAdd from "./Header_add.js";
import ConfirmAddButton from "./confirm_add_button.js";

class Snack extends Component {
  render() {
    return (
      <div>
        <HeaderAdd titel="Snack" />
        <ConfirmAddButton />
      </div>
    );
  }
}

export default Snack;
