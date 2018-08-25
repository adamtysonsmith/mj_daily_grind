import { takeLatest, call, select, put } from 'redux-saga/effects'

export default function* newDrinkSaga() {
  yield takeLatest('*', () => console.log('newDrinkSaga!'));
}
