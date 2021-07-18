import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { match } from "react-router-dom";
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TableCell } from '@material-ui/core';
import { EmailCRM} from "../types";
import { getAction } from "../actions/emailcrm";
import { thunkApiCall } from "../services/thunks";
import { ApiAction, GET_EMAILCRM } from "../store/types";

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

interface EmailCRMProps {
  match?: match;
  emailCrm: EmailCRM;
  getEmailCRM: typeof thunkApiCall;
  errorMessage?: string;
  isFetching: boolean;
  updated: boolean;
}  
interface EmailCRMState {
  emailCrm: EmailCRM;
  snackbarOpen: boolean;
  autoHideDuration: number;
} 

export default function EmailListRow({email, key, emailId}){

    const classes = useStyles();
    const [ mailId, setMailId ] = useState(-1);
    const { emailCrm }= this.props;
    const emailCrmId = emailCrm.id;
    let action: ApiAction;

    useEffect(() => {
      if (emailCrmId >= 0) {
          action = getAction(GET_EMAILCRM, emailCrmId); //  Object.assign({}, this.getAction);
          this.props.getEmailCRM(action);
      };
    }, [emailCrmId]);

    console.log(email);
    console.log(mailId);
    console.log(emailId);

    return (
      <TableRow key={key}>
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
