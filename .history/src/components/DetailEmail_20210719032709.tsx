import React from 'react';
import { match } from "react-router-dom";
import { Grid, Paper, Typography, IconButton, Tooltip  } from '@material-ui/core';
import {Print, Launch, AccountCircle, StarBorder, Reply, MoreVert, DoubleArrow} from '@material-ui/icons';
import { connect } from "react-redux";
import { getAction } from "../actions/emailcrm";
import { thunkApiCall } from "../services/thunks";
import { EmailCRM} from "../types";
import { ApiAction, GET_EMAILCRM } from "../store/types";

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
    email: EmailCRM;
    emailId: number;
}  
export default class DetailEmail extends React.Component<EmailCRMProps> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props) {
      super(props);
    }
  
    // state = {
    //   emailCrm: {} as EmailCRM,
    //   snackbarOpen: false,
    //   autoHideDuration: 2000,
    // };  
  
    // componentDidMount() {
    // //   @ts-ignore
    // const { emailCrm }= this.props;
    // const emailCrmId = emailCrm.id;
    // console.log(emailCrmId);
    // let action: ApiAction;
    
    // if (emailCrmId >= 0) {
    //     action = getAction(GET_EMAILCRM, emailCrmId); //  Object.assign({}, this.getAction);
    //     this.props.getEmailCRM(action);
    //   };
    // }
  
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
  
    // onSnackBarClose() {
    //   this.setState({
    //     snackbarOpen: false,
    //   });
    // }
    
    render() {
        const classes = useStyles();
        const { email } = this.props;
        const {emailId} = this.props;
        const mail = email[emailId];
        console.log(mail['from']);
        
        return (
            <div style={{display: 'flex'}}>
                <Paper elevation={3} style={classes.paper}>
                    <Grid item container xs={12}  style={classes.containerP}>
                        <Grid xs={6} item container style={classes.breadcrumbsFont}>
                            <Grid item xs={'auto'}>{'New Mail'} - {'Sample Creative'}</Grid>
                            <DoubleArrow />
                            <Grid item>Follow up</Grid>
                        </Grid>
                        <Grid xs={6} item style={{textAlign: 'right'}}>
                            <Tooltip title="Print" arrow>
                                <IconButton color="inherit">
                                    <Print />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Launch" arrow>
                                <IconButton color="inherit">
                                    <Launch />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} style={classes.containerP} >
                        <Grid item container xs={6}>
                            <Grid item container xs={2}>
                                <AccountCircle style={{fontSize: '40px'}}/>
                            </Grid>
                            <Grid item container xs={10}>
                                <Grid item xs={12}>{'mail.from'}</Grid>
                                <Grid item xs={12} style={{display: 'flex'}}>
                                    <Typography style={classes.font}>to me</Typography>
                                    <div style={classes.caret}></div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container xs={6} alignItems={'center'} direction={'row-reverse'}>
                            <Grid item xs={'auto'}>
                                <Tooltip title="MoreVert" arrow>
                                    <IconButton color="inherit">
                                        <MoreVert />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <Tooltip title="Reply" arrow>
                                    <IconButton color="inherit">
                                        <Reply />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <Tooltip title="StarBorder" arrow>
                                    <IconButton color="inherit">
                                        <StarBorder />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={'auto'}>
                                {'mail.date'} beforeTime
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={classes.pad}>
                        {'mail.subject'}
                    </Grid>
                </ Paper> 
            </div>
        );
    }
}

