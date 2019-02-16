import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateNotification} from '../../redux-core/actions/notification';

import {
  getNotificationNode,
  removeClassAlertActive,
  removeClassAlertSelected,
} from '../../ui-utility/alert-element';

import {millisToMinutesAndSeconds} from '../../utils/time';


function CloseCallBtn({
                        selected,
                        notification,
                        updateNotification,
                      }) {

  const endCall = event => {
    const {acceptedCallTime} = notification;
    const resolvedCallTime = +new Date();
    const durationCall = resolvedCallTime - acceptedCallTime;

    updateNotification(selected, {
      resolvedCallTime,
    });

    alert(`Duration Call: ${millisToMinutesAndSeconds(durationCall)}min.`);
    _handlerEndCallUI(event.target);
  };

  const _handlerEndCallUI = target => {
    const notificationSection = getNotificationNode(target);
    removeClassAlertActive(notificationSection);
    removeClassAlertSelected(notificationSection);
  };

  const _callResolved = () =>
    notification.resolvedCallTime - notification.acceptedCallTime >= 0;

  if (_callResolved()) return null;
  return (
    <button
      className='closeBtn'
      onClick={endCall}
    >
      Close Call
    </button>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateNotification,
}, dispatch);

export default connect(null, mapDispatchToProps)(CloseCallBtn);