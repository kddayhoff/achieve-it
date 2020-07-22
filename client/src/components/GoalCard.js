import React from 'react';

function GoalCard(props){
    console.log(props);

    return(
<Paper className={classes.paper} key={props._id}>
                  {props.goal} -
                  {props.task}
                  {props.date}
                </Paper>

    )
    
}

export default GoalCard;