import React from 'react';
import { TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


const useStyles = makeStyles({  
  column: {
    textOverflow: 'ellipsis',
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
  },
  from: {
    maxWidth: '150px',
  },
  sub: {
    maxWidth: '250px'
  },
  date: {
    width: '50px'
  },
  rowHover: {
    '&:hover': {
      cursor: 'pointer', 
      boxShadow: 'inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);',
    }
  },
});

export default function EmailListRow({ email, key, emailId, sendDataToParent }){

    const classes = useStyles();
    const e_from = email.from.slice(0, email.from.indexOf("<"));
    // ========== get email date ============
    const myEmailDate = new Date(email.date);
    const e_h = myEmailDate.getHours();
    const e_m = myEmailDate.getMinutes();
    const time = e_h + ":" + e_m;
    
    const month = [];
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
  
    const m = month[myEmailDate.getMonth()];
    const today = new Date().getDate();
    const d = myEmailDate.getDate();
    const e_last_date = m + d; 

    function getEmailDate(date) {
      if(date !== today){
        return e_last_date;
      } else {
        return time;
      }
    }

    const emailDate = getEmailDate(d);
    // ================================
    
    const emailDetail = { id: emailId, subject: email.subject, date: emailDate, from: e_from, text: email.from }
    console.log(e_from);
    return (     
      <TableRow key={key} onClick={()=>{sendDataToParent(emailId, emailDetail)}} className={classes.rowHover}>
        <TableCell>
          <Checkbox
              // indeterminate={numSelected > 0 && numSelected < rowCount}
              // checked={rowCount > 0 && numSelected === rowCount}
              // onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.from)}>{e_from}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.sub)}>{email.subject}</Typography></TableCell>
        <TableCell><Typography>{emailDate}</Typography></TableCell>
      </TableRow>
    );    
}
