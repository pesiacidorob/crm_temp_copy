import React, { useState, useEffect } from 'react';
import { Button, TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({  
  column: {
    textOverflow: 'ellipsis',
    overflowX: 'hidden',
    width: '120px',
    whiteSpace: 'nowrap',
  },
  sub: {
    width: '262px'
  },
  date: {
    width: '60px'
  }
});

export default function EmailListRow({email, key, emailId}){

    const classes = useStyles();
    const [ mailId, setMailId ] = useState(-1);

    useEffect(() => {
      setMailId(emailId);
    }, [emailId]);

    console.log(email);
    console.log(mailId);
    console.log(emailId);

    return (
      <TableRow key={key} onClick={() => useEffect}>
        <Button onClick={() => setMailId(emailId)}>
          {mailId}
        </Button>
        <TableCell padding="checkbox">
          <Checkbox
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        <TableCell><Typography className={classes.column}>{email.from}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.sub)}>{email.subject}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.date)}>{email.date}</Typography></TableCell>
      </TableRow>
    );    
}
