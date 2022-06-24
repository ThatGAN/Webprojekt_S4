import React, {useState,useEffect } from "react";
import HeaderAdd from "./Header_add.js";
import HeaderAddMobile from "./HeaderAddMobile.js";
import ConfirmAddButton from "./confirm_add_button.js";
import {BrowserView, MobileView} from 'react-device-detect';
import AppControlsInputs from "./components/AppControls/AppControlsInputs";
import AppControlsDelete from "./components/AppControls/AppControlsDelete";
import AppMealsList from "./AppMealsList";

{/*test*/}
function Fruestueck () {
  const [meals,setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0); 
  const [openModal, setOpenModal] = useState(false);

  const deleteMealHandler = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal) => meal.id !== id);

    setMeals([]);
    localStorage.clear();
  }; 


    const newMeals = oldMeals.concat(meal);



    if(calories <= 0 || mealName ===""){
      alert("Feld darf nicht leer sein")
    }else{
      setMeals(newMeals)
    }

    setMealName("");
    setCalories(0);
};
const addMealsHandler = (id) => {
  const oldMeals = [...meals];
  const meal = {
    mealName,
    calories,
    id: Math.floor(Math.random() * 1000),

}

const deleteAllMeals =() => {
  setMeals([]);
};

const total = meals
.map((meal) => meal.calories)
.reduce((acc, value) => acc + +value, 0);
useEffect(()=>{
  const oldState =[...meals];
  if(selectedFilter==="Ascending") {
    const ascendingMeals = oldstate.sort((a,b) => a.calories - b.calories);
   } else if (selectedFilter === "Descending") {
      const descendingMeals = oldState.sort((a,b) => b.calories - a.calories);
      setMeals(descendingMeals);
    }
  }, [selectedFilter]);






    return (
      <div>
        <BrowserView>
        <HeaderAdd titel="Frühstück" />
        </BrowserView>

        <MobileView>
          <HeaderAddMobile titel="Frühstück" />
        </MobileView>
        
        <AppControlsInputs addMealsHandler={addMealsHandler} mealName={mealName} calories={calories} setMealName={setMealName} setCalories={setCalories}/>
        <AppControlsDelete />
        <ConfirmAddButton />


          <div className="app_meals_container">
              <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler} />
          </div>
      </div>
    );
  }


export default Fruestueck;
