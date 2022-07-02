import React, { Component } from "react";

class ConfirmAddButton extends Component {
  render() {
    return (
      <div className="row brown lighten-2">
        <div className="col s11"></div>
        <div className="col s1">
          <a className="btn-floating btn-large waves-effect waves-light green right">
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    );
  }
}

export default ConfirmAddButton;
