import React, { Component } from "react";
import HeaderAdd from "./Header_add.js";
import ConfirmAddButton from "./confirm_add_button.js";
import HeaderAddMobile from "./HeaderAddMobile.js";
import {BrowserView, MobileView} from 'react-device-detect';
class Abendessen extends Component {
  render() {
    return (
      <div>
        <BrowserView>
        <HeaderAdd titel="Abendessen" />
        </BrowserView>

        <MobileView>
          <HeaderAddMobile titel="Abendessen" />
        </MobileView>
        <ConfirmAddButton />
      </div>
    );
  }
}

export default Abendessen;
