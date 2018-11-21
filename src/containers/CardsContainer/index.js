import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Cards, CardDetails, Paginator } from '../../components';
import { nextPage, prevPage, toggleDrawer } from './actions';
import { fetchData, getPageTotal } from './thunks';
import { cardsSelector } from './selectors';

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
        <Cards cards={cards} toggleDrawer={toggleDrawer} />
        <Paginator currentPage={cards.currentPage} totalPages={cards.totalPages} nextPage={this.nextPage} prevPage={this.prevPage} />
        {
          cards.pagesRetrieved 
          ? <CardDetails index={cards.openIndex} open={cards.open} card={cards.list[cards.openIndex]} toggleDrawer={toggleDrawer} />  
          : <div />
        }
      </div>
    );
  }
}

CardsContainer.propTypes = {
  cards: PropTypes.object,
  fetchData: PropTypes.func.isRequired,
  getPageTotal: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired
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
