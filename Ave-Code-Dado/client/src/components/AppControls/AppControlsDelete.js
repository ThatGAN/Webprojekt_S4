import React from "react";
import "../../css/Tracker.css"

const AppControlsDelete = ({ deleteAllMeals }) => {
  return (
    <div class="col s1" className="app__controls__delete">
      <a
        className="btn__delete__all"
        class="btn-floating btn-large waves-effect waves-light red left"
        onClick={() => deleteAllMeals()}
      >
        <i class="material-icons ">delete</i>
      </a>
    </div>
  );
};

export default AppControlsDelete;
