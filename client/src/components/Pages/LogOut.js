import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    justifyContent: 'center',
    textAlign: 'center'
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
  btns: {
    background: 'linear-gradient(45deg, #3f51b5 30%, #32408f 90%)',
    color: 'black',
    height: 48,
    padding: '0 8px',
    fontSize: 18,
  },
});

export default function LogOut() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  // INCOMPLETE; NEEDS JUICE
  const logout = () => {
      Axios({
          method:"GET",
          withCredentials: true,
          url:'/logout'
      }).then((res) => res.redirect('/'));
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Come back soon and check in on your goals!
        </Typography>
        
        <Typography variant="body2" component="p">
          "Do something today that will make you happy tomorrow."
          </Typography>

          <Button className={classes.btns} onClick={logout}>Log Out</Button>

        
        </CardContent>
        </Card>
        )}