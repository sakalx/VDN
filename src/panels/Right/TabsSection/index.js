import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ActionTab from './ActionTab';
import DeviceMonitorTab from './DeviceMonitorTab';
import OperatorsTab from './OperatorsTab';


function TabsSection() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper square>
      <Tabs value={value}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleChange}
      >
        <Tab label='Operators'/>
        <Tab label='Device health monitor'/>
        <Tab label='Action'/>
      </Tabs>
      {value === 0 && <OperatorsTab/>}
      {value === 1 && <DeviceMonitorTab/>}
      {value === 2 && <ActionTab/>}
    </Paper>
  );
}

export default TabsSection;