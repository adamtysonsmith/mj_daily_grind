import { createSelector } from 'reselect'
import moment from 'moment'
import { stateToJS } from '../utils'

const selectDrinksConsumed = (state) => state.getIn(['DrinksConsumed', 'drinksConsumed'])

const selectTotalMgConsumedToday = (state) => {
  const drinksConsumed = selectDrinksConsumed(state)
  const drinks = state.getIn(['Drinks', 'drinks'])

  return drinksConsumed
    .filter(consumed => {
      const date = moment(consumed.get('timestamp'))
      return moment().isSame(date, 'day') 
    })
    .reduce((sum, consumed) => {
      const matchDrinkId = drink => drink.get('id') === consumed.get('drink_id')
      const drink = drinks.find(matchDrinkId)
      const servingsConsumed = consumed.get('drink_qty') * drink.get('servings_per_drink')
      const mgConsumed = drink.get('caffeine_mg_per_serving') * servingsConsumed
      return sum += mgConsumed
    }, 0)
}

export const makeSelectDrinksConsumed = () => createSelector(selectDrinksConsumed, stateToJS)
export const makeSelectTotalMgConsumedToday = () => createSelector(selectTotalMgConsumedToday, stateToJS)

