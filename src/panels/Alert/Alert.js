import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateNotification} from '../../redux-core/actions/notification';

import {
  addClassAlertSelected,
  getNotificationNode,
  removeClassAlertActive,
} from '../../utils/ui/alert-element';

import {
  normalizeDate,
  millisToMinutesAndSeconds,
} from '../../utils/time';

function Alert({
                 selected,
                 notification,
                 updateNotification,
               }) {

  const selectAlert = event => {
    const {acceptedCallTime} = notification;
    if (acceptedCallTime > 1) return;

    updateNotification(selected, {
      acceptedCallTime: +new Date(),
    });

    _handlerSelectAlertUI(event.target);
  };

  const getDurationCall = () => {
    const durationCall = notification.resolvedCallTime - notification.acceptedCallTime;
    return millisToMinutesAndSeconds(durationCall);
  };

  const _handlerSelectAlertUI = target => {
    const notificationSection = getNotificationNode(target);
    removeClassAlertActive(notificationSection);
    addClassAlertSelected(notificationSection);
  };

  return (
    <li
      className='alertItem'
      onClick={selectAlert}
    >
      <span>{normalizeDate(notification.timestamp)}</span>
      <span>{notification.building}</span>
      <span>{notification.doorStation}</span>
      <span>{notification.operator}</span>
      <span>{normalizeDate(notification.acceptedCallTime)}</span>
      <span>{getDurationCall()}</span>
      <span>{notification.alarmType}</span>
    </li>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateNotification,
}, dispatch);

export default connect(null, mapDispatchToProps)(Alert);