import { takeLatest, call, select, put } from 'redux-saga/effects'

export default function* drinksConsumedSaga() {
  yield takeLatest('*', () => console.log('drinksConsumedSaga!'));
}
