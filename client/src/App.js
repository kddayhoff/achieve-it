import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import Wrapper from './components/Wrapper';
import Dashboard from "./components/Pages/Dashboard";
import Signup from "./components/Pages/Signup";
import { HashRouter as Router, Route} from "react-router-dom";
import { UserContext } from './components/UserContext';


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
      <UserContext.Provider value= "dashboard">
      <Route exact path="/" component={Dashboard} />
      </UserContext.Provider> 
      <Route exact path="/signup" component={Signup} />
      
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