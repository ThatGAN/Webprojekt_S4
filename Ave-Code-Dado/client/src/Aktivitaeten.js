import React, { Component } from "react";
import HeaderAdd from "./Header_add.js";
import ConfirmAddButton from "./confirm_add_button.js";

class Aktivitaeten extends Component {
  render() {
    return (
      <div>
        <HeaderAdd titel="Aktivitäten" />
        <ConfirmAddButton />
      </div>
    );
  }
}

export default Aktivitaeten;
