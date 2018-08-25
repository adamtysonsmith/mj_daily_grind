import { createSelector } from 'reselect'
import { identity } from '../../utils'

const selectNewDrink = (state) => state.getIn(['NewDrink', 'newDrink'])
const selectNewDrinkId = (state) => state.getIn(['NewDrink', 'newDrink', 'drink_id'])
const selectNewDrinkQty = (state) => state.getIn(['NewDrink', 'newDrink', 'drink_qty'])

export const makeSelectNewDrink = () => createSelector(selectNewDrink, identity)
export const makeSelectNewDrinkId = () => createSelector(selectNewDrinkId, identity)
export const makeSelectNewDrinkQty = () => createSelector(selectNewDrinkQty, identity)
