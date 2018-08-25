import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Content from './components/Content'
import Dashboard from './containers/Dashboard'
import SelectDrink from './containers/SelectDrink'
import SelectDrinkQty from './containers/SelectDrinkQty'

export default () =>
  <Provider store={store}>
    <Router>
      <Content>
        <Route exact path="/" component={Dashboard} />
        <Route path="/select-drink" component={SelectDrink} />
        <Route path="/select-drink-qty" component={SelectDrinkQty} />
      </Content>
    </Router>
  </Provider>
