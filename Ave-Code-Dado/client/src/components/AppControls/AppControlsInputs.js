import React from "react";

const AppControlsInputs = ({addMealsHandler, calories, mealName, setCalories, setMealName}) => {
    const onAddMealsClick =() => {
        addMealsHandler();
    }
    return(
        <div className="app__controls">
            <div className="app__controls_inputs">
                <input type="text" placeholder="Mahlzeit" value={mealName} onChange={(e)=>setMealName(e.target.value)}/>
                <input type="number" placholder="Kalorien" value={calories} onChange={(e)=>setCalories(e.target.value)} min={0}/>
                <button onClick={onAddMealsClick}>Hinzufügen</button>
            </div>
        </div>
    );
};

export default AppControlsInputs;