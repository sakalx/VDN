import React from 'react';

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

function MainScreen() {
  return (
    <main>
      <NavigationPanel/>
      <Row>
        <LeftPanel/>
        <MainSection>
         {/*inline style temporary only for visualisation layout*/}
          <Row style={{height: '350px'}}>
            <MiddlePanel/>
            <RightPanel/>
          </Row>
          <AlertPanel/>
        </MainSection>
      </Row>
    </main>
  )
}

export default MainScreen;