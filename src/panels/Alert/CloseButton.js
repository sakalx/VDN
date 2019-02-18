import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateNotification} from '../../redux-core/actions/notification';
import {toggleSnackbar} from '../../redux-core/actions/snackbar';

import {millisToMinutesAndSeconds,} from '../../utils/time';

import Button from '@material-ui/core/Button';

function CloseButton({
                       selected,
                       notification,
                       updateNotification,
                       toggleSnackbar,
                       resetStatus,
                     }) {

  const endCall = () => {
    const resolvedCallTime = +new Date();
    const durationCall = resolvedCallTime - notification.acceptedCallTime;

    updateNotification(selected, {
      resolvedCallTime,
    });

    toggleSnackbar(`Duration Call: ${millisToMinutesAndSeconds(durationCall)}min.`);
    resetStatus();
  };

  return (
    <Button
      variant='outlined'
      color='primary'
      size='small'
      onClick={endCall}
    >
      Close
    </Button>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateNotification,
  toggleSnackbar,
}, dispatch);

export default connect(null, mapDispatchToProps)(CloseButton);