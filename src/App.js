import React, { Component } from 'react';
import  Login  from './components/login.js';
import  MainScreen  from './components/mainscreen.js';

//Utility functions
import { getLogData } from './utils/getLogData.js'
import { getBuildingData } from './utils/getBuildingData.js'
import { getOpsData } from './utils/getOpsData.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Master View Controller (MVC) v.0.0.2f</div>
        <div>Currently using React {React.version}</div>
        <br/><br/>
        <Login onLogin={ event =>{
          console.log('onLogin')
        }} onRegister={ data =>{
          console.log("onRegister")
        }} visible={this.props.state.screen} state={this.props.state} store={this.props.store}/>
      
        <MainScreen store={this.props.store }/>
      </div>
    );
  }
}

export default App;
