import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper }  from '@material-ui/core';
import Card from '../Card'

const Cards = ({ cards, toggleDrawer }) => {
  return (
    <Grid container spacing={16} justify="center">
      {cards.list.length === 0 || (cards.currentPage > (cards.pagesRetrieved - 1))
        ? <Grid item sm={12}>
          <Paper style={{ padding: '50px 300px', margin: '256px 200px' }}>
            <div className="App-logo">Loading...</div>
          </Paper>
        </Grid>
        : cards.list.slice((cards.currentPage * 12), (cards.currentPage * 12) + 12).map((card, index) =>
          <Grid key={index} item sm={3}>
            <Card card={card.coreData} index={(cards.currentPage * 12) + index} toggleDrawer={toggleDrawer} />
          </Grid>
        )}
    </Grid>
  );
}

Cards.propTypes = {
  cards: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default Cards;
