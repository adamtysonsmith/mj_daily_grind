import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { makeSelectNewDrinkQty, makeSelectNewDrink } from '../state/NewDrink/selectors'
import { setNewDrinkQty, newDrinkConsumed } from '../state/NewDrink/actions'

import Navigation from './Navigation'
import SelectDrinkQty from '../components/SelectDrinkQty'

const mapStateToProps = createStructuredSelector({
  NewDrink: makeSelectNewDrink(),
  NewDrinkQty: makeSelectNewDrinkQty(),
})

const connector = compose(Navigation, connect(mapStateToProps))

export default connector(class extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    NewDrinkQty: PropTypes.number,
    goToDashboard: PropTypes.func,
  }

  onSliderChange = (val) => this.props.dispatch(setNewDrinkQty(val))

  submit = () => {
    this.props.dispatch(newDrinkConsumed(this.props.NewDrink))
    this.props.goToDashboard()
  }

  render() {
    const props = {
      ...this.props,
      onSliderChange: this.onSliderChange,
      submit: this.submit,
    }

    return <SelectDrinkQty {...props} />
  }
})
