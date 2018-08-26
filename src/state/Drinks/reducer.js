import { fromJS } from 'immutable'
import { createReducer } from '../utils'

import {
  GET_DRINKS_REQUEST,
  GET_DRINKS_SUCCESS,
  GET_DRINKS_ERROR,
} from './constants'

export const drinksInitialState = fromJS({
  drinks: [],
  error: false,
})

export const drinksReducer = createReducer(drinksInitialState, {
  [GET_DRINKS_REQUEST]: (state, payload) => state
    .set('error', null),
  [GET_DRINKS_SUCCESS]: (state, payload) => state
    .set('drinks', fromJS(payload)),
  [GET_DRINKS_ERROR]: (state, payload) => state
    .set('error', fromJS(payload)),
})
