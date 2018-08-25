import { takeLatest, call, select, put } from 'redux-saga/effects'
import ApiService from '../api-service'

import { GET_DRINKS_REQUEST } from '../state/Drinks/constants'
import { getDrinksSuccess, getDrinksError } from '../state/Drinks/actions'

function* getDrinks(action) {
  const response = yield call(ApiService.getDrinks)
  if (response && response.error) yield put(getDrinksError(response.error))
  else yield put(getDrinksSuccess(response))
}

export default function* drinksSaga() {
  yield takeLatest(GET_DRINKS_REQUEST, getDrinks);
}
