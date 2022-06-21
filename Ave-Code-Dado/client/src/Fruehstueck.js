import React, { Component } from "react";
import HeaderAdd from "./Header_add.js";
import HeaderAddMobile from "./HeaderAddMobile.js";
import ConfirmAddButton from "./confirm_add_button.js";
import {BrowserView, MobileView} from 'react-device-detect';

class Fruestueck extends Component {
  render() {
    return (
      <div>
        <BrowserView>
        <HeaderAdd titel="Frühstück" />
        </BrowserView>

        <MobileView>
          <HeaderAddMobile titel="Frühstück" />
        </MobileView>
        
        <ConfirmAddButton />
      </div>
    );
  }
}

export default Fruestueck;
