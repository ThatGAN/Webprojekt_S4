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
  const [calories, setCalories] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [gewicht, setGewichtName] = useState("");

  const addMealsHandler = () => {
    const oldMeals = meals ? [...meals] : [];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random() * 1000),
    };
    const newMeals = oldMeals.concat(meal);

    if (calories <= 0 || mealName === "") {
      alert("Feld darf nicht leer sein");
    } else {
      setMeals(newMeals);
      localStorage.setItem("meals", JSON.stringify(newMeals));
    }

    setMealName("");
    setCalories("");
    setGewichtName("");
  };

  const deleteMealHandler = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal) => meal.id !== id);

    setMeals(newMeals);
    localStorage.setItem("meals", JSON.stringify(newMeals));
  };

  const deleteAllMeals = () => {
    setMeals([]);
    localStorage.clear();
  };

  const total =
    meals !== null
      ? meals
          .map((meal) => meal.calories)
          .reduce((acc, value) => acc + +value, 0)
      : 0;

  useEffect(() => {
    const oldState = [...meals];
    if (selectedFilter === "Ascending") {
      const ascendingMeals = oldState.sort((a, b) => a.calories - b.calories);
      setMeals(ascendingMeals);
    } else if (selectedFilter === "Descending") {
      const descendingMeals = oldState.sort((a, b) => b.calories - a.calories);
      setMeals(descendingMeals);
    }
  }, [selectedFilter]);

  useEffect(() => {
    const localStorageMeals = JSON.parse(localStorage.getItem("meals"));
    setMeals(localStorageMeals);
  }, [setMeals]);

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
        <div class="col s1 card-panel transparent z-depth-0 "></div>
        <div class="col s10 card-panel white z-depth-0 whiteBox ">
          <div class="col s10 card-panel white z-depth-0 whiteBox "></div>
          <div class="col s1 card-panel transparent z-depth-0 whiteBox "></div>
          <div class="col s12 card-panel transparent z-depth-0">
            <h5 class="center-align heute"> Heute </h5>
          </div>
          <table class="centered">
            <thead>
              <tr>
                <th>Gegessen </th>
                <th>Kalorien übrig</th>
                <th>Verbrannt</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{total}</td>
                <td>1234</td>
                <td>12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row transparent">
        <div class="col s12 card-panel transparent z-depth-0"></div>
        <div class="col s1 card-panel transparent z-depth-0 "></div>
        <div class="col s10 card-panel white z-depth-0 whiteBox ">
          <div class="col s10 card-panel white z-depth-0 whiteBox "></div>
          <div class="col s1 card-panel transparent z-depth-0 whiteBox "></div>
          <div class="col s12 card-panel transparent z-depth-0">
            <h5 class="center-align heute">Aktuelles Gewicht </h5>
          </div>

          <div class="input-field col s10">
            <input
              className="gewicht"
              type="gewicht"
              id="gewicht"
              value={gewicht}
              onChange={(e) => setGewichtName(e.target.value)}
            />
            <label for="gewicht">Gewicht</label>
          </div>
          <div class="col s1">
            <a
              class="btn-floating btn-large waves-effect waves-light green right"
              onClick={console.log(gewicht)}
            >
              <i class="material-icons ">add</i>
            </a>
          </div>
        </div>
      </div>

      <div class="fixed-action-btn horizontal ">
        <a class="btn-floating red btn-large ">
          <i class="material-icons large">add</i>
        </a>

        <ul>
          <li>
            <a href="/tracker" class="btn-floating blue">
              <i class="material-icons"> lunch_dining</i> {/* Mahlzeit*/}
            </a>
          </li>

          <li>
            <a href="/aktivitaeten" class="btn-floating blue">
              <i class="material-icons"> fitness_center</i> {/* Aktivitäten*/}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
