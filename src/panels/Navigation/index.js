import React from 'react';

import Button from '@material-ui/core/Button';

import {
  Container
} from './style';

function NavigationPanel() {
  return (
    <Container component={'nav'} square={true} elevation={1}>
      <Button color={'primary'}>Home</Button>
      <Button color={'primary'}>Admin</Button>
      <Button color={'primary'}>Play</Button>
      <Button color={'primary'}>View</Button>
      <Button color={'primary'}>Call</Button>
      <Button color={'primary'}>Options</Button>
      <Button color={'primary'}>Alarm monitoring</Button>
      <Button color={'primary'}>Help</Button>
    </Container>
  )
}

export default NavigationPanel;