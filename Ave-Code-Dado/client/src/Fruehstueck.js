import React, {useState,useEffect } from "react";
import HeaderAdd from "./Header_add.js";
import HeaderAddMobile from "./HeaderAddMobile.js";
import ConfirmAddButton from "./confirm_add_button.js";
import {BrowserView, MobileView} from 'react-device-detect';
import AppControlsInputs from "./components/AppControls/AppControlsInputs";
import AppControlsDelete from "./components/AppControls/AppControlsDelete";

function Fruestueck () {
  const [meals,setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0); 
  const [openModal, setOpenModal] = useState(false);

  const addMealsHandler= () => {
    const oldMeal = [...meals];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random() * 1000),
    };

    const newMeals =oldmeals.concat(meal);

    if(calories <= 0 || mealName ===""){
      alert("Feld darf nicht leer sein")
    }else{
      setMeals(newMeals)
    }

    setMealName("");
    setCalories(0);

  }
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
      </div>
    );
  }


export default Fruestueck;
