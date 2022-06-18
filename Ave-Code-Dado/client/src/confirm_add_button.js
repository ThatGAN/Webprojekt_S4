import React, { Component } from "react";

class Confirm_add_button extends Component {
  render() {
    return (
      <div class="row brown lighten-2">
        <div class="col s11"></div>
        <div class="col s1">
          <a class="btn-floating btn-large waves-effect waves-light green right">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    );
  }
}

export default Confirm_add_button;
