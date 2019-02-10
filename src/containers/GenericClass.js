import React from 'react';

function GenericClass(props) {

    const { alert } = props;
    console.log("Generic Class alert: ", alert.notification[0].name)

    const alertArr = alert.notication;
   //console.log("Generic Class alertArr: ", alertArr)

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
            
            {
               alert.notification.map((obj, i )=> {
                    console.log("can I read this array: ", obj.prop)

                     return <p key={i}>{obj.name}</p>
                }) 
            }
            <hr></hr>
                
        
             <p>End</p>
         </div>
    )
}
GenericClass.propTypes = {
};
export default GenericClass;