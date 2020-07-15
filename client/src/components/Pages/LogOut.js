import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    justifyContent: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function LogOut() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const logout = () => {
      Axios({
          method:"",
          data:
          {

          },
          withCredentials: true,
          url:'/logout'
      }).then((res) => console.log(res));
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Come back an check in on your goals!
        </Typography>
        
        <Typography variant="body2" component="p">
          "Do something today that will make you happy tomorrow."

          <Button onClick={logout}>Log Out</Button>

        </Typography>
        </CardContent>
        </Card>
        )}