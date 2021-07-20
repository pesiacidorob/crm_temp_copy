import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { InputBase, Button } from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components'
import { grey } from "@material-ui/core/colors";

const grey600 = grey["600"];
const Button1 =styled(Button)`
  margin: 3px;
  border-radius: 0 4px 0 4px;
  line-height: 2;
  font-size: 10;  
`;
const Button2 =styled(Button)`
  min-width: fit-content;
  font-size: 12px;
  padding: 8px;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: "0.5em",
    },
    bar:{
      backgroundColor: grey["100"],
      fontSize: 10,
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    toolbar: {
      padding: "10px",
      justifyContent: "space-between", 
      flexWrap: "wrap"
    },
    buttons: {
      display:"inline-flex",
      flexWrap: "wrap",
    },
    link: {
      fontWeight: 300,
      padding: "2px",
      fontSize: 10,
      marginBottom: '0px!important',
    },
    search: {
      fontSize: 10,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'white',
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 1.5),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      '&:focus': {
        display: 'none',
      },
      alignItems: 'center',
      justifyContent: 'center',
      color:"grey",
    },
    inputRoot: {
      color: grey600,
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '90%',
      [theme.breakpoints.up('sm')]: {
        width: '11ch'
      },
    },
    apps: {
      color: "black",
      margin: "3px",
      justifyContent: "inherit",
    },
  }),
);

export default function SearchTask() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" className={classes.bar} >
        <Toolbar  variant="dense" className={classes.toolbar} >
          <div className={classes.buttons} >
            <Button1 variant="contained" size="small" style={{ backgroundColor: "#50a5f1" }}>
              Pending
            </Button1>
            <Button1 variant="contained" size="small" style={{ backgroundColor: "rgba(85,110,230,.25)" }}>
              Scheduled
            </Button1>
            <Button1 variant="contained" size="small" style={{ backgroundColor: "rgba(85,110,230,.25)" }}>
              Replied
            </Button1>
            <Button1 variant="contained" size="small" style={{ backgroundColor: "#f1b44c"}} >
                Accomplished
            </Button1 >
          </div>
          <div>
            {['Email', 'Call', 'SMS', 'Appt', 'Build', 'Note', 'Solid'].map((text, index) => (
              <Button2 className={classes.link}  key={text}>
                {text}
              </Button2>
            ))}
            <Button variant="contained" size="medium" style={{ borderRadius: "4px", lineHeight:2, marginBottom: 0, backgroundColor: "#50a5f1"}}>
              Creat leads
            </Button>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Tasks"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
            edge="end"
            className={classes.apps}
            size='medium'
            >
            <AppsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}