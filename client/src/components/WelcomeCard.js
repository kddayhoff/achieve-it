import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12,
  },
  body: {
      fontSize: 14,
  }
});

export default function WelcomeCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h1">
          Achieve 2 Believe
        </Typography>
        <Typography className={classes.body} >
          {bull} Create a list of goals and objectives, keep track of them on an interactive calendar. Keep control of your life and make your dreams a reality
        </Typography>
      </CardContent>
    </Card>
  );
}