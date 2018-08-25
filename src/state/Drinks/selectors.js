import { createSelector } from 'reselect'
import { identity } from '../../utils'

const selectDrinks = (state) => state.getIn(['Drinks', 'drinks'])

export const makeSelectDrinks = () => createSelector(selectDrinks, identity)
