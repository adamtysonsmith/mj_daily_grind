import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { makeSelectDrinks } from '../state/Drinks/selectors'
import { getDrinks } from '../state/Drinks/actions'
import Dashboard from '../components/Dashboard'

const mapStateToProps = createStructuredSelector({
  Drinks: makeSelectDrinks()
})

const connector = connect(mapStateToProps)

export default withRouter(connector(class extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    Drinks: PropTypes.array,
  }

  componentDidMount() {
    this.props.dispatch(getDrinks())
  }

  render() {
    const props = {
      ...this.props
    }

    return <Dashboard {...props} />
  }
}))
