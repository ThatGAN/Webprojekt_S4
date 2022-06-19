import React from "react";
import Header from "./Header";
import LineChart from "./Chart";

function Fortschritt() {
  return (
    <div>
      <Header />
      <div class="row">
      <div class="col s6 card-panel brown lighten-4 z-depth-0">
        <LineChart />
        </div>

        <div class="col s6 card-panel teal green z-depth-0">
          <h4>Gewicht: xyz</h4>
          <p>Startgewicht</p>
          <p>Zielgewicht</p>
          <p>Differenz</p>
          <div class="col s6 card-panel teal green z-depth-0"></div>
          <div class="col s6 card-panel teal green z-depth-0"></div>
          <div class="col s6 card-panel teal green z-depth-0"></div>
          <div class="col s6 card-panel teal green z-depth-0"></div>
          <div class="col s6 card-panel teal green z-depth-0"></div>
          <div class="col s6 card-panel teal green z-depth-0"></div>
          <div class="col s6 card-panel teal green z-depth-0"></div>
          <div class="col s6 card-panel teal green z-depth-0"></div>
          
          
          </div>
      </div>
      </div>
    
  );
}

export default Fortschritt;
