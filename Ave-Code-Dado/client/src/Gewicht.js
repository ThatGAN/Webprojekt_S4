import React, { Component } from "react";
import HeaderAdd from "./Header_add.js";
import ConfirmAddButton from "./confirm_add_button.js";
import HeaderAddMobile from "./HeaderAddMobile.js";
import {BrowserView, MobileView} from 'react-device-detect';

class Gewicht extends Component {
  render() {
    return (
      <div>
                <BrowserView>
        <HeaderAdd titel="Gewicht" />
        </BrowserView>

        <MobileView>
          <HeaderAddMobile titel="Gewicht" />
        </MobileView>
        <ConfirmAddButton />
      </div>
    );
  }
}

export default Gewicht;
