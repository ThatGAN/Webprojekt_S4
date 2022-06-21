import React, { useState } from "react";


function Header() {


  return (
    <nav>
        <div class="nav-wrapper z-depth-1">
          <a href="/" class="brand-logo center">
            Av-Code-Dado
          </a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li>
              <a href="/profil">Profil</a>
            </li>
            <li>
              <a href="/fortschritt">Fortschritt</a>
            </li>
            <li>
              <a href="/rezepte">Rezepte</a>
            </li>
            <li>
              <a href="/tagebuch">Tagebuch</a>
            </li>
            <li>
              <a href="collapsible.html">Login/Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    
  );
}


export default Header;
