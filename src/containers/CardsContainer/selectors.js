import { createSelector } from 'reselect'

export const cardsSelector = createSelector(
  state => state.cards,
  items => items
)