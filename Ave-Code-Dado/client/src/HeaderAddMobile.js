import React, { Component } from "react";
import "./css/HeaderAddMobile.css";

function HeaderAddMobile(props) {
  return (
    <nav>
      <div className="nav-wrapper teal green z-depth-1">
        <a className="brand-logo center">{props.titel}</a>

        <a
          href="/"
          className=" btn-large waves-effect waves-light teal green z-depth-0 button"
        >
          <i class="material-icons">arrow_back</i>
        </a>
      </div>
    </nav>
  );
}

export default HeaderAddMobile;
