import React, { Component } from 'react';

function Header_add(props) {
  return <nav>
  <div class="nav-wrapper z-depth-1">
<a class="brand-logo center">{props.titel}</a> 
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      <li><a href="/">Zurück</a></li>
      

    </ul>
  </div>
  </nav>;
}

export default Header_add;







