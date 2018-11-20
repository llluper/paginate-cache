import { FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, NEXT_PAGE, PREV_PAGE, TOGGLE_DRAWER, GET_PAGE_TOTAL_SUCCESS } from './actions';

const initialState = {
  pagesRetrieved: 0,
  pagesRetrieving: 0,
  currentPage: 0,
  totalPages: 0,
  list: [],
  open: false,
  openCard: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };
    case TOGGLE_DRAWER:
      return { ...state, open: action.open, openCard: action.index };
    case FETCH_DATA_BEGIN:
      return { ...state, pagesRetrieving: state.pagesRetrieving + 4 };
    case FETCH_DATA_SUCCESS:
      // pagesRetrieved + 4 because each fetch of data returns 4 pages worth of data (48 objects)
      return { ...state, pagesRetrieved: state.pagesRetrieved + 4, list: [...state.list, ...action.payload.data] };
    case FETCH_DATA_FAILURE:
      return { ...state, pagesRetrieving: state.pagesRetrieving - 4, error: action.payload.error };
    case GET_PAGE_TOTAL_SUCCESS:
      return { ...state, totalPages: parseInt(action.payload.data.length / 12) + (action.payload.data.length % 12 === 0 ? 0 : 1) };
    default:
      return state
  }
}