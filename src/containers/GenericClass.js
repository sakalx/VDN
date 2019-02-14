import React from 'react';

function rowWrapper(row) {
  return row.map(({prop, name}, index) => (
      <section
        key={String(index)}
        className='alertItem'>
        <h5>{prop} :</h5>
        <span>
          {(prop === 'duration') ? millisToMinutesAndSeconds(name) : name}
        </span>
      </section>
    )
  )
}

class GenericClass extends React.Component {

  state = {
    acceptedCallTime: null,
    notifications: this.props.alert.notifications,
  };

  selectAlert = () => {
    this.setState({
      acceptedCallTime: +new Date(),
    })
  };

  endCall = selected => () => {
    const {acceptedCallTime, notifications} = this.state;
    const selectedCall = notifications[selected];
    const endCallTime = +new Date();
    const durationCall = endCallTime - acceptedCallTime;

    notifications[selected] = makeUpdateDuration(selectedCall, durationCall);

    // [TODO] replace native alert on custom alert
    alert(`Duration Call: ${millisToMinutesAndSeconds(durationCall)}min.`);
    this.setState({notifications});
  };

  render() {
    const {notifications} = this.state;

    return (
      notifications.map((top_level, index) => (
          <div
            key={String(index)}
            onClick={this.selectAlert}
          >
            <div className="alert">
              {rowWrapper(top_level)}
              <button className='closeBtn'
                      onClick={this.endCall(index)}
              >
                Close Call
              </button>
            </div>
          </div>
        )
      )
    );
  }
}

// Helpers:
function millisToMinutesAndSeconds(millisec) {
  if (typeof millisec !== 'number') return 0;

  const minutes = Math.floor(millisec / 60000);
  const seconds = ((millisec % 60000) / 1000).toFixed(0);
  const convertedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  return convertedTime
}

function makeUpdateDuration(infoArr, duration) {
  return infoArr.map(info =>
    (info.prop === 'duration')
      ? ({...info, name: duration})
      : info
  );
}

GenericClass.propTypes = {};
export default GenericClass;