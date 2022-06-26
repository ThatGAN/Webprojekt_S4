import React, {useState,useEffect } from "react";
import HeaderAdd from "./Header_add.js";
import HeaderAddMobile from "./HeaderAddMobile.js";
import ConfirmAddButton from "./confirm_add_button.js";
import {BrowserView, MobileView} from 'react-device-detect';
import AppControlsInputs from "./components/AppControls/AppControlsInputs";
import AppControlsDelete from "./components/AppControls/AppControlsDelete";
import AppControlsCounter from "./components/AppControls/AppControlsCounter";
import AppMealsList from "./components/AppMealsList/AppMealsList.js";
import AppMealsFilter from "./components/AppMealsFilter/AppMealsFilter.js";

{/*test*/}
function Fruestueck () {
  const [meals,setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0); 
  const [selectedFilter, setSelectedFilter] = useState("");

  const addMealsHandler = () => {
    const oldMeals = meals ? [...meals] : [];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random() * 1000),
    };
    const newMeals = oldMeals.concat(meal);

    if(calories <= 0 || mealName === ""){
      alert("Feld darf nicht leer sein")
    }else{
      setMeals(newMeals);
      localStorage.setItem("meals", JSON.stringify(newMeals));
    }

    setMealName("");
    setCalories(0);

  };

  

  const deleteMealHandler = (id) =>{
    const oldMeals =[...meals];
    const newMeals = oldMeals.filter((meal) => meal.id !== id);

    setMeals(newMeals);
    localStorage.setItem("meals", JSON.stringify(newMeals));

  };

  const deleteAllMeals = () => {
    setMeals([]);
    localStorage.clear();
  }

  const total =
  meals !== null
    ? meals
        .map((meal) => meal.calories)
        .reduce((acc, value) => acc + +value, 0)
    : 0;

  useEffect(() => {
    const oldState = [...meals];
    if(selectedFilter === "Ascending"){
      const ascendingMeals = oldState.sort((a,b) => a.calories - b.calories);
      setMeals(ascendingMeals);
    }else if(selectedFilter === "Descending"){
      const descendingMeals = oldState.sort((a,b) => b.calories - a.calories);
      setMeals(descendingMeals);
    }
  },[selectedFilter]);
  
  useEffect(() => {
    const localStorageMeals =JSON.parse(localStorage.getItem('meals'));
    setMeals(localStorageMeals);
  }, [setMeals]);




    return (
      <div>
        <BrowserView>
        <HeaderAdd titel="Frühstück" />
        </BrowserView>

        <MobileView>
          <HeaderAddMobile titel="Frühstück" />
        </MobileView>
        
        <AppControlsInputs addMealsHandler={addMealsHandler} mealName={mealName} calories={calories} setMealName={setMealName} setCalories={setCalories}/>
        <AppControlsDelete deleteAllMeals ={deleteAllMeals} />
        <ConfirmAddButton />


          <div className="app__meals__container">
              <AppMealsFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
              <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler}/>

              <AppControlsCounter total={total}/>
          </div>
      </div>
    );
  }


export default Fruestueck;
