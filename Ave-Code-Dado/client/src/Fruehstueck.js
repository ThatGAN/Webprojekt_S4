import React, { Component } from "react";
import HeaderAdd from "./Header_add.js";
import HeaderAddMobile from "./HeaderAddMobile.js";
import ConfirmAddButton from "./confirm_add_button.js";
import {BrowserView, MobileView} from 'react-device-detect';
import AppMealsList from "./AppMealsList";

{/*muss eigentlich eine Funktion sein*/}
class Fruestueck extends Component {

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
        
        <ConfirmAddButton />


          <div className="app_meals_container">
              <AppMealsList meals={meals} deleteMealHandler=(deleteMealHandler) =/>
          </div>
      </div>
    );
  }
}

export default Fruestueck;
