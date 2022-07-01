import React, { useState, useEffect } from "react";
import HeaderAdd from "./Header_add.js";
import ConfirmAddButton from "./confirm_add_button.js";
import HeaderAddMobile from "./HeaderAddMobile.js";
import {BrowserView, MobileView} from 'react-device-detect';
import AppControlsDelete from "./components/AppControls/AppControlsDelete";
import AppControlsCounter from "./components/AppControls/AppControlsCounter";
import AppMealsList from "./components/AppMealsList/AppMealsList.js";
import AppMealsFilter from "./components/AppMealsFilter/AppMealsFilter.js";
import AppControlsInputs from "./components/AppControls/AppControlsInputs";
import "./css/Tracker.css";


function Aktivitaeten () {

  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

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
      <div>
        <BrowserView>
        <HeaderAdd titel="Aktivitäten" />
        </BrowserView>

        <MobileView>
          <HeaderAddMobile titel="Aktivitäten" />
        </MobileView>
        

        <div class="col s10 card-panel transparent z-depth-0  mahlzeitMain">
     
     <h5 class="box">Füge hier deine aufgenommenen Kalorien hinzu</h5>
     
   </div>
   

   <AppControlsInputs
     addMealsHandler={addMealsHandler}
     mealName={mealName}
     calories={calories}
     setMealName={setMealName}
     setCalories={setCalories}
   />
   <AppControlsDelete deleteAllMeals={deleteAllMeals} />
   

   <div className="app__meals__container">
     <AppMealsFilter
       selectedFilter={selectedFilter}
       setSelectedFilter={setSelectedFilter}
     />
     <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler} />
     

     
   </div>
   </div>

      
    );
  }


export default Aktivitaeten;
