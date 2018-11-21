import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { nextPage, prevPage, toggleDrawer } from './actions';
import { fetchData, getPageTotal } from './thunks';
import { cardsSelector } from './selectors';
import Card from '../../components/Cards';
import Paginator from '../../components/Paginator';
import CardDetails from '../../components/CardDetails';
import { Grid, Paper } from '@material-ui/core';

class CardsContainer extends Component {
  componentWillMount = () => {
    // fetch first round of data from api and get total page number
    this.props.fetchData(this.props.cards.pagesRetrieved);
    this.props.getPageTotal();
  }
  nextPage = () => {
    // if currentPage reaches 4 pages from the end of the list, cache another 4 (8 pages max cached ahead)
    if (this.props.cards.currentPage > this.props.cards.pagesRetrieving - 7) {
      this.props.fetchData(this.props.cards.pagesRetrieving);
    }
    this.props.nextPage();
  }
  prevPage = () => {
    // prevent user from going back past page 1
    if (this.props.cards.currentPage > 0) {
      this.props.prevPage();
    }
  }

  render() {
    const { cards, toggleDrawer } = this.props;
    return (
      <div className="Cards" style={{ margin: '100px auto 0' }}>
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
        
        <Paginator currentPage={cards.currentPage} totalPages={cards.totalPages} nextPage={this.nextPage} prevPage={this.prevPage} />
        
        {cards.pagesRetrieved ? <CardDetails index={cards.openIndex} open={cards.open} card={cards.list[cards.openIndex]} toggleDrawer={toggleDrawer} /> : ''}
      </div>
    );
  }
}

CardsContainer.propTypes = {
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
  toggleDrawer: (open, index) => dispatch(toggleDrawer(open, index))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
