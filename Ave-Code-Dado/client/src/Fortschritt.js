import React from "react";
import Header from "./Header";
import LineChart from "./Chart";
import {BrowserView, MobileView} from 'react-device-detect';
import HeaderMobile from "./HeaderMobile";


function Fortschritt() {
  return (
    <div>
              <BrowserView>
          <Header />
        </BrowserView>
        <MobileView>
          <HeaderMobile />
        </MobileView>
      <div class="row">
      <div class="col s12 card-panel brown lighten-4 z-depth-0">
        <LineChart />
        </div>


</div>

<div class="center col s6 card-panel teal green z-depth-0">
          <h5>Gewicht: xyz</h5>
          <p>Startgewicht: xyz</p>
          <p>Zielgewicht: xyz</p>
          <p>Differenz: +- xyz</p>

        </div>

      <div class="row">
      <div class="col s12 card-panel brown lighten-4 z-depth-0">
        <LineChart />
        </div>

        
      </div>

      <div  class="center col s6 card-panel teal green z-depth-0">
          <h5>Wasser getrunken: xyz</h5>
          <p>Zielmenge: xyz</p>
          <p>Erfolgsquote: +- xyz</p>
          

        </div>

    </div>
    
  );
}

export default Fortschritt;
