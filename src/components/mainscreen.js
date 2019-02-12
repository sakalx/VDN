import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeScreen } from '../actions/index';

import { bindActionCreators } from 'redux';

import { newNotification } from '../actions/index';

import GenericClass from '../containers/GenericClass'

class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          endpoint: "http://104.258.110.70:7250/",
          notification: [{
            prop : "timestamp",
            name: "timeStamp"
          },
          {
            prop : "firstname",
            name: "firstName"
          },
          {
            prop : "lastname",
            name: "lastName"
          },
          {
            prop : "duration",
            name: "duration"
          },
          {
            prop : "doorstation",
            name: "doorStation"
          },
          {
            prop : "building",
            name: "building"
          },
          {
            prop : "attended",
            name: "attended"
          },
          {
            prop : "alarmtype",
            name: "alarmType"
          },
        ]
        }//end state
      }//end constructor

      componentWillMount() {        
        this.props.store.dispatch({type: "NEW_NOTIFY", payload: this.state.notification })
      }//end componentWillMount

   render() {

    if (this.props.screen != 'Main Screen') {
        console.log("Main Screen is off");
     return false;
   }

   console.log("Mainscreen - store: ", this.props.store );
   console.log ("Mainscreen - Reducer state: ", this.props.reducerdata );
   console.log("Mainscreen - current local state notification: ", this.state.notification );

   const timeStamp = Date().toString();
   const testData = [
    {
      prop: "timestamp",
      name: timeStamp
    },
    {
      prop : "firstname",
      name: "Harry"
    },
    {
      prop : "lastname",
      name: "Truman"
    },
    {
      prop : timeStamp + 60,
      name: "duration"
    },
    {
      prop : "doorstation",
      name: "Front Door"
    },
    {
      prop : "building",
      name: "135 5th Street"
    },
    {
      prop : "attended",
      name: "jbronowski"
    },
    {
      prop : "alarmtype",
      name: "1-A"
    },
  ];

      return (
        <div className='center option animated fadeIn mainScrn'><br/><br/>      
          <button className="closeBtn" onClick={()=> this.props.closeScreen("Close Screen")}>Logout</button>
          <br/><br/>
          <button className="alertBtn" onClick={()=> this.props.store.dispatch( { type: "NEW_NOTIFY", payload: testData })}>Update</button>
          <br/><br />
          <GenericClass alert={this.props.reducerdata }  notifications={this.props.notification} />
        </div>
      )
   }//end render
}//end component


function mapStateToProps(state) {
    //console.log("MainScreen - current state to map: ", state);
    return {
        reducerdata: state.mydata,
        screen: state.screen
    };
}//end mapStateToProps


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ newNotification, closeScreen}, dispatch )
}//end mapDispatchToPropsgu
export default connect(mapStateToProps, mapDispatchToProps) (MainScreen)
