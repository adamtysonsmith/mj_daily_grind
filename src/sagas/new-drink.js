import { takeLatest, call, select, put } from 'redux-saga/effects'
import ApiService from '../api-service'
import { NEW_DRINK_CONSUMED_REQUEST } from '../state/NewDrink/constants'
import { resetNewDrink, newDrinkConsumedSuccess, newDrinkConsumedError } from '../state/NewDrink/actions'
import { getDrinksConsumed } from '../state/DrinksConsumed/actions'

function* newDrinkConsumed(action) {
  const response = yield call(ApiService.postDrinkConsumed, action.payload)
  if (response && response.error) {
    yield put(newDrinkConsumedError(response.error))
  } else {
    yield put(newDrinkConsumedSuccess())
    yield put(getDrinksConsumed())
  }

  yield put(resetNewDrink())
}

export default function* newDrinkSaga() {
  yield takeLatest(NEW_DRINK_CONSUMED_REQUEST, newDrinkConsumed);
}
