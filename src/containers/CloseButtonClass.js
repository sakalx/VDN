import React from 'react';

//end rowWrapper
function doSomething(){
    console.log("Time to make the donuts!!!");
}

function CloseButtonClass(props) {

        return 
            <button onClick={doSomething} className="closeBtn">End Call</button>
        

  }//end CloseButtonClass

  CloseButtonClass.propTypes = {
};
export default CloseButtonClass;