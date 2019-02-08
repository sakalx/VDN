import React from 'react';

function GenericClass(props) {

    const { alert } = props;
    console.log("Generic Class alert: ", alert.notification.test)

    return (
        <div>
            <h1> Generic Class </h1>
             <p>{alert.notification.test}</p>
             <p>End</p>
         </div>
    )
}
GenericClass.propTypes = {
};
export default GenericClass;