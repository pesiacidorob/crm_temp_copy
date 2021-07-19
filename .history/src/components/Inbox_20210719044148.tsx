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
import DetailEmail from "./DetailEmail";

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
        column: {
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
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
    emailCrmList: EmailCRM[];
    getEmailCRM: typeof thunkApiCall;
    errorMessage?: string;
    isFetching: boolean;
    updated: boolean;
}  

interface EmailCRMState {
    emailCrm: EmailCRM;
    emailCrmList: EmailCRM[];
    emailCrmId: number;
  } 
class Inbox extends React.Component<EmailCRMProps, EmailCRMState> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props) {
      super(props);
      // this.handleChange = this.handleChange.bind(this);
      this.sendDataToParent = this.sendDataToParent.bind(this);
    }
  
    state = {
      emailCrm: {} as EmailCRM,
      emailCrmList: [] as EmailCRM[],
      emailCrmId: 1,      
    };
    
    sendDataToParent = (index) => {
      console.log(index);
      this.setState({ emailCrmId: index })
    };

    componentDidMount() {
      //   @ts-ignore
      let action: ApiAction;
      // const emailId = this.state.emailCrmId;
      const emailId = 1;
      console.log(emailId);
      
      if (emailId < 0) {
          action = getAction(LIST_EMAILCRM); //  Object.assign({}, this.getAction);
          this.props.getEmailCRM(action);
      } else {
          action = getAction(GET_EMAILCRM, emailId); //  Object.assign({}, this.getAction);
          console.log(emailId);
          this.props.getEmailCRM(action);  
      };
    } 

    componentDidUpdate(prevProps) {
      // reset page if items array has changed
      if (this.props.emailCrmList !== prevProps.emailCrmList) {
        this.setState({ emailCrmList: this.props.emailCrmList });
      } 
    }

    
      
    render() {
        const classes = useStyles();
        const { isFetching, emailCrm, emailCrmList } = this.props;
        const emailId = -1;
        // console.log(this.props);
        
        return (
            <div>
              {
                  (emailId < -1) ? (
                    <Paper elevation={3} style={classes.paper}>
                        { emailCrmList.length>0 && emailCrmList.map((email, index) => 
                            <EmailListRow email={email} key={index} emailId={index} sendDataToParent={this.sendDataToParent} />)
                        } 
                    </ Paper> 
                  ) : (

                    <DetailEmail email={emailCrm} emailId={this.state.emailCrmId} />

                  )
              }
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
