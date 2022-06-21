import React, { Component } from "react";

function HeaderAddMobile(props) {
  return (
    <nav>
      <div class="nav-wrapper teal green z-depth-1">
        <a class="brand-logo center">{props.titel}</a>
        
        <a href="/" class=" btn-large waves-effect waves-light teal green z-depth-0"><i class="material-icons">arrow_back</i></a>
        
      </div>
    </nav>
  );
}

export default HeaderAddMobile;