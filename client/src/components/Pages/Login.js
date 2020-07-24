import React, {useState, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Link, Redirect} from "react-router-dom";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Axios from 'axios';
import "./login.css"
import { useForm } from "react-hook-form";
// import Signup from '../Signup';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  },
  title: {
    fontSize: 22,
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

function Login() {
  const classes= useStyles();
  const { register, handleSubmit } = useForm();
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loggedin, setLoggedin] = useState(false); 
  const [passwordShown, setPasswordShown] = useState(false);
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const login = () => { 
    
    Axios({
    method: "POST",
    data: {
        username: loginUsername,
        password: loginPassword
    },
    withCredentials: true,
    url:"/login"
}).then((res) => setLoggedin(true))
}

return (
  <Card className={classes.root}>
    {loggedin ? <Redirect to={{pathname:"/dashboard/goals"}}/> : null}
    <CardContent>
      <Typography className={classes.title} color="textSecondary">
        Welcome back to Achieve 2 Believe!!! Login to check in on your goals!
      </Typography>

      <form>
      <input
        name="username"
        type="text"
        placeholder="Username"
        label="username"
        ref={register({ required: "This is required." })}
        onChange={(e) => setLoginUsername(e.target.value)}
      />

      <div className="pass-wrapper">
        <input
          placeholder="Password"
          name="password"
          type={passwordShown ? "text" : "password"}
          label="password"
          onChange={(e) => setLoginPassword(e.target.value)} 
          ref={register({ required: "This is required." })}
        />
        <Visibility className="i" onClick={togglePasswordVisiblity}/>
      </div>
      <Button className= {classes.btns} onClick={login}>Submit </Button>  
   
      <Typography variant="h5" component="h2">
      {/* <FormControl variant="outlined">
      <InputLabel htmlFor="component-outlined">Username</InputLabel>
      <OutlinedInput 
      id="component-outlined" 
      ref={register({ required: "This is required." })}
      onChange={(e) => setLoginUsername(e.target.value)} 
      label="username" />
    </FormControl> */}

    {/* <FormControl variant="outlined">
      <InputLabel htmlFor="component-outlined">Password</InputLabel>
      <OutlinedInput 
      id="component-outlined" type={this.state.hidden ? "password" : "text"}
      ref={register({ required: "This is required." })}  
      onChange={(e) => setLoginPassword(e.target.value)} 
      type={passwordShown ? "text" : "password"}
      label="password" /><i onClick={togglePasswordVisiblity}>{Visibility}</i>
     <button onClick={this.toggleShow}>Show / Hide</button>
    </FormControl>      */}
     
      </Typography>
      </form>

      <hr></hr>

      <div>
          
              <div className={classes.body}>
                Not already a member? <Link 
                style={{textDecoration: 'none'}} 
                to= "/Signup">
                  <Button className={classes.btns}>Sign Up</Button></Link>
                </div>
        </div>
    </CardContent>
  </Card>
);


    }

    export default Login;