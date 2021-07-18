import React from 'react';
import { TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import DetailEmail from './DetailEmail';
import { connect } from "react-redux";
import { thunkApiCall } from "../services/thunks";
import { EmailCRM } from "../types";


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
    email: EmailCRM;
    emailId: number;
    key: number;
} 
class EmailListRow extends React.Component<EmailCRMProps>{

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props) {
        super(props);
    }
    render(){
        const classes = useStyles();
        const {email} = this.props;
        console.log(email);
        return (
        <TableRow key={this.props.key}>
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
}

function mapStateToProps(state) {
    const {
      emailCrm,
    } = state.emailCrm;
  
    return {
      emailCrm,
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      getEmailCRM: (action) => dispatch(thunkApiCall(action)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailListRow);