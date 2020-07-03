import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Container() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}