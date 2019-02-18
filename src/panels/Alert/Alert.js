import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateNotification} from '../../redux-core/actions/notification';

import {
  normalizeDate,
  millisToMinutesAndSeconds,
} from '../../utils/time';

import TableCell from '@material-ui/core/TableCell';
import CloseButton from './CloseButton';

import {
  Row,
} from './style';

class Alert extends React.PureComponent {
  state = {
    status: 'active', // || selected
  };

  getDurationCall = () => {
    const {notification} = this.props;
    const durationCall = notification.resolvedCallTime - notification.acceptedCallTime;
    return millisToMinutesAndSeconds(durationCall);
  };

  selectAlert = () => {
    const {
      selected,
      notification: {acceptedCallTime},
      updateNotification,
    } = this.props;

    if (acceptedCallTime > 1) return;

    updateNotification(selected, {
      acceptedCallTime: +new Date(),
    });
    this.setState({status: 'selected'});
  };

  resetStatus = () => this.setState({status: null});

  render() {
    const {notification, selected} = this.props;
    const {status} = this.state;

    return (
      <Row onClick={this.selectAlert} status={status}>
        <TableCell>{normalizeDate(notification.timestamp)}</TableCell>
        <TableCell align='right'>{notification.building}</TableCell>
        <TableCell align='right'>{notification.doorStation}</TableCell>
        <TableCell align='right'>{notification.operator}</TableCell>
        <TableCell align='right'>{normalizeDate(notification.acceptedCallTime)}</TableCell>
        <TableCell align='right'>{this.getDurationCall()}</TableCell>
        <TableCell align='right'>{notification.alarmType}</TableCell>
        <TableCell style={{minWidth: 90}}>
          {status === 'selected' && (
            <CloseButton
              selected={selected}
              notification={notification}
              resetStatus={this.resetStatus}
            />
          )}
        </TableCell>
      </Row>
    )
  }
}

const mapStateToProps = ({
                           notifications,
                         }) => ({
  notifications,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateNotification,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Alert);