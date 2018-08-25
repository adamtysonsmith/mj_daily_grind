import React from 'react'
import styled from 'styled-components'

export default styled.a`
  padding: 20px 40px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  background-color: yellowgreen;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
