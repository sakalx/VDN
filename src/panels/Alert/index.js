import React from 'react';

import {connect} from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

import Header from './Header';
import Alert from './Alert';

function MaterialAlert({notifications}) {
  return (
    <Paper>
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
    </Paper>
  );
}

const mapStateToProps = ({
                           notifications,
                         }) => ({
  notifications,
});

export default connect(mapStateToProps, null)(MaterialAlert);