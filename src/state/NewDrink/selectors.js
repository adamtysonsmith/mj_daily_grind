import { createSelector } from 'reselect'
import { stateToJS } from '../utils'

const selectNewDrink = (state) => state.getIn(['NewDrink', 'newDrink'])
const selectNewDrinkId = (state) => state.getIn(['NewDrink', 'newDrink', 'drink_id'])
const selectNewDrinkQty = (state) => state.getIn(['NewDrink', 'newDrink', 'drink_qty'])

export const makeSelectNewDrink = () => createSelector(selectNewDrink, stateToJS)
export const makeSelectNewDrinkId = () => createSelector(selectNewDrinkId, stateToJS)
export const makeSelectNewDrinkQty = () => createSelector(selectNewDrinkQty, stateToJS)
