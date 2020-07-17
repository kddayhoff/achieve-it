import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
      fontSize: 20,
      fontweight: 'bold',
      fontsyle: 'italic',
      alignItems: 'center'
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
    body: {
        justifyContent: 'center'
    }
  });


export default function Goal () {
    const classes = useStyles();

    const [postGoal, setGoal] = useState('');
    const [postTask, setTask] = useState('');
    const goal = () =>{
        Axios({
            method: "POST",
            data:{
                goal: postGoal,
                task: postTask
            },
            withCredentials: true,
            url: "/dashboard/:id"
        }).then((res) => console.log(res));
    }

    // const addTask = () =>{
    //     onClick( render.json(` <InputLabel htmlFor="component-outlined">task</InputLabel>
    //     <OutlinedInput
    //       id="component-outlined"
         
    //       onChange={(e) => setTask(e.target.value)}
    //       label="task"
    //     />
    //   </FormControl>`))
    // }
    return(
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Create your Goal
        </Typography>
        <div className= {classes.body}>
        <form>
        <Typography variant="h5" component="h2">
        <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">goal</InputLabel>
        <OutlinedInput
          id="component-outlined"
         
          onChange={(e) => setGoal(e.target.value)}
          label="goal"
        />
        </FormControl>
        </Typography>
        </form> 
        <form>
            <Typography>
        <FormControl>
           
        <InputLabel htmlFor="component-outlined">task</InputLabel>
        <OutlinedInput
          id="component-outlined"
         
          onChange={(e) => setTask(e.target.value)}
          label="task"
        />
      </FormControl>
     <br></br>
     {/* <Button className= {classes.btns} onClick={addTask}>Add Task</Button> */}
        <Button className= {classes.btns} onClick={goal}>Set Goal</Button>
        </Typography>
        </form>
        </div>



        </CardContent>
        </Card>
    )


}