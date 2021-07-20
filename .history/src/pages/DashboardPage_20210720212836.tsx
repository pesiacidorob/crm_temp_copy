import React from "react";
import Data from "../data";
import Inbox from '../components/Inbox';
import { Grid } from '@material-ui/core';
import SearchTask from '../components/dashboard/searchTask'
import LeadsSidebar from '../components/dashboard/leadsSidebar'
import RightSection from '../components/dashboard/RightSection'

const styles = {
  navigation: {
    fontSize: 15,
    fontWeight: 400, 
    color: "grey600",
    // paddingBottom: 15,
    display: "block",
  },
  cell: {
    padding: "0.5em",
  }
};

const DashboardPage = () => {
  console.log();
  return (
    <>
      <Grid container style={{padding: '1px'}}>
        <Grid item xs={12} md={3} style={{height: '819px'}}>
          <LeadsSidebar data={Data.dashBoardPage.rightSection} />
        </Grid>
        <Grid item container xs={12} md={9}>
          <Grid item xs={12}  >
            <SearchTask/>
          </Grid>
          <Grid item container style={{height: `calc(100% - 50px * 2)`}} >
            <Grid item style={ styles.cell } xs={12} md={8}>
              <Inbox />
            </Grid>
            <Grid item style={styles.cell} xs={12} md={4} >
              <RightSection data={Data.dashBoardPage.rightSection} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
