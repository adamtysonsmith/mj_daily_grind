import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { H1, H2 } from './typography'
import coffee from '../images/coffee-seeds.png'

const DailyMg = styled.p`
  font-size: 50px;
  font-weight: bold;
  margin: 5px;
  color: ${props => props.overLimit ? 'red' : 'black'}
  span {
    font-size: 25px;
  }
`

const Img = styled.img`
  float: left;
  margin-top: -5px;
  width: 35px;
`

const MessageBorder = styled.p`
  border: 2px solid ${props => props.color};
  padding: 10px;
`

const Emoji = styled.span`
  font-size: 18px;
`

const Header = () =>
  <div>
    <Img src={coffee} />
    <H1>The Daily Grind</H1>
    <hr />
  </div>

const SuggestedDrink = () =>
  <div style={{ marginBottom: '40px' }}>
    <H2>Suggested Drink</H2>
    <p>How about a latte?</p>
  </div>

const EmojiMessage = (props) => {
  if (props.mgConsumedToday <= 300) {
    return (
      <MessageBorder color="yellowgreen">
        {props.children}
        <Emoji>✅</Emoji> You are operating at a safe level.
      </MessageBorder>
    )
  }
  if (props.mgConsumedToday <= 500) {
    return (
      <MessageBorder color="orange">
        {props.children}
        <Emoji>⚠️</Emoji> Be careful not to drink too much!
      </MessageBorder>
    )
  }
  else return (
    <MessageBorder color="red">
      {props.children}
      <Emoji>☠</Emoji> Slow down boss, you're off the rails!
    </MessageBorder>
  )
}

export default (props) =>
  <div>
    <Header />
    <EmojiMessage mgConsumedToday={props.MgConsumedToday}>
      <DailyMg overLimit={props.MgConsumedToday > 500}>
        {props.MgConsumedToday} <span>mg</span>
      </DailyMg>
    </EmojiMessage>
    <SuggestedDrink />
    <Button onClick={props.goToSelectNewDrink}>Record Drink</Button>
  </div>
