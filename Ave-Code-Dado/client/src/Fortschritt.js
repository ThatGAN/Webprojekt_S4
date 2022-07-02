import React from "react";
import Header from "./Header";
import LineChart from "./Chart";
import { BrowserView, MobileView } from "react-device-detect";
import HeaderMobile from "./HeaderMobile";
import "./css/Fortschritt.css";

function Fortschritt() {
  return (
    <div>
      <BrowserView>
        <Header />
      </BrowserView>
      <MobileView>
        <HeaderMobile />
      </MobileView>
      <div className="row">
        <div className="col s12 card-panel brown lighten-4 z-depth-0">
          <LineChart />
        </div>
      </div>

      <div className="center col s6 card-panel teal green z-depth-0 box">
        <h5>Gewicht: xyz</h5>
        <p>Startgewicht: xyz</p>
        <p>Zielgewicht: xyz</p>
        <p>Differenz: +- xyz</p>
      </div>

      <div className="row">
        <div className="col s12 card-panel brown lighten-4 z-depth-0">
          <LineChart />
        </div>
      </div>

      <div className="center col s6 card-panel teal green z-depth-0 box">
        <h5>Wasser getrunken: xyz</h5>
        <p>Zielmenge: xyz</p>
        <p>Erfolgsquote: +- xyz</p>
      </div>
    </div>
  );
}

export default Fortschritt;
