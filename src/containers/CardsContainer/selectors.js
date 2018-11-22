import { createSelector } from 'reselect'

// select cards list from state
export const cardsSelector = createSelector(
  state => state.cards.list,
  items => items
)

// select cards pages from state
export const pagesSelector = createSelector(
  state => state.cards.pages,
  items => items
)

// select cards details from state
export const detailsSelector = createSelector(
  state => state.cards.details,
  items => items
)