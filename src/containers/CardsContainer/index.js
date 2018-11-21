import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Cards, CardDetails, Paginator } from '../../components';
import { nextPage, prevPage, toggleDrawer } from './actions';
import { fetchData, getPageTotal } from './thunks';
import { cardsSelector, detailsSelector, pagesSelector } from './selectors';

class CardsContainer extends Component {
  componentWillMount = () => {
    // fetch first round of data from api and get total page number
    this.props.fetchData(this.props.pages.retrieved);
    this.props.getPageTotal();
  }
  nextPage = () => {
    // if currentPage reaches 4 pages from the end of the list, cache another 4 (8 pages max cached ahead)
    if (this.props.pages.current > this.props.pages.retrieving - 7) {
      this.props.fetchData(this.props.pages.retrieving);
    }
    this.props.nextPage();
  }
  prevPage = () => {
    // prevent user from going back past page 1
    if (this.props.pages.current > 0) {
      this.props.prevPage();
    }
  }

  render() {
    const { cards, details, pages, toggleDrawer } = this.props;
    return (
      <div className="Cards" style={{ margin: '100px auto 0' }}>
        <Cards cards={cards} pages={pages} toggleDrawer={toggleDrawer} />
        <Paginator currentPage={pages.current} totalPages={pages.total} nextPage={this.nextPage} prevPage={this.prevPage} />
        {
          pages.retrieved 
            ? <CardDetails index={details.openIndex} open={details.isOpen} card={cards[details.openIndex]} toggleDrawer={toggleDrawer} />  
          : <div />
        }
      </div>
    );
  }
}

CardsContainer.propTypes = {
  cards: PropTypes.array,
  pages: PropTypes.object,
  details: PropTypes.object,
  fetchData: PropTypes.func.isRequired,
  getPageTotal: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cards: cardsSelector(state),
  details: detailsSelector(state),
  pages: pagesSelector(state)
})
const mapDispatchToProps = dispatch => ({
  fetchData: (pagesRetrieved) => dispatch(fetchData(pagesRetrieved)),
  getPageTotal: () => dispatch(getPageTotal()),
  nextPage: () => dispatch(nextPage()),
  prevPage: () => dispatch(prevPage()),
  toggleDrawer: (isOpen, openIndex) => dispatch(toggleDrawer(isOpen, openIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
