import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper }  from '@material-ui/core';
import Card from '../Card'

const Cards = ({ cards, pages, toggleDrawer }) => {
  return (
    <Grid container spacing={16} justify="center">
      {cards.length === 0 || (pages.current > (pages.retrieved - 1))
        ? <Grid item sm={12}>
          <Paper style={{ padding: '50px 300px', margin: '256px 200px' }}>
            <div className="App-logo">Loading...</div>
          </Paper>
        </Grid>
        : cards.slice((pages.current * 12), (pages.current * 12) + 12).map((card, index) =>
          <Grid key={index} item sm={3}>
            <Card card={card.coreData} index={(pages.current * 12) + index} toggleDrawer={toggleDrawer} />
          </Grid>
        )}
    </Grid>
  );
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  pages: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default Cards;
