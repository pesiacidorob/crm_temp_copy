import React, { useState, useEffect } from 'react';
import { Button, TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
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
    // const [ emailid, setEmailid ] = useState(-1);
    const [count, setCount] = useState(-1);

    // useEffect(("", props.email.index) => {
    //   setId(props.email.index);
    // });
    console.log(props.key)

    return (
      // <TableRow key={props.email.index}  onClick={() => setEmailid(props.email.index)}>
      //   <Button onClick={() => setEmailid(props.email.index)}>
      //     {emailid}
      //   </Button>
      //   <TableCell padding="checkbox">
      //     <Checkbox
      //       // indeterminate={numSelected > 0 && numSelected < rowCount}
      //       // checked={rowCount > 0 && numSelected === rowCount}
      //       // onChange={onSelectAllClick}
      //       inputProps={{ 'aria-label': 'select all desserts' }}
      //     />
      //   </TableCell>
      //   <TableCell><Typography className={classes.column}>{props.email.from}</Typography></TableCell>
      //   <TableCell><Typography className={clsx(classes.column, classes.sub)}>{props.email.subject}</Typography></TableCell>
      //   <TableCell><Typography className={clsx(classes.column, classes.date)}>{props.email.date}</Typography></TableCell>
      // </TableRow>
      
      <Grid item container xs={12} key={props.key}>
          <button onClick={() => setCount(props.key)}>{count}</button>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={3}>
              {props.email.from}
          </Grid>
          <Grid item xs={6}>
              {props.email.subject}
          </Grid>
          <Grid item xs={1}>
              {props.email.date}
          </Grid>
      </Grid> 
    );    
}
