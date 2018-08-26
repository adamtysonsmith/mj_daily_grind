import { fromJS } from 'immutable'
import { createReducer } from '../utils'

import {
  GET_DRINKS_CONSUMED_REQUEST,
  GET_DRINKS_CONSUMED_SUCCESS,
  GET_DRINKS_CONSUMED_ERROR,
} from './constants'

export const drinksConsumedInitialState = fromJS({
  drinksConsumed: [],
  error: null,
})

export const drinksConsumedReducer = createReducer(drinksConsumedInitialState, {
  [GET_DRINKS_CONSUMED_REQUEST]: (state, payload) => state
    .set('error', null),
  [GET_DRINKS_CONSUMED_SUCCESS]: (state, payload) => state
    .set('drinksConsumed', fromJS(payload)),
  [GET_DRINKS_CONSUMED_ERROR]: (state, payload) => state
    .set('error', fromJS(payload)),
})
