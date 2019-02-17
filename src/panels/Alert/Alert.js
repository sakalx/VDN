import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateNotification} from '../../redux-core/actions/notification';

import {
  normalizeDate,
  millisToMinutesAndSeconds,
} from '../../utils/time';

import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import {Row} from './style';

class Alert extends React.Component {
  state = {
    status: 'active', // or selected
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

  endCall = () => {
    const {
      selected,
      notification: {acceptedCallTime},
      updateNotification,
    } = this.props;
    const resolvedCallTime = +new Date();
    const durationCall = resolvedCallTime - acceptedCallTime;

    updateNotification(selected, {
      resolvedCallTime,
    });

    alert(`Duration Call: ${millisToMinutesAndSeconds(durationCall)}min.`);
    this.setState({status: null});
  };

  render() {
    const {notification,} = this.props;
    const {status} = this.state;

    return (
      <Row onClick={this.selectAlert} status={status}>
        <TableCell component='th' scope='row'>{normalizeDate(notification.timestamp)}</TableCell>
        <TableCell align='right'>{notification.building}</TableCell>
        <TableCell align='right'>{notification.doorStation}</TableCell>
        <TableCell align='right'>{notification.operator}</TableCell>
        <TableCell align='right'>{normalizeDate(notification.acceptedCallTime)}</TableCell>
        <TableCell align='right'>{this.getDurationCall()}</TableCell>
        <TableCell align='right'>{notification.alarmType}</TableCell>
        <TableCell align='right'>
          {status === 'selected' && (
            < Button
              variant='outlined'
              color='primary'
              size='small'
              onClick={this.endCall}
            >
              Close
            </Button>
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