import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
// import CalApp from './components/Calendar';
import Dashboard from "./components/Pages/Dashboard";
import Signup from "./components/Pages/Signup";
import { HashRouter as Router, Route} from "react-router-dom";


function App(){
    
         return(
             <>
            <div className= "App">
           <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Router>
      <Navbar/>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/signup" component={Signup} />
      {/* <CalApp/> */}
      <Footer/>
      </Router>
        <Typography component="div" style={{ backgroundColor: '#3f51b5', height: '100vh' }} />
      </Container>
    </React.Fragment>
            </div>
            </>
        );
    
}






export default App;