import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  padding: 20px 40px;
  border-radius: 5px;
  border: none;
  font-family: Roboto;
  font-size: 16px;
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
  <StyledButton onClick={props.disabled ? () => {} : props.onClick} disabled={props.disabled}>
    {props.label}
  </StyledButton>

export default Button

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}
