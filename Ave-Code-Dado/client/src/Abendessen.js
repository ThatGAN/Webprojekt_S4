import React, { Component } from "react";
import HeaderAdd from "./Header_add.js";
import ConfirmAddButton from "./confirm_add_button.js";

class Abendessen extends Component {
  render() {
    return (
      <div>
        <HeaderAdd titel="Abendessen" />
        <ConfirmAddButton />
      </div>
    );
  }
}

export default Abendessen;
