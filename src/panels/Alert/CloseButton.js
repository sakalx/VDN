import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateNotification} from 'root/redux-core/actions/notification';
import {toggleSnackbar} from 'root/redux-core/actions/snackbar';

import time from 'root/utils/time';

import Button from '@material-ui/core/Button';

function CloseButton({
                       selected,
                       notification,
                       updateNotification,
                       toggleSnackbar
                     }) {

  const handleEndCall = () => {
    const resolvedCallTime = +new Date();
    const durationCall = resolvedCallTime - notification.acceptedCallTime;

    updateNotification(selected, {
      resolvedCallTime,
    });

    toggleSnackbar(`Duration Call: ${time.millisToMinutesAndSeconds(durationCall)}min.`);
  };

  return (
    <Button
      variant='outlined'
      color='primary'
      size='small'
      onClick={handleEndCall}
    >
      End Call
    </Button>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateNotification,
  toggleSnackbar,
}, dispatch);

export default connect(null, mapDispatchToProps)(CloseButton);