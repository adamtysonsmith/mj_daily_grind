import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectDrinks } from '../state/Drinks/selectors'
import { makeSelectNewDrinkId } from '../state/NewDrink/selectors'
import { setNewDrink } from '../state/NewDrink/actions'
import Navigation from './Navigation'
import SelectDrink from '../components/SelectDrink'

const mapStateToProps = createStructuredSelector({
  Drinks: makeSelectDrinks(),
  NewDrinkId: makeSelectNewDrinkId(),
})

const connector = compose(Navigation, connect(mapStateToProps))

export default connector(class extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    Drinks: PropTypes.array,
    NewDrinkId: PropTypes.number,
    goToSelectNewDrinkQty: PropTypes.func,
  }

  selectDrink = (drinkId) => () => this.props.dispatch(setNewDrink(drinkId))

  render() {
    const props = {
      ...this.props,
      selectDrink: this.selectDrink,
    }

    return <SelectDrink {...props} />
  }
})
