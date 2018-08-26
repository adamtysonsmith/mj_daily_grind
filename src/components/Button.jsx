import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const A = styled.a`
  padding: 20px 40px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  background-color: ${props => props.disabled ? 'gray' : 'yellowgreen'};

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const Button = (props) =>
  <A onClick={props.disabled ? () => {} : props.onClick} disabled={props.disabled}>
    {props.label}
  </A>

export default Button

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}
