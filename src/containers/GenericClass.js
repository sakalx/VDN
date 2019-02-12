import React from 'react';
function rowWrapper(row){
    let i = 0;

    return row.map(x=>{
        i++
        return <span key={i} style={{backgroundColor:'red'}}>{x.name}</span>
    })
}

function GenericClass(props) {

    const { alert } = props;
    console.log("Generic Class alert: ", alert.notification[0].name)
    console.log("Generic Class notifications: ", alert.notifications)
    let k=0
    return alert.notifications.map( top_level => {
        k++
        return <p key={k}>{rowWrapper(top_level)}</p>

        
    })

    for (var i = 0; i < alert.notifications.length ; i++) {
        console.log("alert objects: ", alert.notifications[i])

        for (var j = 0 ; j < alert.notifications[i].length; j++){
            let line = alert.notifications[i][j].name ;
            console.log("alert.notifications by ij : ", line);
            alertString +=`<p>${line}</p>`;
        }  
        console.log("GenericClass - Final list of alerts: ", alertList.toString() );

       // alertList = alertList.toString().replace(',',' ');

        //alerts.push(alert.notifications[i].toString().replace(',',' '));

    }
}

/*
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

   var alertString = "";
   var another
   
    for (var i = 0; i < alert.notifications.length ; i++) {
        console.log("alert objects: ", alert.notifications[i])

        for (var j = 0 ; j < alert.notifications[i].length; j++){
            let line = alert.notifications[i][j].name ;
            console.log("alert.notifications by ij : ", line);
            alertString +=`<p>${line}</p>`;
        }  
        console.log("GenericClass - Final list of alerts: ", alertList.toString() );

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
            <h1> Generic Class 16</h1>
            
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
}*/
GenericClass.propTypes = {
};
export default GenericClass;