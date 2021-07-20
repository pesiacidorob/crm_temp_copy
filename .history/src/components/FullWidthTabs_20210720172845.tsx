import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Button, Paper } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MailIcon from '@material-ui/icons/Mail';
import CreateIcon from '@material-ui/icons/Create';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraRearIcon from '@material-ui/icons/CameraRear';
import CustomizedTimeline from './CustomizedTimeline';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {   
    width: '100%',
  },
  icon: { 
    '& > svg': {
        margin: theme.spacing(1),        
    },
    backgroundColor: '#f3f3f9',
    margin: '5px',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  tabPanel: { 
    margin: '5px',
    overflowY: 'auto',
    height: '350px',
  },    
}));

const style = { 
    minWidth: 'auto',
    fontSize: '12px'
};

const GlobalCss = withStyles({ 
    '@global': {
        '.MuiBox-root': {
            padding: '5px'
        },
        '.MuiButton-root': {
            padding: '5px',
            lineHeight: '1',
            textTransform: 'capitalize',
            marginBottom: '8px'
        }
    }
})(() => null);

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Paper elevation={5} className={classes.tabPanel}>
            <TabPanel value={value} index={0}>
              <GlobalCss />
              <Button variant="contained" fullWidth={true} style={{backgroundColor: '#50a5f1'}}>
                Schedule an Email
              </Button>
              <Button variant="contained" fullWidth={true} style={{backgroundColor: '#e83e8c'}}>
                Build & Price-Send Deal
              </Button>
              <CustomizedTimeline data={props.data} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <GlobalCss />
              <Button variant="contained" fullWidth={true} style={{backgroundColor: 'rgb(52, 195, 143)'}}>
                Financing Information
              </Button>
              <Button variant="contained" fullWidth={true} style={{backgroundColor: '#50a5f1'}}>
                Vehicle Information
              </Button>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <GlobalCss />
              <Button variant="contained" fullWidth={true} style={{backgroundColor: 'rgb(52, 195, 143)'}}>
                Financing Information
              </Button>
              <Button variant="contained" fullWidth={true} style={{backgroundColor: '#50a5f1'}}>
                Vehicle Information
              </Button>
            </TabPanel>
        </Paper>
        <Grid className={classes.icon}>
            <IconButton>
                <MailIcon color="primary"/>
            </IconButton><IconButton>
                <CreateIcon color="primary"/>
            </IconButton>
            <IconButton>
                <CallToActionIcon color="primary"/>
            </IconButton>
            <IconButton>
                <LocalOfferIcon color="primary"/>
            </IconButton>
            <IconButton>
                <VideocamIcon color="primary"/>
            </IconButton>
            <IconButton>
                <CameraRearIcon color="primary"/>
            </IconButton>
        </Grid>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Follow Up" {...a11yProps(0)} style={style} />
            <Tab label="Approval" {...a11yProps(1)} style={style} />
            <Tab label="Delivery" {...a11yProps(2)} style={style} />
          </Tabs>
        </AppBar>
        
    </div>
  );
}
