import { fromJS, Record } from 'immutable'
import createReducer from '../createReducer'

import {
  SET_NEW_DRINK,
  SET_NEW_DRINK_QTY,
  NEW_DRINK_CONSUMED_REQUEST,
  NEW_DRINK_CONSUMED_SUCCESS,
  NEW_DRINK_CONSUMED_ERROR,
  RESET_NEW_DRINK,
} from './constants'

const newDrinkRecord = Record({
  drink_id: null,
  drink_qty: 0,
});

export const newDrinkInitialState = fromJS({
  newDrink: newDrinkRecord(),
  loading: false,
  error: null,
})

export const newDrinkReducer = createReducer(newDrinkInitialState, {
  [SET_NEW_DRINK]: (state, payload) => state
    .setIn(['newDrink', 'drink_id'], payload),
  [SET_NEW_DRINK_QTY]: (state, payload) => state
    .setIn(['newDrink', 'drink_qty'], payload),
  [NEW_DRINK_CONSUMED_REQUEST]: (state, payload) => state
    .set('loading', true)
    .set('error', null),
  [NEW_DRINK_CONSUMED_SUCCESS]: (state, payload) => state
    .set('loading', false),
  [NEW_DRINK_CONSUMED_ERROR]: (state, payload) => state
    .set('loading', false)
    .set('error', fromJS(payload)),
  [RESET_NEW_DRINK]: (state, payload) => state
    .set('newDrink', newDrinkRecord()),
})
