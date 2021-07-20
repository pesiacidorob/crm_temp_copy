import React from "react";
import SendIcon from '@material-ui/icons/Send';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import {Card, Grid} from "@material-ui/core";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { makeStyles } from '@material-ui/core/styles';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "100%",
  },
  title: {
    backgroundColor: "#556ee6",
    height: "24px",
    width:"100px,",
    margin: "0 20px 0 10px",
    padding: "4px",
    borderRadius:"3px",
  },
  iconbutton: {
    border: "1px solid", 
    padding: "3px",
    margin: "3px",
    justifyContent:"space-evenly",
    backgroundColor:"white"
  },
  ContentHead:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    transform:"translate(-0px,-25px)",
    zIndex: 1000,
    position: "absolute"
  },
  card: {
    padding: "25px 8px"
  },
  content:{
    fontSize:"10px",
  }
}));

export default function LeadCard(props) {
  let classes = useStyles();
  return(
    <Card className={classes.root} elevation={3}>
      <div className={classes.ContentHead}>
        <div className={classes.title} >
          <Typography variant="subtitle2">Email Replied</Typography>
        </div>
        <IconButton className={classes.iconbutton} >
          <DirectionsCarIcon color="primary"/>
        </IconButton>
        <IconButton className={classes.iconbutton} >
          <DeleteForeverIcon style={{ color: 'green[500]' }}/>
        </IconButton>
        <IconButton className={classes.iconbutton} >
          <SendIcon/>
        </IconButton>
        <IconButton color="secondary" className={classes.iconbutton} >
          <AutorenewIcon/>
        </IconButton>
      </div>
      <CardContent className={classes.card}>
        <Grid item container xs={12} md={12} >
          {props.data.map((item) => (
            <Grid item xs={6} >
              <Typography className={classes.content} display="inline">{item.name}</Typography>
              <Typography className={classes.content} display="inline">{item.value}</Typography>
            </Grid>
          ))} 
        </Grid>
      </CardContent>
    </Card>
  );
};