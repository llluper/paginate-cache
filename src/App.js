import React, { Component } from 'react';
import './App.css';
import CardsContainer from './containers/CardsContainer';
import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Grid container alignItems="center" justify="center">
          <Grid item xs={8}>
            <Grid container spacing={16} alignItems="center">
              <CardsContainer />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
