import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function () {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Alarm Time</TableCell>
        <TableCell align='right'>Building</TableCell>
        <TableCell align='right'>Door station</TableCell>
        <TableCell align='right'>Operator</TableCell>
        <TableCell align='right'>Attended</TableCell>
        <TableCell align='right'>Duration</TableCell>
        <TableCell align='right'>Alarm Type</TableCell>
        <TableCell/>
      </TableRow>
    </TableHead>
  )
}