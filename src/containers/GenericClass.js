import React from 'react';

function rowWrapper(row) {
  return row.map(({prop, name}, index) => (
      <span
        key={String(index)}
        className='alertItem'
      >
          {(prop === 'duration') ? millisToMinutesAndSeconds(name) : name}
        </span>
    )
  )
}

class GenericClass extends React.Component {

  state = {
    acceptedCallTime: null,
    notifications: this.props.alert.notifications,
  };

  selectAlert = event => {
    // [TODO] make section disabled, don't allow select second times
    this._handlerSelectAlertUI(event.target);
    this.setState({
      acceptedCallTime: +new Date(),
    })
  };

  endCall = selected => event => {
    const {acceptedCallTime, notifications} = this.state;
    const selectedCall = notifications[selected];
    const endCallTime = new Date();
    const durationCall = +endCallTime - acceptedCallTime;

    this._handlerEndCallUI(event.target);

    //[FIXME] can be better
    const updatedDuration = makeUpdateCallInfo(selectedCall, 'duration', durationCall);
    const updatedAttendedAndDuration = makeUpdateCallInfo(updatedDuration, 'attended', String(endCallTime));
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

  render() {
    const {notifications} = this.state;

    return (
      notifications.map((top_level, index) => (
          <div
            key={String(index)}
            className='alert alert-active'
          >
            <div onClick={this.selectAlert}>
              {rowWrapper(top_level)}
            </div>
            <button
              className='closeBtn'
              onClick={this.endCall(index)}
            >
              Close Call
            </button>
          </div>
        )
      )
    );
  }
}

// Helpers / Utility:
function millisToMinutesAndSeconds(millisec) {
  if (typeof millisec !== 'number') return 0;

  const minutes = Math.floor(millisec / 60000);
  const seconds = ((millisec % 60000) / 1000).toFixed(0);
  const convertedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  return convertedTime
}

function makeUpdateCallInfo(infoArr, prop, name) {
  return infoArr.map(info =>
    (info.prop === prop)
      ? ({...info, name,})
      : info
  );
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

GenericClass.propTypes = {};
export default GenericClass;