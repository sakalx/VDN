import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeScreen } from '../actions/index';

import { bindActionCreators } from 'redux';

import { firstScreen, secondScreen, thirdScreen, fourthScreen, newNotification } from '../actions/index';



class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          endpoint: "http://192.168.2.17:7250/",
          dataList: [],
          logList: [],
          opList: [],
          notification: {
            "test" : "data "
          }
        }//end state
      }//end constructor

      componentWillMount() {        
      
      }//end componentWillMount
    
   render() {


    if (this.props.screen != 'Main Screen') {
        console.log("Main Screen is off");
     return false;
   }

      return (
        <div className='center option animated fadeIn mainScrn'><br/><br/> 
                    
          <button className="closeBtn" onClick={()=> this.props.closeScreen("Close Screen")}>Logout</button>
          <br/><br/>
          
        </div>
      
      )
   }//end render
}//end component


function mapStateToProps(state) {
    console.log("MainScreen - current state to map: ", state);
    return {
        data: state.mydata,
        screen: state.screen
    };
}//end mapStateToProps


function mapDispatchToProps(dispatch) {
    return bindActionCreators({firstScreen, secondScreen, thirdScreen, fourthScreen, newNotification, closeScreen}, dispatch )
}//end mapDispatchToProps
    
export default connect(mapStateToProps, mapDispatchToProps) (MainScreen)
