import React, { useState, useEffect } from 'react';
import { Button, TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { EmailCRM } from '../types';


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


export default function EmailListRow(props){

    const classes = useStyles();
    const [ mailId, setmailId ] = useState(-1);

    // useEffect(() => {
    //   setId(props.key);
    // });
    console.log(props);

    return (
      <TableRow >
        {/* <Button onClick={() => useEffect}>
          {props.key}
        </Button> */}
        {/* <Button onClick={() => useState(props.date)}>
          {props.key}
        </Button> */}
        <TableCell padding="checkbox">
          <Checkbox
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        <TableCell><Typography className={classes.column}>{props.email.from}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.sub)}>{props.subject}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.date)}>{props.id}</Typography></TableCell>
      </TableRow>
    );    
}
