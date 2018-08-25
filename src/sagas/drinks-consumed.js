import { takeLatest, call, select, put } from 'redux-saga/effects'
import ApiService from '../api-service'

import { GET_DRINKS_CONSUMED_REQUEST } from '../state/DrinksConsumed/constants'
import { getDrinksConsumedSuccess, getDrinksConsumedError } from '../state/DrinksConsumed/actions'

function* getDrinksConsumed(action) {
  const response = yield call(ApiService.getDrinksConsumed)
  if (response && response.error) yield put(getDrinksConsumedError(response.error))
  else yield put(getDrinksConsumedSuccess(response))
}

export default function* drinksSaga() {
  yield takeLatest(GET_DRINKS_CONSUMED_REQUEST, getDrinksConsumed);
}
