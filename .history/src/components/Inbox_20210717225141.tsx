import React from 'react';
import { match } from "react-router-dom";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, Typography, IconButton, Tooltip  } from '@material-ui/core';
import {Print, Launch, AccountCircle, StarBorder, Reply, MoreVert, DoubleArrow} from '@material-ui/icons';
import { connect } from "react-redux";
import { getAction } from "../actions/emailcrm";
import { thunkApiCall } from "../services/thunks";
import { EmailCRM, EmailCRMList } from "../types";
import { ApiAction, GET_EMAILCRM, LIST_EMAILCRM } from "../store/types";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      display: 'flex',
      textOverflow: 'ellipsis',
      overflowX: 'hidden',          
      flexWrap: 'nowrap',
    },
  }),
);


// const useStyles = () => {
//     return {
//         root: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             height: '100%'
//         },
//         paper: {
//           width: '100%',
//           minHeight: 705,
//           margin: 0,
//           height: 'auto'
//         },
//         column: {
//           display: 'flex',
//           textOverflow: 'ellipsis',
//           overflowX: 'hidden',          
//           flexWrap: 'nowrap',
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
    snackbarOpen: boolean;
    autoHideDuration: number;
  } 
class Inbox extends React.Component<EmailCRMProps, EmailCRMState> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props) {
      super(props);
      // this.handleChange = this.handleChange.bind(this);
      // this.handleClick = this.handleClick.bind(this);
      // this.onSnackBarClose = this.onSnackBarClose.bind(this);
    }
  
    // state = {
    //   emailCrm: {},
    //   emailCrmList: [],
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
  
    // componentDidUpdate(prevProps) {
    //   // reset page if items array has changed
    //   if (this.props.emailCrmList !== prevProps.emailCrmList) {
    //     this.setState({ emailCrmList: this.props.emailCrmList });
    //   }
    //   if (
    //     this.props.updated !== prevProps.updated &&
    //     this.props.updated === true
    //   ) {
    //     this.setState({ snackbarOpen: true });
    //   }
  
    // }
  
    // onSnackBarClose() {
    //   this.setState({
    //     snackbarOpen: false,
    //   });
    // }
    
    render() {
        const classes = useStyles();
        const { isFetching, emailCrm, emailCrmList } = this.props;
        console.log(this.props);
        // console.log(this.props.emailCrmList.length);
        
        return (
            <div style={{display: 'flex'}}>
                <Paper elevation={3}>
                    { emailCrmList.length > 0 && emailCrmList.map((email, index: React.Key) => 
                        (<Grid item container xs={12} key={index}>
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={3} >
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