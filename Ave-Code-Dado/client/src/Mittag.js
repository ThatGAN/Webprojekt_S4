import React, { Component } from "react";
import HeaderAdd from "./Header_add.js";
import ConfirmAddButton from "./confirm_add_button.js";

class Mittag extends Component {
  render() {
    return (
      <div>
        <HeaderAdd titel="Mittagessen" />
        <ConfirmAddButton />
      </div>
    );
  }
}

export default Mittag;
