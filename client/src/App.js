import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import Wrapper from './components/Wrapper';
import Dashboard from "./components/Pages/Dashboard";
import Login from "./components/Pages/Login";
import Signup from "./components/Signup";
import { HashRouter as Router, Route, Switch} from "react-router-dom";

function App(){

    return(
        <>
         <div className= "App">
        <React.Fragment>
           <Router>
               <Switch>
            <Wrapper>
                <CssBaseline />
                <Navbar/>
                    <Route exact path="/Dashboard" component={Dashboard} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/" component={Login}/> 
                <Footer/>
    
            </Wrapper>
            </Switch>
            </Router>
        </React.Fragment>
        </div>
        </>
        );
    
}






export default App;