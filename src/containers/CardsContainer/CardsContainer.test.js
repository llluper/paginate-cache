import reducer, { initialState } from './reducer';
import * as types from './actions';

describe('CardContainer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual({ 
      ...initialState 
    })
  })

  it('should handle FETCH_DATA_BEGIN', () => {
    expect(
      reducer(initialState, {
        type: types.FETCH_DATA_BEGIN
      })
    ).toEqual({
      ...initialState,
      pages: { ...initialState.pages, retrieving: 4 }
    })

    expect(
      reducer({ ...initialState, pages: { retrieving: 4 } }, {
        type: types.FETCH_DATA_BEGIN
      })
    ).toEqual({
      ...initialState,
      pages: { retrieving: 8 }
    })
  })

  it('should handle NEXT_PAGE', () => {
    expect(
      reducer(initialState, {
        type: types.NEXT_PAGE
      })
    ).toEqual({
      ...initialState,
      pages: { ...initialState.pages, current: 1 }
    })
  })

  it('should handle PREV_PAGE', () => {
    expect(
      reducer({ ...initialState, pages: { current: 4 } }, {
        type: types.PREV_PAGE
      })
    ).toEqual({
      ...initialState,
      pages: { current: 3 }
    })
  })

  it('should handle TOGGLE_DRAWER', () => {
    expect(
      reducer(initialState, {
        type: types.TOGGLE_DRAWER,
        isOpen: true, 
        openIndex: 0
      })
    ).toEqual({ ...initialState, details: { isOpen: true, openIndex: 0 } })
  })
})