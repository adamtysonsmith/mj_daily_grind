import { fromJS } from 'immutable'
import createReducer from '../createReducer'

import {
  GET_DRINKS_REQUEST,
  GET_DRINKS_SUCCESS,
  GET_DRINKS_ERROR,
} from './constants'

export const drinksInitialState = fromJS({
  drinks: [],
  loading: false,
  error: false,
})

export const drinksReducer = createReducer(drinksInitialState, {
  [GET_DRINKS_REQUEST]: (state, payload) => state
    .set('loading', true)
    .set('error', null),
  [GET_DRINKS_SUCCESS]: (state, payload) => state
    .set('drinks', fromJS(payload))
    .set('loading', false),
  [GET_DRINKS_ERROR]: (state, payload) => state
    .set('error', fromJS(payload))
    .set('loading', false),
})
