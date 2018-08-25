import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Dashboard from './containers/Dashboard'

export default () =>
  <Provider store={store}>
    <Router>
      <Dashboard />
    </Router>
  </Provider>
