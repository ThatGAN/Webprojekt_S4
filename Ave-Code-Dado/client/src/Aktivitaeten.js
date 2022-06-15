import React, { Component } from 'react';
import Header_add from './Header_add.js';
import Confirm_add_button from './confirm_add_button.js';



class Aktivitaeten extends Component {
    render() {
    return (<div><Header_add titel="Aktivitäten"/>
                <Confirm_add_button />
            </div>
    

    );
    }
}

export default Aktivitaeten;