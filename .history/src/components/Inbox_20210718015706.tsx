import React from 'react';
import { match } from "react-router-dom";
import { Grid, Paper, Typography, IconButton, Tooltip  } from '@material-ui/core';
import {Print, Launch, AccountCircle, StarBorder, Reply, MoreVert, DoubleArrow} from '@material-ui/icons';
import { connect } from "react-redux";
import { getAction } from "../actions/emailcrm";
import { thunkApiCall } from "../services/thunks";
import { EmailCRM, EmailCRMList } from "../types";
import { ApiAction, GET_EMAILCRM, LIST_EMAILCRM } from "../store/types";
import EmailListRow from "./EmailListRow";

const useStyles = () => {
    return {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            height: '100%'
        },
        paper: {
            width: '100%',
            minHeight: 705,
            margin: 0,
            height: 'auto'
        },
    }
}
interface EmailCRMProps {
    id: number;
    match?: match;
    emailCrm: EmailCRM;
    emailCrmList: EmailCRM[];
    getEmailCRM: typeof thunkApiCall;
    errorMessage?: string;
    isFetching: boolean;
    updated: boolean;
}  

interface EmailCRMState {
    id: number;
    emailCrm: EmailCRM;
    emailCrmList: EmailCRM[];
    snackbarOpen: boolean;
    autoHideDuration: number;
  } 
class Inbox extends React.Component<EmailCRMProps, EmailCRMState> {
    constructor(props) {
      super(props);
      // this.handleChange = this.handleChange.bind(this);
      // this.handleClick = this.handleClick.bind(this);
      this.onSnackBarClose = this.onSnackBarClose.bind(this);
    }
  
    // state = {
    //   emailCrm: {} as EmailCRM,
    //   emailCrmList: [] as EmailCRM[],
    //   snackbarOpen: false,
    //   autoHideDuration: 2000,
    // };  
  
    componentDidMount() {
    //   @ts-ignore
    const emailCrmId = 1;
    let action: ApiAction;
    if (emailCrmId) {
        action = getAction(LIST_EMAILCRM, emailCrmId); //  Object.assign({}, this.getAction);
        this.props.getEmailCRM(action);
      };
    }
  
    componentDidUpdate(prevProps) {
      // reset page if items array has changed
      if (this.props.emailCrmList !== prevProps.emailCrmList) {
        this.setState({ emailCrmList: this.props.emailCrmList });
      }
      if (
        this.props.updated !== prevProps.updated &&
        this.props.updated === true
      ) {
        this.setState({ snackbarOpen: true });
      }
  
    }
  
    onSnackBarClose() {
      this.setState({
        snackbarOpen: false,
      });
    }
    
    render() {
        const classes = useStyles();
        const { emailCrmList } = this.props;
        console.log(this.props);
        function handleSelect(e) {
          e.preventDefault();
          this.setState({ id: e.index});
        }
        return (
            <div style={{display: 'flex'}}>
                <Paper elevation={3} style={classes.paper}>
                    { emailCrmList.length>0 && emailCrmList.map((email, index) => 
                        <EmailListRow email={email} key={index} onClick={handleSelect} />)
                    } 
                </ Paper> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {
      emailCrm,
      emailCrmList,
      isFetching,
      updated,
    } = state.emailCrm;
  
    return {
      emailCrm,
      emailCrmList,
      isFetching,
      updated,
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      getEmailCRM: (action) => dispatch(thunkApiCall(action)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
