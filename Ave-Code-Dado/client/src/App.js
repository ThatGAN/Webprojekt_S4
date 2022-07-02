import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "./actions/recipes";
import "./App.css";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Circle from "./Progressbar-semicircle.js";
import AppControlsInputs from "./components/AppControls/AppControlsInputs";
import AppControlsDelete from "./components/AppControls/AppControlsDelete";
import AppControlsCounter from "./components/AppControls/AppControlsCounter";
import AppMealsList from "./components/AppMealsList/AppMealsList.js";
import AppMealsFilter from "./components/AppMealsFilter/AppMealsFilter.js";
import { BrowserView, MobileView } from "react-device-detect";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceworker.js")
    .then((regis) => console.log("service worker registered", regis))
    .catch((error) => console.log("service worker not registered", error));
}

function App() {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setcalories] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const total = meals
    .map((meal) => meal.calories)
    .reduce((acc, value) => acc + +value, 0);

  const fabOptions = { direction: "left" };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".fixed-action-btn");
      M.FloatingActionButton.init(elems, fabOptions);
    });
  }, []);

  return (
    <div className="App" id="app">
      <BrowserView>
        <Header />
      </BrowserView>
      <MobileView>
        <HeaderMobile />
      </MobileView>

      <div className="row transparent">
        <div className="col s12 card-panel transparent z-depth-0"></div>
        <div className="col s12 card-panel transparent z-depth-0"></div>
        <div className="col s12 card-panel transparent z-depth-0">
          <Circle
            score={50}
            color="#669999"
            orientation="up"
            width="15"
            diameter="300"
            className="circle"
          />
        </div>
        <div className="col s12 card-panel transparent z-depth-0 kalorien">
          {" "}
          <AppControlsCounter total={total} />{" "}
        </div>
        <div className="col s1 card-panel transparent z-depth-0 "></div>
        <div className="col s10 card-panel white z-depth-0 whiteBox ">
          <div className="col s10 card-panel white z-depth-0 whiteBox "></div>
          <div className="col s1 card-panel transparent z-depth-0 whiteBox "></div>
          <table className="centered">
            <thead>
              <tr>
                <th>Gegessen </th>
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

      <div className="row transparent lighten-2">
        <div className="col s12 card-panel transparent z-depth-0">
          <h5 className="center-align heute"> Heute </h5>
        </div>
        <div className="col s1 card-panel transparent z-depth-0"></div>
        <div className="col s4 white  whiteBox">
          {" "}
          <h6 className="center-align">Frühstück</h6>
          <p className="center-align">123 Kalorien</p>{" "}
        </div>
        <div className="col s2 card-panel transparent z-depth-0"></div>
        <div className="col s4 white whiteBox">
          {" "}
          <h6 className="center-align">Mittagessen</h6>
          <p className="center-align">123 Kalorien</p>
        </div>
        <div className="col s12 card-panel transparent z-depth-0"></div>
        <div className="col s12 card-panel transparent z-depth-0"></div>
        <div className="col s1 card-panel transparent z-depth-0"></div>
        <div className="col s4 white whiteBox">
          {" "}
          <h6 className="center-align">Abendessen</h6>{" "}
          <p className="center-align">123 Kalorien</p>
        </div>
        <div className="col s2 card-panel transparent z-depth-0"></div>
        <div className="col s4 white whiteBox">
          {" "}
          <h6 className="center-align">Snacks</h6>{" "}
          <p className="center-align">123 Kalorien</p>
        </div>
      </div>

      <div className="fixed-action-btn horizontal">
        <a className="btn-floating red btn-large">
          <i className="material-icons large">add</i>
        </a>

        <ul>
          <li>
            <a href="/addFruehstueck" className="btn-floating blue">
              <i className="material-icons"> coffee</i> {/* Frühstück*/}
            </a>
          </li>
          <li>
            <a href="/addMittagessen" className="btn-floating blue">
              <i className="material-icons"> lunch_dining</i> {/* Mittag*/}
            </a>
          </li>
          <li>
            <a href="/addAbendessen" className="btn-floating blue">
              <i className="material-icons"> restaurant</i>
              {/* Abendessen*/}
            </a>
          </li>
          <li>
            <a href="/addSnack" className="btn-floating blue">
              <i className="material-icons"> icecream</i>
              {/* Snacks*/}
            </a>
          </li>
          <li>
            <a href="addAktivitaeten" className="btn-floating blue">
              <i className="material-icons"> fitness_center</i>{" "}
              {/* Aktivitäten*/}
            </a>
          </li>
          <li>
            <a href="/addGewicht" className="btn-floating blue">
              <i className="material-icons"> monitor_weight</i> {/* Gewicht*/}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
