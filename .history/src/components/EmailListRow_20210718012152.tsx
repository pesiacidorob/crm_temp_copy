import React from 'react';
import { TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  column: {
    textOverflow: 'ellipsis',
    overflowX: 'hidden',
    width: '175px',
    whiteSpace: 'nowrap',
  }
});

// const useStyles = () => {
//     return {
//         root: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             height: '100%'
//         },
//         column: {
//             textOverflow: 'ellipsis',
//             overflowX: 'hidden',
//             width: '175px',
//             whiteSpace: 'nowrap',
//         },
//         iconLM: {
//             textAlign: 'right'
//         },
//         breadcrumbsFont: {
//             fontSize: '12px',
//         },
//         containerP: {
//             padding: '20px 25px 0px 25px'
//         }, 
//         table: {
//         minWidth: 'auto',
//         },
//         caret: {
//             height: 15,
//             backgroundImage: 'url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_black_20dp.png)',
//             width: 15,
//             cursor: 'pointer',  
//         },
//         cellflex: {
//             display: 'flex',
//             fontSize: '12px'
//         },
//         font: {
//             fontSize: '12px',
//             lineHeight: 'o.5'
//         },
//         pad: {
//             padding: '20px'
//         }
//     }
// }

export default function EmailListRow(email){

    const classes = useStyles();

    return (
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        <TableCell><Typography  className={classes.column}>{email.email.from}</Typography></TableCell>
        <TableCell><Typography>{email.email.subject}</Typography></TableCell>
        <TableCell><Typography>{email.email.date}</Typography></TableCell>
      </TableRow>
    );
    
}
