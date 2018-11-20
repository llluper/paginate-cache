export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const GET_PAGE_TOTAL_SUCCESS = "GET_PAGE_TOTAL_SUCCESS";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data }
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});

export const nextPage = () => ({
  type: NEXT_PAGE
});

export const prevPage = () => ({
  type: PREV_PAGE
});

export const getPageTotalSuccess = data => ({
  type: GET_PAGE_TOTAL_SUCCESS,
  payload: { data }
}); 

export const toggleDrawer = (open, index = 0) => ({
  type: TOGGLE_DRAWER,
  open,
  index
});
