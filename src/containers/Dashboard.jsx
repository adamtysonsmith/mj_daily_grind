import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { makeSelectDrinks } from '../state/Drinks/selectors'
import { getDrinks } from '../state/Drinks/actions'
import { getDrinksConsumed } from '../state/DrinksConsumed/actions';
import { makeSelectTotalMgConsumedToday } from '../state/DrinksConsumed/selectors'
import Navigation from './Navigation'
import Dashboard from '../components/Dashboard'

const mapStateToProps = createStructuredSelector({
  Drinks: makeSelectDrinks(),
  MgConsumedToday: makeSelectTotalMgConsumedToday(),
})

const connector = compose(Navigation, connect(mapStateToProps))

export default connector(class extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    Drinks: PropTypes.array,
    MgConsumedToday: PropTypes.number,
    goToSelectNewDrink: PropTypes.func,
  }

  componentDidMount() {
    if (!this.props.Drinks.length) this.props.dispatch(getDrinks())
    this.props.dispatch(getDrinksConsumed())
  }

  render() {
    const props = {
      ...this.props,
    }

    return <Dashboard {...props} />
  }
})
