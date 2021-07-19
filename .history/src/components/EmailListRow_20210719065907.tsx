import React from 'react';
import { TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
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
  },
  rowHover: {
    ':hover': {
      cursor: pointer, 
    }

  }
});

export default function EmailListRow({ email, key, emailId, sendDataToParent }){

    const classes = useStyles();

    return (
      <TableRow key={key} onClick={()=>{sendDataToParent(emailId)}}>
        <TableCell padding="checkbox">
          <Checkbox
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        <Button>{emailId}</Button>
        <TableCell><Typography className={classes.column}>{email.from}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.sub)}>{email.subject}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.date)}>{email.date}</Typography></TableCell>
      </TableRow>
    );    
}
