import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setNewNotification} from 'root/redux-core/actions/notification';

import Button from '@material-ui/core/Button';
import NavigationPanel from 'root/panels/Navigation';
import LeftPanel from 'root/panels/Left';
import MiddlePanel from 'root/panels/Middle';
import RightPanel from 'root/panels/Right';
import AlertPanel from 'root/panels/Alert';

import {
  Row,
  MainSection,
} from './style';

const testData = {
  acceptedCallTime: null, //attended
  alarmType: 'VDM CALL',
  building: 'Building 003 - 82 Irving Place',
  doorStation: 'Front Door',
  operator: 'tbrooks',
  resolvedCallTime: null,
  timestamp: +new Date(),
};

function MainScreen({setNewNotification}) {
  return (
    <div>
   {/*   <main>
        <NavigationPanel/>
        <Row>
          <LeftPanel/>
          <MainSection>
            // inline style temporary only for visualisation layout
            <Row style={{height: '200px'}}>
              <MiddlePanel/>
              <RightPanel/>
            </Row>
            <AlertPanel/>
          </MainSection>
        </Row>
      </main>*/}
      <AlertPanel/>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setNewNotification,
}, dispatch);

export default connect(null, mapDispatchToProps)(MainScreen);