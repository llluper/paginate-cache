import fetch from 'cross-fetch'

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

export function fetchData(page = 0) {
  return dispatch => {
    dispatch(fetchDataBegin())
    return fetch(`https://atr-test-dh1.aiam-dh.com/atr-gateway/ticket-management/api/v1/tickets?ticketType=incident&sortDirection=DESC&page=${page === 0 ? page : (page / 4) - 1}&perPage=48`,
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "apiToken": "eyJhbGciOiJSUzUxMiIsInppcCI6IkRFRiJ9.eNqUklFLhEAUhf_LfZZIK9v1qUmvMuiqjGMSEeLqFEKOMioFsv-92XoqYt1ez_3OvZfDWWCc9-DAi-rlJGQziXECA6q5aYWshZ68i70WaiWqSTTgmDfXlrWxt7ZpXV0aMAjVtePY9nIE52kBWXVHE0PilTuSpjQOtHtQvQanVmhoORyMnxxxOX3AkuMujQjHU7yrDRzLImGhHyXF6mpO3RB5mSU5czFbxeOEU5-6hNMkPgVzRoMA2fl_UA9jTvnjKuhTjLyzovjC_xnEKhbGSRGhF-A9ydavszz6K9RnA15VPw_HRgDhrMwzZKBV8TF8F2izNW9tUwtd1b79at9dVddCTrMSF3XfweETAAD__w.lFwiErCwiqubdi9lm7Ey1n9tMnA9IxPhTZS2DknZTYChV50gn2VWTsHmZnxpHbm-zg3BNl5q2T75TrWIVhz7w5JNfh01ahY6qI-O0AfEK8F80d0N5Tv0-XoTyr_4FGUM85TiZ6ROW1vTmW9MKHJaB1DfPT4T1GdlbCHoN355H4E"
        }
      })
      .then(response => response.json())
      .then(json => dispatch(fetchDataSuccess(json)))
      .catch(error => dispatch(fetchDataFailure(error)))
  }
}

export function getPageTotal() {
  return dispatch => {
    return fetch(`https://atr-test-dh1.aiam-dh.com/atr-gateway/ticket-management/api/v1/tickets?ticketType=incident&sortDirection=DESC&page=0&perPage=2500`,
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "apiToken": "eyJhbGciOiJSUzUxMiIsInppcCI6IkRFRiJ9.eNqUklFLhEAUhf_LfZZIK9v1qUmvMuiqjGMSEeLqFEKOMioFsv-92XoqYt1ez_3OvZfDWWCc9-DAi-rlJGQziXECA6q5aYWshZ68i70WaiWqSTTgmDfXlrWxt7ZpXV0aMAjVtePY9nIE52kBWXVHE0PilTuSpjQOtHtQvQanVmhoORyMnxxxOX3AkuMujQjHU7yrDRzLImGhHyXF6mpO3RB5mSU5czFbxeOEU5-6hNMkPgVzRoMA2fl_UA9jTvnjKuhTjLyzovjC_xnEKhbGSRGhF-A9ydavszz6K9RnA15VPw_HRgDhrMwzZKBV8TF8F2izNW9tUwtd1b79at9dVddCTrMSF3XfweETAAD__w.lFwiErCwiqubdi9lm7Ey1n9tMnA9IxPhTZS2DknZTYChV50gn2VWTsHmZnxpHbm-zg3BNl5q2T75TrWIVhz7w5JNfh01ahY6qI-O0AfEK8F80d0N5Tv0-XoTyr_4FGUM85TiZ6ROW1vTmW9MKHJaB1DfPT4T1GdlbCHoN355H4E"
        }
      })
      .then(response => response.json())
      .then(json => dispatch(getPageTotalSuccess(json)))
  }
}