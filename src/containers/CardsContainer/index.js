import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData, nextPage, prevPage, toggleDrawer, getPageTotal } from './actions';
import Cards from '../../components/Cards';
import CardDetails from '../../components/CardDetails';
import { cardsSelector } from './selectors';
import { Button, Grid, Paper, Typography } from '@material-ui/core';

class CardsContainer extends Component {
  componentWillMount = () => {
    console.log('this.props.cards.openCard');
    console.log(this.props.cards)

    this.props.fetchData(this.props.cards.pagesRetrieved);
    this.props.getPageTotal();
  }
  nextPage = () => {
    if (this.props.cards.currentPage > (this.props.cards.pagesRetrieving) - 8) {
      this.props.fetchData(this.props.cards.pagesRetrieving);
    }
    this.props.nextPage();
    console.log(this.props.cards.list[this.props.cards.openCard]);
  }
  prevPage = () => {
    if (this.props.cards.currentPage > 0) {
      this.props.prevPage();
    }
  }

  render() {
    const { cards, toggleDrawer } = this.props;
    return (
      <div className="Cards" style={{ margin: '0 auto' }}>
        <Grid container spacing={16} justify="center">
          {cards.list.length === 0 || (cards.currentPage > (cards.pagesRetrieved - 1))
            ? <Grid item sm={12}>
                <Paper style={{ padding: '50px 300px', margin: '256px 200px' }}>
                  <div className="App-logo">Loading</div>
                </Paper>
              </Grid>
          : cards.list.slice((cards.currentPage * 12), (cards.currentPage * 12) + 12).map((card, index) => 
            <Grid key={index} item sm={3}>
                <Cards card={card.coreData} index={(cards.currentPage * 12) + index} toggleDrawer={toggleDrawer} />
            </Grid>
          )}
        </Grid>
        <Grid container justify="center" style={{ marginTop: '10px' }}>
          <Button size="small" disabled={cards.currentPage <= 0} onClick={this.prevPage}>BACK</Button>
          <Typography component="p" style={{ lineHeight: 3, margin: '0 50px' }}>
            Page {cards.currentPage + 1} of {cards.totalPages ? cards.totalPages : '???'}
          </Typography>
          <Button size="small" disabled={cards.currentPage + 1 >= cards.totalPages && cards.totalPages !== 0} onClick={this.nextPage}>NEXT</Button>
          <Button size="small" onClick={() => toggleDrawer(true)}>toggleDrawer</Button>
        </Grid>
        {cards.pagesRetrieved ? <CardDetails open={cards.open} card={cards.list[cards.openCard]} toggleDrawer={toggleDrawer} /> : ''}
      </div>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.object,
  fetchData: PropTypes.func,
  getPageTotal: PropTypes.func,
  nextPage: PropTypes.func,
  prevPage: PropTypes.func,
  toggleDrawer: PropTypes.func
};

const mapStateToProps = state => ({
  cards: cardsSelector(state)
})
const mapDispatchToProps = dispatch => ({
  fetchData: (pagesRetrieved) => dispatch(fetchData(pagesRetrieved)),
  getPageTotal: () => dispatch(getPageTotal()),
  nextPage: () => dispatch(nextPage()),
  prevPage: () => dispatch(prevPage()),
  toggleDrawer: (open) => dispatch(toggleDrawer(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
