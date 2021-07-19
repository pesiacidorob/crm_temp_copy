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
    '&:hover': {
      cursor: 'pointer', 
      boxShadow: 'inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);'
    }

  }
});

export default function EmailListRow({ email, key, emailId, sendDataToParent }){

    const classes = useStyles();
    const emailDetail = { id: emailId, sub: email.subject, date: email.date, from: email.from, text: email.from }

    return (
      <TableRow key={key} onClick={()=>{sendDataToParent(emailId, emailDetail)}} className={classes.rowHover} >
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
