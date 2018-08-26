import { createSelector } from 'reselect'
import { stateToJS } from '../utils'

const selectDrinks = (state) => state.getIn(['Drinks', 'drinks'])

export const makeSelectDrinks = () => createSelector(selectDrinks, stateToJS)
