import React from "react";

const AppMealsFilter = ({setSelectedFilter,selectedFilter}) => {
    return (
        <div className="app__meals__container__select">
            <select
            defaultValue={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value=""></option>
              <option value="Ascending">Ascending</option>  
              <option value="Descending">Descanding</option>  
            </select>
        </div>
    )
}


export default AppMealsFilter;