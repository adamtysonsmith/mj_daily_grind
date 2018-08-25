import { fromJS } from 'immutable'
import createReducer from '../createReducer'

import {
  GET_DRINKS_CONSUMED_REQUEST,
  GET_DRINKS_CONSUMED_SUCCESS,
  GET_DRINKS_CONSUMED_ERROR,
} from './constants'

export const drinksConsumedInitialState = fromJS({
  drinksConsumed: [],
  loading: false,
  error: null,
})

export const drinksConsumedReducer = createReducer(drinksConsumedInitialState, {
  [GET_DRINKS_CONSUMED_REQUEST]: (state, payload) => state
    .set('loading', true)
    .set('error', null),
  [GET_DRINKS_CONSUMED_SUCCESS]: (state, payload) => state
    .set('loading', false)
    .set('drinksConsumed', fromJS(payload)),
  [GET_DRINKS_CONSUMED_ERROR]: (state, payload) => state
    .set('loading', false)
    .set('error', fromJS(payload)),
})
