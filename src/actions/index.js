import axios from 'axios'

import {
  IS_FETCHING,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_DATA,
  FETCH_DETAIL
} from './types'
import { error } from 'util'

export function isFetching() {
  return {
    type: IS_FETCHING,
    payload: true
  }
}

export function fetchSuccess(message) {
  return {
    type: FETCH_SUCCESS,
    payload: message
  }
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    payload: error
  }
}

// Music events in Los Angeles
const API_KEY = '8OFslLKAScRkj3AVXZbEtfVPHzU5Ku3d'
const TICKET_MASTER_URL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=${API_KEY}`
const ATTRACTION_DETAIL = `https://app.ticketmaster.com/discovery/v2/attractions/K8vZ9175BhV.json?apikey=8OFslLKAScRkj3AVXZbEtfVPHzU5Ku3d`
export function fetchData() {
  const request = axios.get(TICKET_MASTER_URL)

  return dispatch => {
    dispatch(isFetching())
    request
      .then(response => {
        dispatch({ type: FETCH_DATA, payload: response.data._embedded.events })
        dispatch(fetchSuccess(response.status))
      })
      .catch(error => dispatch(fetchError('Something went Wrong')))
  }
}

export function fetchDetail(id) {
  const EVENT_DETAIL_URL = `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=8OFslLKAScRkj3AVXZbEtfVPHzU5Ku3d`
  const request = axios.get(EVENT_DETAIL_URL)

  return dispatch => {
    dispatch(isFetching())
    request
      .then(response => {
        dispatch({ type: FETCH_DETAIL, payload: response.data })
        dispatch(fetchSuccess(response.status))
      })
      .catch(error => dispatch(fetchError('Something went Wrong')))
  }
}
