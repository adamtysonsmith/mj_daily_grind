import { spawn, all } from 'redux-saga/effects'
import drinksSaga from './drinks'
import drinksConsumedSaga from './drinks-consumed'
import newDrinkSaga from './new-drink'

export default function* root() {
  yield all([
    spawn(drinksSaga),
    spawn(drinksConsumedSaga),
    spawn(newDrinkSaga),
  ]);
}
