import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";
import CalApp from './Calendar';
import SignIn from "../components/Pages/SignIn";
import { HashRouter as Router, Route} from "react-router-dom";

// Other page components will be brought in here. This component will be the only one called in the App.js file

export default function PageContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      {/* <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} /> */}
      <Router>
      <Navbar/>
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      <Route exact path="/signin" component={SignIn} />
      <CalApp/>
      <Footer/>
      </Router>
        <Typography component="div" style={{ backgroundColor: '#3f51b5', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}