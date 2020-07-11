import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Calendar from "./Calendar";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function TestGrid() {
  const classes = useStyles();

  //Inside this Grid component we can take in the information we want to display on the page in a neatly formatted way. I am leaving the basics up so we can customize as we need to.
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Welcome To Achieve 2 Believe, an application to keep yourself accountable and organized in terms of your goals and dreams</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><Calendar/></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Goal Stuff || information</Paper>
          <Paper className={classes.paper}>Goal Stuff</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>grid area</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>grid area</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>grid area</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>grid area</Paper>
        </Grid>
        <Grid item xs={5} sm={5}>
          <Paper className={classes.paper}>grid area 5/5</Paper>
        </Grid>
        <Grid item xs={8} sm={8}>
          <Paper className={classes.paper}>grid area 8/3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}