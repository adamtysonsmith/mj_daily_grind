import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const HOC = (Component) => withRouter(class extends React.Component {
  static propTypes = {
    history: PropTypes.array,
  }

  goToDashboard = () => {
    this.props.history.push('/')
  }

  goToSelectNewDrink = () => {
    this.props.history.push('/select-drink')
  }

  goToSelectNewDrinkQty = () => {
    this.props.history.push('/select-drink-qty')
  }

  render() {
    const props = {
      goToDashboard: this.goToDashboard,
      goToSelectNewDrink: this.goToSelectNewDrink,
      goToSelectNewDrinkQty: this.goToSelectNewDrinkQty,
    }

    return <Component {...props} />
  }
})

export default HOC
