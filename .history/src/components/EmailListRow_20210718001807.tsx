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



export default function EmailListRow(email){
    
    
   
        const classes = useStyles();
        console.log(email);
        console.log(email.from);
        return (
                   
          <Grid item container xs={12} style={classes.containerP} key={email.id}>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={3}>
                  {email.email.from}
              </Grid>
              <Grid item xs={6}>
                  {email.subject}
              </Grid>
              <Grid item xs={'auto'}>
                  {email.date}
              </Grid>
          </Grid> 
        );
    
}
