import React from 'react';

const AppControlsCounter = ({total}) =>{

    return (
        <div className="app__controls__counter">
            <h3>{total}</h3>  
        </div>
    );
    

};

export default AppControlsCounter;