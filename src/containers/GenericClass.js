import React from 'react';

function GenericClass(props) {

    const { alert } = props;
    console.log("Generic Class alert: ", alert.notification[0].name)
    console.log("Generic Class notifications: ", alert.notifications)


    const testArr = [1,2,3,4,5];
    const objArr = [
        {
            test : "ipsoquidl"
        },
        {
            test : "zowie"
        }
    ];

    var string1 = "";
    var object1 = [{a: 1, b: 2, c: 3}];

    for (var property1 in object1) {
    string1 += object1[property1];
    }

console.log("Generic Class test: ", string1);
// expected output: "123"


   let index = 0;

   var alertList = [];
   var another
   
    for (var i = 0; i < alert.notifications.length ; i++) {
        console.log("alert objects: ", alert.notifications[i])
        for (var j = 0 ; j < alert.notifications[i].length; j++){
            console.log("alert.notifications by ij : ", alert.notifications[i][j].name );
            alertList.push(alert.notifications[i][j].name+"\n\n\n");
        }       
        console.log("GenericClass - Final list of alerts: ", alertList.toString().replace(',','') );

       // alertList = alertList.toString().replace(',',' ');

        //alerts.push(alert.notifications[i].toString().replace(',',' '));

    }//end for loop

    alert.notifications.map((item, i ) => {
        console.log("What have we here: ", item );
        for ( i in item ){ 
            ++i;
            console.log("key: "+ i +"name: ", name )
        }
    });



    return (
        <div>
            <h1> Generic Class 10</h1>
            
            {
               alert.notification.map((obj, i )=> {
                    console.log("can I read this object: ", obj.prop)
                    //alerts.push(obj.name );
                    
                    return <span key={i}>{obj.name} </span>
                }) 
                
            }
            
             <hr></hr>
             {alertList}
                        
             <p>End</p>
         </div>
    )
}
GenericClass.propTypes = {
};
export default GenericClass;