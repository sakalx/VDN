import React from 'react';

import millisToMinutesAndSeconds from '../../utils/millisToMinutesAndSeconds';

import InfoSection from './InfoSection';

class GenericClass extends React.Component {
  state = {
    acceptedCallTime: null,
    notifications: this.props.alert.notifications,
  };

  selectAlert = selected => event => {
    const {notifications} = this.state;
    const selectedCall = notifications[selected];
    if (this._isCallResolved(selectedCall)) return;

    const updatedDuration = this._makeUpdateCallInfo(selectedCall, 'duration', 1);
    notifications[selected] = updatedDuration;

    this._handlerSelectAlertUI(event.target);
    this.setState({
      acceptedCallTime: +new Date(),
      notifications,
    })
  };

  endCall = selected => event => {
    const {acceptedCallTime, notifications} = this.state;
    const selectedCall = notifications[selected];
    const endCallTime = new Date();
    const durationCall = +endCallTime - acceptedCallTime;

    this._handlerEndCallUI(event.target);

    const updatedDuration = this._makeUpdateCallInfo(selectedCall, 'duration', durationCall);
    const updatedAttendedAndDuration = this._makeUpdateCallInfo(updatedDuration, 'attended', String(endCallTime));
    notifications[selected] = updatedAttendedAndDuration;

    // [TODO] replace native alert on custom alert
    alert(`Duration Call: ${millisToMinutesAndSeconds(durationCall)}min.`);
    this.setState({notifications});
  };

  _handlerSelectAlertUI = target => {
    const notificationSection = getNotificationNode(target);
    removeClassAlertActive(notificationSection);
    addClassAlertSelected(notificationSection);
  };

  _handlerEndCallUI = target => {
    const notificationSection = getNotificationNode(target);
    removeClassAlertActive(notificationSection);
    removeClassAlertSelected(notificationSection);
  };

  _makeUpdateCallInfo = (infoArr, prop, name) => {
    return infoArr.map(info =>
      (info.prop === prop)
        ? ({...info, name,})
        : info
    );
  };

  _isCallResolved = selectedCall =>
    selectedCall.some(({prop, name}) => prop === 'duration' && name);

  _isCallAccepted = selectedCall =>
    selectedCall.some(({prop, name}) => prop === 'duration' && name === 1);

  render() {
    const {notifications} = this.state;

    return (
      notifications.map((top_level, index) => (
          <div
            key={String(index)}
            className='alert alert-active'
          >
            <div onClick={this.selectAlert(index)}>
              {InfoSection(top_level)}
            </div>
            {this._isCallAccepted(top_level) && (
              <button
                className='closeBtn'
                onClick={this.endCall(index)}
              >
                Close Call
              </button>
            )}
          </div>
        )
      )
    );
  }
}


function getNotificationNode(target) {
  return target.closest('.alert');
}

function removeClassAlertSelected(element) {
  element.classList.remove('alert-selected');
}

function addClassAlertSelected(element) {
  element.classList.add('alert-selected');
}

function removeClassAlertActive(element) {
  element.classList.remove('alert-active');
}

export default GenericClass;