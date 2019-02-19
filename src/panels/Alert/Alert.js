import React, {useState} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectedBuilding} from 'root/redux-core/actions/building';
import {updateNotification} from 'root/redux-core/actions/notification';

import {
  normalizeDate,
  millisToMinutesAndSeconds,
} from 'root/utils/time';

import TableCell from '@material-ui/core/TableCell';
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
  const [status, setStatus] = useState('active'); // || selected

  const getDurationCall = () => {
    const durationCall = notification.resolvedCallTime - notification.acceptedCallTime;
    return millisToMinutesAndSeconds(durationCall);
  };

  const selectAlert = buildingName => () => {
    const {acceptedCallTime} = notification;
    if (acceptedCallTime > 1) return;

    updateNotification(selected, {
      acceptedCallTime: +new Date(),
    });
    selectedBuilding(buildingName);
    setStatus('selected');
  };

  return (
    <Row onDoubleClick={selectAlert(notification.building)} status={status}>
      <Cell>{normalizeDate(notification.timestamp)}</Cell>
      <Cell>{notification.building}</Cell>
      <Cell>{notification.doorStation}</Cell>
      <Cell>{notification.operator}</Cell>
      <Cell>{normalizeDate(notification.acceptedCallTime)}</Cell>
      <Cell>{getDurationCall()}</Cell>
      <Cell>{notification.alarmType}</Cell>
      <Cell style={{minWidth: 90}}>
        {status === 'selected' && (
          <CloseButton
            selected={selected}
            notification={notification}
            setStatus={setStatus}
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