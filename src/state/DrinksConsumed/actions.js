import {
  GET_DRINKS_CONSUMED_REQUEST,
  GET_DRINKS_CONSUMED_SUCCESS,
  GET_DRINKS_CONSUMED_ERROR,
} from './constants'

export const getDrinksConsumed = (date) => ({
  type: GET_DRINKS_CONSUMED_REQUEST,
  payload: date,
})

export const getDrinksConsumedSuccess = (drinksConsumed) => ({
  type: GET_DRINKS_CONSUMED_SUCCESS,
  payload: drinksConsumed,
})

export const getDrinksConsumedError = (err) => ({
  type: GET_DRINKS_CONSUMED_ERROR,
  payload: err,
})
