import { 
  FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, 
  NEXT_PAGE, PREV_PAGE, TOGGLE_DRAWER, GET_PAGE_TOTAL_SUCCESS 
} from './actions';

export const initialState = {
  pages: {
    retrieved: 0,
    retrieving: 0,
    current: 0,
    total: 0
  },
  list: [],
  details: {
    isOpen: false,
    openIndex: 0
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, pages: { ...state.pages, current: state.pages.current + 1 } };
    case PREV_PAGE:
      return { ...state, pages: { ...state.pages, current: state.pages.current - 1 } };
    case TOGGLE_DRAWER:
      return { ...state, details: { isOpen: action.isOpen, openIndex: action.openIndex } };
    case FETCH_DATA_BEGIN:
      return { ...state, pages: { ...state.pages, retrieving: state.pages.retrieving + 4 } };
    case FETCH_DATA_SUCCESS:
      // pagesRetrieved + 4 because each fetch of data returns 4 pages worth of data (48 objects)
      return { ...state, pages: { ...state.pages, retrieved: state.pages.retrieved + 4 }, list: [...state.list, ...action.payload.data] };
    case FETCH_DATA_FAILURE:
      return { ...state, pages: { ...state.pages, retrieving: state.pages.retrieving - 4, error: action.payload.error } };
    case GET_PAGE_TOTAL_SUCCESS:
      // get card list length and divide it by 12 (cards per page), if there is remainder add 1 (extra page)
      return { ...state, pages: { ...state.pages, total: parseInt(action.payload.data.length / 12) + (action.payload.data.length % 12 === 0 ? 0 : 1) } };
    default:
      return state
  }
}