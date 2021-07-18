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

export default function EmailListRow(props){

    const classes = useStyles();
    const [ id, setId ] = useState(-1);

    // useEffect(() => {
    //   id = setId(email.id);
    // })
    console.log(props.email)

    return (
      <TableRow key={props.id}  onClick={() => setId(props.email.index)}>
        <Button onClick={() => setId(props.email.index)}>
          {props.email.index}
        </Button>
        <TableCell padding="checkbox">
          <Checkbox
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        <TableCell><Typography className={classes.column}>{props.email.from}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.sub)}>{props.email.subject}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.date)}>{props.email.date}</Typography></TableCell>
      </TableRow>
    );    
}
