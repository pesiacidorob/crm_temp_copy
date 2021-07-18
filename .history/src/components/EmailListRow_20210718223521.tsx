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
import { connect } from "react-redux";

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
  email: EmailCRM;
  key: number;
  emailId: number;
}  
interface EmailCRMState {
  emailCrm: EmailCRM;
  snackbarOpen: boolean;
  autoHideDuration: number;
  mailId: number;
} 

class EmailListRow extends React.Component<EmailCRMProps, EmailCRMState> {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    emailCrm: {} as EmailCRM,
    snackbarOpen: false,
    autoHideDuration: 2000,
    mailId: -1,
  };  

  componentDidMount() {
  //   @ts-ignore
    const { emailCrm }= this.props;
    const emailCrmId = emailCrm.id;
    console.log(emailCrmId);
    let action: ApiAction;
    
    if (emailCrmId >= 0) {
        action = getAction(GET_EMAILCRM, emailCrmId); //  Object.assign({}, this.getAction);
        this.props.getEmailCRM(action);
    };
  }

  // componentDidUpdate(prevProps) {
  //   // reset page if items array has changed
  //   if (this.props.emailCrm !== prevProps.emailCrm) {
  //     this.setState({ emailCrm: this.props.emailCrm });
  //   }
  //   if (
  //     this.props.updated !== prevProps.updated &&
  //     this.props.updated === true
  //   ) {
  //     this.setState({ snackbarOpen: true });
  //   }

  // }
  // const [ mailId, setMailId ] = useState(-1);
  // const { emailCrm }= this.props;
  // const emailCrmId = emailCrm.id;
  // let action: ApiAction;
  handleClick = () => {
    this.setState({mailId: this.props.emailId});
  }
  
  render(){

    const classes = useStyles();
    return (
      <TableRow key={this.props.key}>
        <Button onClick={this.handleClick}>
          {this.state.mailId}
        </Button>
        <TableCell padding="checkbox">
          <Checkbox
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        <TableCell><Typography className={classes.column}>{this.props.email.from}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.sub)}>{this.props.email.subject}</Typography></TableCell>
        <TableCell><Typography className={clsx(classes.column, classes.date)}>{this.props.email.date}</Typography></TableCell>
      </TableRow>);
    }
}

function mapStateToProps(state) {
  const {
    emailCrm,
    isFetching,
    updated,
  } = state.emailCrm;

  return {
    emailCrm,
    isFetching,
    updated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmailCRM: (action) => dispatch(thunkApiCall(action)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailListRow);

