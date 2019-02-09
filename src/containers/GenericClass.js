import React from 'react';

function GenericClass(props) {

    const { alert } = props;
    console.log("Generic Class alert: ", alert.notification)

    const testArr = [1,2,3,4,5];
    const objArr = [
        {
            test : "ipsoquidl"
        },
        {
            test : "zowie"
        }
    ];

    return (
        <div>
            <h1> Generic Class </h1>
             <p>
             {
                 //alert.notification.test
                // alert.map(() => {console.log("hey")})
                //testArr
                objArr.map((obj)=> {console.log("can I read this array: ", obj.test )})
             }

                
            </p>
             <p>End</p>
         </div>
    )
}
GenericClass.propTypes = {
};
export default GenericClass;