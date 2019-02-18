import React, {Component, PureComponent} from 'react';

//Utility functions
//import { getLogData } from './utils/logs.js'
//import { getBuildingData } from './utils/building.js'
//import { getOpsData } from './utils/operator.js'


import Typography from '@material-ui/core/Typography';
import Login from './components/Login';
import MainScreen from './screens/Main';
import SnackbarMessage from './components/Snackbar';

class App extends Component {
  render() {
    return (
      <div>
        <Typography
          variant={'display1'}
          gutterBottom={true}
        >
          Master View Controller (MVC) v.0.0.2f
        </Typography>
        <Typography
          variant={'title'}
          gutterBottom={true}
        >
          VDM oMVC 0.0.1d
        </Typography>
        <Login
          onLogin={event => {console.log('onLogin')}}
          onRegister={data => {console.log('onRegister')}}
        />
        <MainScreen/>
        <SnackbarMessage/>
      </div>
    );
  }
}

export default App;
