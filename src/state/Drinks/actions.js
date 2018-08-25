import {
  GET_DRINKS_REQUEST,
  GET_DRINKS_SUCCESS,
  GET_DRINKS_ERROR,
} from './constants'

export const getDrinks = () => ({
  type: GET_DRINKS_REQUEST
})

export const getDrinksSuccess = (drinks) => ({
  type: GET_DRINKS_SUCCESS,
  payload: drinks,
})

export const getDrinksError = (err) => ({
  type: GET_DRINKS_ERROR,
  payload: err,
})
