import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import Wrapper from './components/Wrapper';
import Dashboard from "./components/Pages/Dashboard";
import LogOut from "./components/Pages/LogOut";
import { HashRouter as Router, Route} from "react-router-dom";

import Signup from './components/Signup';

function App(){

    return(
        <>
         <div className= "App">
        <React.Fragment>
           <Router>
            <Wrapper>
                <CssBaseline />
                <Navbar/>
                    <Route exact path="/Dashboard" component={Dashboard} />
                    <Route exact path="/" component={Signup}/> 
                    <Route exact path="/logout" component={LogOut} />
                <Footer/>
    
            </Wrapper>
            </Router>
        </React.Fragment>
        </div>
        </>
        );
    
}






export default App;