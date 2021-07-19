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
    const e_from = email.from.slice(0, email.from.indexOf("<"));
    // ========== get email date ============
    const d = email.date;
    const h = new Date().getHours();
    const e_date_h = email.date.getHours;
    console.log(h);
    console.log(typeof email.date);
    console.log(e_date_h);
    // const e_date_m = email.date.getMinutes();
    // const e_date = e_date_h + ":" + e_date_m;
    // const today = new Date().getDate();
    // const date = email.date.getDate();

    // const month = [];
    //       month[0] = "Jan";
    //       month[1] = "Feb";
    //       month[2] = "Mar";
    //       month[3] = "Apr";
    //       month[4] = "May";
    //       month[5] = "Jun";
    //       month[6] = "Jul";
    //       month[7] = "Aug";
    //       month[8] = "Sep";
    //       month[9] = "Oct";
    //       month[10] = "Nov";
    //       month[11] = "Dec";
        
    // const m = month[email.date.getMonth()];
    // const d = email.date.getDate();
    // const e_last_date = m + d; 

    // function getEmailDate(date) {
    //   if(date !== today){
    //     return e_last_date;
    //   } else {
    //     return e_date;
    //   }
    // }

    // const emailDate = getEmailDate(date);
    // ================================
    
    const emailDetail = { id: emailId, subject: email.subject, date: "emailDate", from: e_from, text: email.from }
    console.log(e_from);
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
        <TableCell><Typography className={classes.column}>{e_from}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.sub)}>{email.subject}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.date)}>{"emailDate"}</Typography></TableCell>
      </TableRow>
    );    
}
