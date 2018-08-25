import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
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

export default (props) =>
  <Button onClick={props.disabled ? () => {} : props.onClick} disabled={props.disabled}>
    {props.children}
  </Button>
