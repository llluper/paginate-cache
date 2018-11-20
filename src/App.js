import React, { Component } from 'react';
import CardsContainer from './containers/CardsContainer';
import { CssBaseline, Grid } from '@material-ui/core';
import './App.css';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Grid container alignItems="center" justify="center">
          <Grid item xs={9}>
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
