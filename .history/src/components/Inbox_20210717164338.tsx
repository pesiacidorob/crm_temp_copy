import React from 'react';
import { match } from "react-router-dom";
import { Grid, Paper, Typography, IconButton, Tooltip  } from '@material-ui/core';
import {Print, Launch, AccountCircle, StarBorder, Reply, MoreVert, DoubleArrow} from '@material-ui/icons';
import { connect } from "react-redux";
import { getAction } from "../actions/emailcrm";
import { thunkApiCall } from "../services/thunks";
import { EmailCRM} from "../types";
import { ApiAction, GET_EMAILCRM, LIST_EMAILCRM } from "../store/types";

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
        iconLM: {
            textAlign: 'right'
        },
        breadcrumbsFont: {
            fontSize: '12px',
        },
        containerP: {
            padding: '20px 25px 0px 25px'
        }, 
        table: {
        minWidth: 'auto',
        },
        caret: {
            height: 15,
            backgroundImage: 'url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_black_20dp.png)',
            width: 15,
            cursor: 'pointer',  
        },
        cellflex: {
            display: 'flex',
            fontSize: '12px'
        },
        font: {
            fontSize: '12px',
            lineHeight: 'o.5'
        },
        pad: {
            padding: '20px'
        }
    }
}
interface EmailCRMProps {
    match?: match;
    emailCrm: EmailCRM;
    emailCrmList: [EmailCRM];
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
class Inbox extends React.Component<EmailCRMProps, EmailCRMState> {
    constructor(props) {
      super(props);
      // this.handleChange = this.handleChange.bind(this);
      // this.handleClick = this.handleClick.bind(this);
      this.onSnackBarClose = this.onSnackBarClose.bind(this);
    }
  
    state = {
      emailCrm: {} as EmailCRM,
      emailCrmList: [],
      snackbarOpen: false,
      autoHideDuration: 2000,
    };  
  
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
      if (this.props.emailCrm !== prevProps.emailCrm) {
        this.setState({ emailCrm: this.props.emailCrm });
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
        const { isFetching, emailCrmList } = this.props;
        const emailList = this.props.emailCrmList;
        
        return (
            <div style={{display: 'flex'}}>
                <Paper elevation={3} style={classes.paper}>
                    { emailList.length>0 && emailList.map((email, index) => 
                        (<Grid item container xs={12} style={classes.containerP} >
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={3}>
                                {email.from}
                            </Grid>
                            <Grid item xs={6}>
                                {email.subject}
                            </Grid>
                            <Grid item xs={'auto'}>
                                {email.date}
                            </Grid>
                        </Grid> ))
                    }                 
                </ Paper> 
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
