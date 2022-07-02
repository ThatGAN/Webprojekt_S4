import React, { Component } from "react";

function HeaderAdd(props) {
  return (
    <nav>
      <div className="nav-wrapper z-depth-1">
        <a className="brand-logo center">{props.titel}</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="/">Zurück</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderAdd;
