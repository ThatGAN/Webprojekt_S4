import React from "react";
import "../../css/Tracker.css";

const AppMealsList = ({ meals, deleteMealHandler }) => {
  return (
    <div className="app__meals__container__wrapper">
      {meals?.map((meal, index) => (
        <div key={index} >
          <div className="app__meals__container__wrapper__inner">{`${meal.mealName} : ${meal.calories} Kalorien`}</div>

          <div class="btn__delete__meal">
            <a
              class="waves-effect waves-teal btn-flat teal green  "
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
