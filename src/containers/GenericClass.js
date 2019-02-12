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
    
  }//end GenericClass

GenericClass.propTypes = {
};
export default GenericClass;