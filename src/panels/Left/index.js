import React from 'react';

import Typography from '@material-ui/core/Typography';
import SelectBuilding from './SelectBuilding';

import {
  Container
} from './style';

function LeftPanel() {
  return (
    <Container>
      <Typography variant={'display1'}>
        Left Panel
      </Typography>
      <SelectBuilding/>
    </Container>
  )
}

export default LeftPanel;