import React, { Component } from 'react';
import { connect } from 'react-redux';

import { firstScreen, newNotification } from '../actions/index';

import { bindActionCreators } from 'redux';

//Socket To Em!
import socketIOClient from "socket.io-client";


class LoginComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: {},
      //endpoint: "http://192.168.2.17:7250/",   //office
      //endpoint: "http://192.168.0.14:7250/",     //home
      endpoint: "http://104.248.110.70:3000/",   //office
      dataList : [], 
      logList: [],
      buildingList: [],
      opsList: []
    }//end state
  }//end constructor


  getName() {

  }
  getPasswd() {

  }

  testNotify (data) {
    console.log("Login - Notification: ",  data, " store: ", this.props.store);
    const timeStamp = Date().toString;
    const dataArr = [
      {
        prop: "timestamp",
        name: data.timeStamp
      },
      {
        prop : "firstname",
        name: data.firstName
      },
      {
        prop : "lastname",
        name: data.lastName
      },
      {
        prop : timeStamp + 60,
        name: data.duration
      },
      {
        prop : "doorstation",
        name: data.doorstation
      },
      {
        prop : "building",
        name: data.building
      },
      {
        prop : "attended",
        name: data.attended
      },
      {
        prop : "alarmtype",
        name: data.alarmType
      },
    ]
    this.props.store.dispatch({type: "NEW_NOTIFY", payload: dataArr });
  }

  componentDidMount() {
    const { endpoint } = this.state;
    console.log("our endpoint: ", endpoint );
    const socket = socketIOClient(endpoint);
    socket.on("message", data => {
      //alert("Received Message - Index: "+ data )
      this.setState({
         response: data 
      });
      this.testNotify(data);
  });

    console.log("component did mount: ", this.state.response  );
  }//end componeentDidMount
  
  render() {
    console.log("Login Me in visible: ", this.props.screen );
    console.log("Login screen state: ", this.props.state.screen );

    const store = this.props.store;

    if (this.props.screen === 'Close Screen') {
        console.log("return to login screen...");
        store.dispatch({type: "SHOW_LOGIN", payload: 'Login Screen' });
    }

    if ((this.props.screen !== 'Login Screen') && (this.props.state.screen === 'Login Screen')) {
        console.log("Login Screen is off");
     return false;
   }

    return (
      <div>
        <button onClick={()=> this.props.firstScreen("Main Screen")} className="btn">Log In</button>
      </div>
    );
    
  }//end render
}//end component

function mapStateToProps(state) {
    console.log("Login - current state to map: ", state);
    //console.log("Component One - Map Dispatch current props: ", state.state.data );
    return {
        data: state.data,
        screen: state.screen
    };
}//end mapStateToProps


function mapDispatchToProps(dispatch) {
    return bindActionCreators({firstScreen, newNotification}, dispatch )
}//end mapDispatchToProps
    
export default connect(mapStateToProps, mapDispatchToProps) (LoginComponent)

