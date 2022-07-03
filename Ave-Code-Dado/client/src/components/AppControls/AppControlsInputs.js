import React from "react";
import "./AppControls.css";

const AppControlsInputs = ({
  addMealsHandler,
  calories,
  mealName,
  setCalories,
  setMealName,
}) => {
  const onAddMealsClick = () => {
    addMealsHandler();
  };
  return (
    <div
      className="app__controls"
      class="col s10 card-panel transparent z-depth-0  "
    >
      <div className="app__controls_inputs">
        <div class="input-field col s10">
          <input
            className="mahlzeit"
            type="text"
            id="mahlzeit"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
          />
          <label for="mahlzeit">Mahlzeit</label>
        </div>

        <div class="input-field col s10">
          <input
            className="number"
            type="number"
            id="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            min={0}
          />
          <label for="number">Kalorien</label>
        </div>

        <div class="col s1">
          <a
            class="btn-floating btn-large waves-effect waves-light green right"
            onClick={onAddMealsClick}
          >
            <i class="material-icons ">add</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppControlsInputs;
