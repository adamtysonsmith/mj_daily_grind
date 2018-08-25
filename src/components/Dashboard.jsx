import React from 'react'
import styled from 'styled-components'

const DailyMg = styled.p`
  font-size: 40px;
  font-weight: bold;
`

export default () =>
  <div>
    <h1>The Daily Grind</h1>
    <DailyMg>400</DailyMg>
    <p>HIGH</p>

    <h2>Suggested Drink</h2>
    <p>How about a latte?</p>
  </div>