import React from 'react';

function endCall() {
    console.log("End Call");
}

function selectAlert(e) {
    //event.preventDefault();
    console.log("Selected: ", e.target );
    e.target.classList.remove('alert');
    e.target.classList.add('selected');
}//end selectAlert

function rowWrapper(row){
    let i = 0;

    return row.map(x=>{
        i++
        return <span key={i}>{x.name}</span>
    })
}//end rowWrapper

function GenericClass(props) {

    const { alert } = props;
    console.log("Generic Class alert: ", alert.notification[0].name)
    console.log("Generic Class notifications: ", alert.notifications)
    let k=0
    return alert.notifications.map( top_level => {
        k++
        return <p key={k} className="alert" onClick={selectAlert}>{rowWrapper(top_level)}<button className='closeBtn' onClick={endCall}>Close Call</button> </p> 
    })

  }//end GenericClass

GenericClass.propTypes = {
};
export default GenericClass;