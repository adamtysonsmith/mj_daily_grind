import { Map } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { drinksInitialState, drinksReducer } from './state/Drinks/reducer'

export const rootReducer = combineReducers({
  Drinks: drinksReducer,
})

export const initialState = Map({
  Drinks: drinksInitialState,
})
