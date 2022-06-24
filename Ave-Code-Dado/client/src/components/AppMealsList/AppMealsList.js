import React from 'react'

const AppMealsList = ({meals, deleteMealHandler}) => {


    return (
        <div className="app_meals_container_wrapper">
            {meals.map((meals, index) => (
               <div key=index className="app_meals_container_wrapper_inner">
                    <div>(´${meal.mealName} : ${meal.calories}´)</div>
                   <div>
                       <button className="btn_delete_meal" onClick=()=>{deleteMealHandler(meal.id)}>Löschen</button>
                   </div>
                </div>
                ))}

        </div>
    )
}

export default AppMealsList;