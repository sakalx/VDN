import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setNewNotification} from '../../redux-core/actions/notification';

import socketIOClient from 'socket.io-client';

class Login extends React.Component {
  state = {
    response: {},
    //endpoint: 'http://192.168.2.17:7250/',   //office
    //endpoint: 'http://192.168.0.14:7250/',     //home
    endpoint: 'http://104.248.110.70:3000/',   //office
    dataList: [],
    logList: [],
    buildingList: [],
    opsList: []
  };

  getName() {
  }

  getPasswd() {
  }

  _testNotify(data) {
    const testNotificationData = {
      acceptedCallTime: data.attended, //attended
      alarmType: data.alarmType,
      building: data.building,
      doorStation: data.doorstation,
      operator: data.operator,
      resolvedCallTime: null,
      timestamp: data.timeStamp,
    };

    this.props.setNewNotification(testNotificationData);
  }

  componentDidMount() {
    const {endpoint} = this.state;
    const socket = socketIOClient(endpoint);

    socket.on('message', response => {
      this.setState({
        response,
        logList: response,
      });
      this._testNotify(response);
    });
  }

  render() {
    return (
      <div>
        <span
          onClick={() => console.log('redirect to main screen')}>
        </span>
      </div>
    );

  }
}

const mapStateToProps = ({
                           notifications,
                         }) => ({
  notifications,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setNewNotification,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)