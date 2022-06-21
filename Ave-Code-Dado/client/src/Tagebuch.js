import React, { Component } from "react";
import Header from "./Header";
import {BrowserView, MobileView} from 'react-device-detect';
import HeaderMobile from "./HeaderMobile";

class Tagebuch extends Component {
  render() {
    return (
      <div>
              <BrowserView>
          <Header />
        </BrowserView>
        <MobileView>
          <HeaderMobile />
        </MobileView>
      </div>
    );
  }
}

export default Tagebuch;
