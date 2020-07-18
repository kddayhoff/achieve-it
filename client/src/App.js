import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import Dashboard from "./components/Pages/Dashboard";
import Login from "./components/Pages/Login";
import Signup from "./components/Signup";
import { HashRouter as Router, Route} from "react-router-dom";

function App(){

    return(
        <>
         <div className= "App">
        <React.Fragment>
           <Router>
              
                <CssBaseline />
                <Navbar/>
                    <Route exact path="/Dashboard" component={Dashboard} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/" component={Login}/> 
                <Footer/>
        
            </Router>
        </React.Fragment>
        </div>
        </>
        );
    
}






export default App;