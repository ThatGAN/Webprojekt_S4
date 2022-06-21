import React, { Component } from "react";
import HeaderAdd from "./Header_add.js";
import ConfirmAddButton from "./confirm_add_button.js";
import HeaderAddMobile from "./HeaderAddMobile.js";
import {BrowserView, MobileView} from 'react-device-detect';

class Mittag extends Component {
  render() {
    return (
      <div>
       <BrowserView>
        <HeaderAdd titel="Mittagessen" />
        </BrowserView>

        <MobileView>
          <HeaderAddMobile titel="Mittagessen" />
        </MobileView>
        <ConfirmAddButton />
      </div>
    );
  }
}

export default Mittag;
