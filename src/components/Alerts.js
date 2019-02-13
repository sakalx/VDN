import React from 'react';

function endCall(e) {
    event.preventDefault();
    console.log("End Call: ", e );
    var number=document.getElementById("kaboodle").value;  
    alert("endCall: "+ number );
} 
 
function storeTime () {

}
function selectAlert(e) {
    //event.preventDefault();
    console.log("Selected: ", e.target );
    e.target.classList.remove('alert');
    e.target.classList.add('selected');
    console.log("current notification timestamp: ", alert.notification[0].name);
    console.log("current notification timestamp state: ", state.timeStamp );
    let timestamp = alert.notification[0].name;
    let currentTime = Data().toString;
    let attendedTime = currentTime = timestamp;

}//end selectAlert

function rowWrapper(row){
    let i = 0;

    return row.map(x=>{
        i++
        return <span key={i} className='alertItem'>{x.name}</span>
    })
}//end rowWrapper

class Alerts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timeStamp: "00",
            attended: "00",
            duration: "00"
        }//end state
      }//end constructor

    render() {
    const { alert } = this.props.alert ;
    console.log(" Alerts alert: ", this.props.alert.notification[0].name)
    console.log("Alerts notifications: ", this.props.alert.notifications[0])
    let k=0
    let alertNo = 0;

    return alert.notifications[0].map( top_level => {
        k++
        alertNo++
        return ( 
            <div  key={k} id="kaboodle">
                <p key={k} className="alert" onClick={selectAlert}>{rowWrapper(top_level)} </p> 
                <span><button className='closeBtn' onClick={endCall}>Close Call</button> </span>
                <button onClick={() => endCall("test")}>X</button>

            </div>
        )
    })
  }//end render
}//end Alerts

export default Alerts;