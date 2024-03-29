import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Circle from "./Progressbar-semicircle.js";
import AppControlsCounter from "./components/AppControls/AppControlsCounter";
import { BrowserView, MobileView } from "react-device-detect";
import AppControlsInputs from "./components/AppControls/AppControlsInputs";
import AppControlsDelete from "./components/AppControls/AppControlsDelete";
import AppMealsList from "./components/AppMealsList/AppMealsList.js";

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/serviceworker.js")
//     .then((regis) => console.log("service worker registered", regis))
//     .catch((error) => console.log("service worker not registered", error));
// }

function App() {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("");

  const addGoalHandler = () => {
    console.log("goal: ", goal);
    localStorage.setItem("goal", JSON.stringify(goal));
    setGoal(goal);
  };

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
    const localStorageGoal = +JSON.parse(localStorage.getItem("goal"));
    setGoal(localStorageGoal);
  }, [setGoal]);

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
            score={(total / goal) * 100}
            color="#669999"
            orientation="up"
            width="15"
            diameter="300"
            className="circle"
          />
        </div>
        <div className="col s12 card-panel transparent z-depth-0 kalorien">
          <AppControlsCounter total={total} />{" "}
        </div>
        <div className="col s1 card-panel transparent z-depth-0 "></div>
        <div className="col s10 card-panel white z-depth-0 whiteBox ">
          <div className="col s10 card-panel white z-depth-0 whiteBox "></div>
          <div className="col s1 card-panel transparent z-depth-0 whiteBox "></div>
          <div className="col s12 card-panel transparent z-depth-0">
            <h5 className="center-align heute"> Heute </h5>
          </div>

          <table className="centered">
            <thead>
              <tr>
                <AppControlsInputs
                  addMealsHandler={addMealsHandler}
                  mealName={mealName}
                  calories={calories}
                  setMealName={setMealName}
                  setCalories={setCalories}
                />
              </tr>
            </thead>{" "}
            <div className="col s9 card-panel transparent z-depth-0">
              <div className="input-field col s10">
                <input
                  className="goal"
                  type="number"
                  id="goal"
                  // value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  min={0}
                />
                <label htmlFor="goal">Goal</label>
              </div>
              <a
                className="btn-floating btn-large waves-effect waves-light green right"
                onClick={(e) => addGoalHandler(e.target.value)}
              >
                <i className="material-icons ">add</i>
              </a>
            </div>
            <th>Gesamt: {total} kcal</th>
            <th>Goal: {goal} kcal</th>
          </table>
        </div>
      </div>

      <div className="row transparent">
        <div className="col s12 card-panel transparent z-depth-0"></div>

        <div className="col s1 card-panel transparent z-depth-0 "></div>
        <div
          className="col s10 card-panel white z-depth-0 whiteBox"
          style={{ width: 310 }}
        >
          <div
            style={{
              fontSize: 20,
              justifyContent: "left",
            }}
          >
            Mahlzeiten:
          </div>
          <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler} />
          <div className="input-field col s10"></div>
          <AppControlsDelete deleteAllMeals={deleteAllMeals} />
          <div className="col s1"></div>
        </div>
      </div>

      <div className="fixed-action-btn horizontal ">
        <ul>
          <li>
            <a href="/tracker" className="btn-floating blue">
              <i className="material-icons"> lunch_dining</i> {/* Mahlzeit*/}
            </a>
          </li>

          <li>
            <a href="/aktivitaeten" className="btn-floating blue">
              <i className="material-icons"> fitness_center</i>{" "}
              {/* Aktivitäten*/}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
