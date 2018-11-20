import { createSelector } from 'reselect'

// select cards from state
export const cardsSelector = createSelector(
  state => state.cards,
  items => items
)