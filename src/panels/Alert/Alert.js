import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectedBuilding} from 'root/redux-core/actions/building';
import {updateNotification} from 'root/redux-core/actions/notification';

import time from 'root/utils/time';

import CloseButton from './CloseButton';

import {
  Row,
  Cell,
} from './style';

function Alert({
                 selected,
                 notification,
                 selectedBuilding,
                 updateNotification,
               }) {

  const getDurationCall = () => {
    const durationCall = notification.resolvedCallTime - notification.acceptedCallTime;
    return time.millisToMinutesAndSeconds(durationCall);
  };

  const selectAlert = buildingName => () => {
    const {acceptedCallTime} = notification;
    if (acceptedCallTime > 1) return;

    updateNotification(selected, {
      acceptedCallTime: +new Date(),
    });
    selectedBuilding(buildingName);
  };

  const isSelected = notification.acceptedCallTime > 0 && notification.resolvedCallTime === null;

  return (
    <Row onDoubleClick={selectAlert(notification.building)}
         status={{
           pending: notification.acceptedCallTime === null,
           selected: isSelected,
         }}
    >
      <Cell>{time.normalizeDate(notification.timestamp)}</Cell>
      <Cell>{notification.building}</Cell>
      <Cell>{notification.doorStation}</Cell>
      <Cell>{notification.operator}</Cell>
      <Cell>{time.normalizeDate(notification.acceptedCallTime)}</Cell>
      <Cell>{getDurationCall()}</Cell>
      <Cell>{notification.alarmType}</Cell>
      <Cell style={{minWidth: 90}}>
        {isSelected && (
          <CloseButton
            selected={selected}
            notification={notification}
          />
        )}
      </Cell>
    </Row>
  )
}

const mapStateToProps = ({notifications}) => ({
  notifications,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectedBuilding,
  updateNotification,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Alert);