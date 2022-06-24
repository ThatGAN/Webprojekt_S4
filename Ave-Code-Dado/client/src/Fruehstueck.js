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

  const deleteMealHandler = (id) => (
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter({meal}=>meal.id !== id);

    setMeals(newMeals);
    )
      const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random() * 1000),
    };

    const newMeals = oldMeals.filter({meal}=>meal.id !== id);



    if(calories <= 0 || mealName ===""){
      alert("Feld darf nicht leer sein")
    }else{
      setMeals(newMeals)
    }

    setMealName("");
    setCalories(0);
};
const deleteMealHandler = (id) => (
  const oldMeals = [...meals];
  const newMeals = oldMeals.filter({meal}=>meal.id !== id);

  setMeals(newMeals);
  )

render(

) {




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
              <AppMealsList meals={meals} deleteMealHandler=(deleteMealHandler) =/>
          </div>
      </div>
    );
  }


export default Fruestueck;
