import { Map } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { drinksInitialState, drinksReducer } from './state/Drinks/reducer'
import { newDrinkInitialState, newDrinkReducer } from './state/NewDrink/reducer'
import { drinksConsumedInitialState, drinksConsumedReducer } from './state/DrinksConsumed/reducer'

export const rootReducer = combineReducers({
  Drinks: drinksReducer,
  NewDrink: newDrinkReducer,
  DrinksConsumed: drinksConsumedReducer,
})

export const initialState = Map({
  Drinks: drinksInitialState,
  NewDrink: newDrinkInitialState,
  DrinksConsumed: drinksConsumedInitialState,
})
