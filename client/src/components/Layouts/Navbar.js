import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  btns: {
    background: 'linear-gradient(45deg, #3f51b5 30%, #32408f 90%)',
    color: 'black',
    height: 48,
    padding: '0 8px',
    fontSize: 18,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link style={{ textDecoration: 'none' }} to ="/"><Button className={classes.btns}>Achieve 2 Believe</Button></Link>
          </Typography>
          <Link style={{ textDecoration: 'none' }} to="/signup">
          <Button className={classes.btns}>Sign up </Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}