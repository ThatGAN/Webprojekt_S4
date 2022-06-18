import React, { Component, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "./actions/recipes";
import "./App.css";
import Header from "./Header";
class App extends Component {
  render() {
    return (
      <div class="App" id="app">
        <Header />

        <div class="row green">
          <div class="col s12 card-panel teal green z-depth-0">
            <h2 class="center-align">Kalorien</h2>
          </div>
          <div class="col s12 card-panel teal green z-depth-0">
            <table class="centered">
              <thead>
                <tr>
                  <th>Gegessen</th>
                  <th>Kalorien übrig</th>
                  <th>Verbrannt</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>1234</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row brown lighten-2">
          <div class="col s12 card-panel brown lighten-2 z-depth-0">
            <h4 class="center-align"> Heute </h4>
          </div>
          <div class="col s1 card-panel brown lighten-2 lighten-4 z-depth-0"></div>
          <div class="col s4 white">
            {" "}
            <h5 class="center-align">Frühstück</h5>
            <h6 class="center-align">123 Kalorien</h6>{" "}
          </div>
          <div class="col s2 card-panel brown lighten-2 lighten-4 z-depth-0"></div>
          <div class="col s4 white">
            {" "}
            <h5 class="center-align">Mittagessen</h5>
            <h6 class="center-align">123 Kalorien</h6>
          </div>
          <div class="col s12 card-panel brown lighten-2 z-depth-0"></div>
          <div class="col s12 card-panel brown lighten-2 z-depth-0"></div>
          <div class="col s1 card-panel brown lighten-2 lighten-4 z-depth-0"></div>
          <div class="col s4 white">
            {" "}
            <h5 class="center-align">Abendessen</h5>{" "}
            <h6 class="center-align">123 Kalorien</h6>
          </div>
          <div class="col s2 card-panel brown lighten-2 lighten-4 z-depth-0"></div>
          <div class="col s4 white">
            {" "}
            <h5 class="center-align">Snacks</h5>{" "}
            <h6 class="center-align">123 Kalorien</h6>
          </div>
        </div>

        <div class="fixed-action-btn horizontal">
          <a href="" class="btn-floating red btn-large">
            <i class="material-icons large">add</i>
          </a>

          <ul>
            <li>
              <a href="/addFruehstueck" class="btn-floating blue">
                <i class="material-icons"> coffee</i> {/* Frühstück*/}
              </a>
            </li>
            <li>
              <a href="/addMittagessen" class="btn-floating blue">
                <i class="material-icons"> lunch_dining</i> {/* Mittag*/}
              </a>
            </li>
            <li>
              <a href="/addAbendessen" class="btn-floating blue">
                <i class="material-icons"> restaurant</i>
                {/* Abendessen*/}
              </a>
            </li>
            <li>
              <a href="/addSnack" class="btn-floating blue">
                <i class="material-icons"> icecream</i>
                {/* Snacks*/}
              </a>
            </li>
            <li>
              <a href="addAktivitaeten" class="btn-floating blue">
                <i class="material-icons"> fitness_center</i> {/* Aktivitäten*/}
              </a>
            </li>
            <li>
              <a href="/addGewicht" class="btn-floating blue">
                <i class="material-icons"> monitor_weight</i> {/* Gewicht*/}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
