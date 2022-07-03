import React from "react";
import "../../css/Tracker.css";

const AppMealsList = ({ meals, deleteMealHandler }) => {
  return (
    <div className="app__meals__container__wrapper">
      {meals?.map((meal, index) => (
        <div key={index}>
          <div className="app__meals__container__wrapper__inner">{`Mahlzeit: ${meal.mealName}`}</div>
          <div className="app__meals__container__wrapper__inner">{`${meal.calories} Kalorien`}</div>
          <div class="btn__delete__meal">
            <a
              class="waves-effect waves-teal btn-flat red  "
              onClick={() => deleteMealHandler(meal.id)}
            >
              Löschen
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppMealsList;
