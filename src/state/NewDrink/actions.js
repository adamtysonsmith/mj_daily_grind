import {
  SET_NEW_DRINK,
  SET_NEW_DRINK_QTY,
  NEW_DRINK_CONSUMED_REQUEST,
  NEW_DRINK_CONSUMED_SUCCESS,
  NEW_DRINK_CONSUMED_ERROR,
  RESET_NEW_DRINK,
} from './constants'

export const setNewDrink = (drinkId) => ({
  type: SET_NEW_DRINK,
  payload: drinkId,
})

export const setNewDrinkQty = (drinkQty) => ({
  type: SET_NEW_DRINK_QTY,
  payload: drinkQty,
})

export const newDrinkConsumed = (newDrink) => ({
  type: NEW_DRINK_CONSUMED_REQUEST,
  payload: newDrink,
})

export const newDrinkConsumedSuccess = (newDrink) => ({
  type: NEW_DRINK_CONSUMED_SUCCESS,
})

export const newDrinkConsumedError = (err) => ({
  type: NEW_DRINK_CONSUMED_ERROR,
  payload: err,
})

export const resetNewDrink = () => ({
  type: RESET_NEW_DRINK,
})
