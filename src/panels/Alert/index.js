import React from 'react';

import {connect} from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Header from './Header';
import Alert from './Alert';

import {
  Container,
} from './style'

function AlertPanel({notifications}) {
  return (
    <Container>
      <Table>
        <Header/>
        <TableBody>
          {notifications.map((alert, index) => (
            <Alert key={String(index)}
                   selected={index}
                   notification={alert}
            />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

const mapStateToProps = ({notifications}) => ({
  notifications,
});

export default connect(mapStateToProps, null)(AlertPanel);