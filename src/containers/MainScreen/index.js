import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setNewNotification} from '../../redux-core/actions/notification';

import GenericClass from '../AlertPanel';

const testData = {
  acceptedCallTime: null, //attended
  alarmType: 'VDM CALL',
  building: '135 5th Street',
  doorStation: 'Front Door',
  operator: 'tbrooks',
  resolvedCallTime: null,
  timestamp: +new Date(),
};

function MainScreen({
                      setNewNotification,
                    }) {

  const getNewNotification = () => {
    setNewNotification(testData)
  };

  return (
    <div className='center option animated fadeIn mainScrn'>
      VDM oMVC 0.0.1d
      <button
        className="btn"
        onClick={() => console.log("Close Screen")}
      >
        Logout
      </button>
      <button
        className="alertBtn"
        onClick={getNewNotification}
      >
        Update
      </button>
      <GenericClass/>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setNewNotification,
}, dispatch);

export default connect(null, mapDispatchToProps)(MainScreen);