import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";
import Calendar from 'react-calendar';

// We may not need to use this, but for this whole page container, we would bring in everything packaged together here and then import this Container into the App.js file.

export default function PageContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      {/* <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} /> */}

      <Navbar/>
            <Calendar/>
            <Footer/>

        <Typography component="div" style={{ backgroundColor: '#3f51b5', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}