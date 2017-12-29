import {
  IS_FETCHING,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_DATA,
  FETCH_DETAIL
} from '../actions/types'

const INITIAL_STATE = {
  isFetching: false,
  fecthDataSuccess: null,
  fetchDataError: null,
  MusicEvents: [],
  EventDetail: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DETAIL:
      return { ...state, EventDetail: action.payload, isFetching: false }
    case FETCH_DATA:
      return { ...state, MusicEvents: action.payload, isFetching: false }
    case IS_FETCHING:
      return { ...state, isFetching: action.payload }
    case FETCH_SUCCESS:
      return { ...state, isFetching: false, fecthDataSuccess: action.payload }
    case FETCH_ERROR:
      return { ...state, isFetching: false, fetchDataError: action.payload }

    default:
      return state
  }
}
