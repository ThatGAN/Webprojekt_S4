import React, { Component } from "react";

function HeaderMobile() {


    return (
        <div>
            <nav>

                <div class="nav-wrapper">

                    <div class="container">

                        <a href="/" class="brand-logo">Av-Code-Dado</a>

                        <a href="#" class="sidenav-trigger button-collapse" data-target="slide_out"><i class="material-icons">menu</i></a>

                        <ul class="right hide-on-med-and-down">

                        <li><div class="user-view">
      <div class="background blue"></div>
      <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">Schön dich zu sehen!</span></a>
    </div></li>
                            <li> <a href="/profil">Profil </a></li>
                            <li> <a href="/fortschritt">Fortschritt </a></li>
                            <li> <a href="/rezepte">Rezepte </a></li>
                            <li> <a href="/tagebuch">Tagebuch </a></li>
                            <li> <a href="#">Login/Logout </a></li>

                            
                        </ul>

                    </div>

                </div>

            </nav>
            <ul class="sidenav" id="slide_out">

            <li><div class="user-view">
      <div class="background blue"></div>
      <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">Schön dich zu sehen!</span></a>
    </div></li>
                <li> <a href="/profil">Profil </a></li>
                <li> <a href="/fortschritt">Fortschritt </a></li>
                <li> <a href="/rezepte">Rezepte </a></li>
                <li> <a href="/tagebuch">Tagebuch </a></li>
                <li> <a href="#">Login/Logout </a></li>
            </ul>




        </div>



    );
}

export default HeaderMobile;