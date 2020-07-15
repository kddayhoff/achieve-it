import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import Wrapper from './components/Wrapper';
import Dashboard from "./components/Pages/Dashboard";
import LogOut from "./components/Pages/LogOut";
import { HashRouter as Router, Route} from "react-router-dom";
import { UserContext } from './components/contexts/UserContext';


function App(){

    // const [isAuthenticated, userHasAuthenticated] = useState(false);

    return(
        <>
         <div className= "App">
        <React.Fragment>
           <Router>
            <Wrapper>
            <CssBaseline />
            <Container maxWidth="lg">
      
            <Navbar/>
            <Route exact path="/" component={Dashboard} /> 
            <Route exact path="/logout" component={LogOut} />
            <Footer/>
            </Container>
            </Wrapper>
            </Router>
        </React.Fragment>
        </div>
        </>
        );
    
}






export default App;