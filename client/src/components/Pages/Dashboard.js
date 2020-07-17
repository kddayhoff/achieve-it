import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Calendar from "../Calendar";
import UserContext from "../contexts/UserContext"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    
  },
}));

export default function Dashboard() {
 
const classes = useStyles();
console.log(UserContext);
  return (
    <UserContext.Consumer> {(userContext) => 
      {
      const {isAuthenticated, toggleUser} = userContext;
      return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Welcome To Achieve 2 Believe, an application to keep yourself accountable and organized in terms of your goals and dreams<hr></hr>
          
          </Paper>
        </Grid>
     
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
                 
                {/* the magnificent calendar */}
                <Calendar/>
          </Paper>
        </Grid>

        {/* Need to render the goal input inside the following grid item so it renders beside the calendar on the page */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
                  Goal Stuff || information
                  </Paper>
          <Paper className={classes.paper}>
                  Goal Stuff
                  </Paper>
          <Paper className={classes.paper}>
                  grid area
                </Paper>
          <Paper className={classes.paper}>
                  grid area
                  </Paper>
          <Paper className={classes.paper}>
                  grid area
                </Paper>
          <Paper className={classes.paper}>
                  grid area
                  </Paper>
        </Grid>
            
      </Grid>
    </div>
    
      )}
      }
    </UserContext.Consumer>

  );
}


