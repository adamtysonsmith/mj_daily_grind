import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { H1, H2 } from './typography'

const DailyMg = styled.p`
  font-size: 50px;
  font-weight: bold;
  margin: 5px;
`

const SuggestedDrink = () =>
  <div style={{ marginBottom: '40px' }}>
    <H2>Suggested Drink</H2>
    <p>How about a latte?</p>
  </div>

export default (props) =>
  <div>
    <H1>The Daily Grind</H1>
    <hr />
    <H2>Caffeine Consumed Today</H2>
    <DailyMg>{props.MgConsumedToday}mg</DailyMg>
    <p>HIGH</p>
    <SuggestedDrink />
    <Button onClick={props.goToSelectNewDrink}>Record Drink</Button>
  </div>
