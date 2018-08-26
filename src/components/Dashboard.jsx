import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Gauge from 'react-svg-gauge'
import Button from './Button'
import { H1, H2 } from './typography'
import coffee from '../images/coffee-seeds.png'

// caffeine mg thresholds
const safeThreshold = 300
const warningThreshold = 500

const DailyMg = styled.p`
  font-size: 45px;
  font-weight: bold;
  margin-top: -90px;
  margin-bottom: 30px;
  color: black;
  span {
    font-size: 25px;
  }
`

const LogoImg = styled.img`
  float: left;
  margin-top: -5px;
  width: 35px;
`

const Emoji = styled.span`
  font-size: 18px;
`

const ChartTitle = styled(H2)`
  margin-bottom: -20px;
`

const Header = () =>
  <div>
    <LogoImg src={coffee} />
    <H1>The Daily Grind</H1>
    <hr />
  </div>

const EmojiMessage = (props) => {
  const P = styled.p`
    margin-bottom: 60px;
  `

  if (props.mgConsumedToday <= safeThreshold) {
    return <P><Emoji>✅</Emoji> You are operating at a safe level.</P>
  }
  if (props.mgConsumedToday <= warningThreshold) {
    return <P><Emoji>⚠️</Emoji> Be careful not to drink too much!</P>
  }

  return <P><Emoji>☠</Emoji> Slow down boss, you're off the rails!</P>
}

const getGaugeColor = (mg) => {
  if (mg <= safeThreshold) return 'yellowgreen'
  if (mg <= warningThreshold) return 'orange'
  return 'red'
}

const Dashboard = (props) => 
  <div>
    <Header />
    <ChartTitle>Today's Caffeine Intake</ChartTitle>
    <Gauge
      value={props.MgConsumedToday}
      color={getGaugeColor(props.MgConsumedToday)}
      valueLabelStyle={{ display: 'none' }}
      width={300}
      height={200}
      min={0}
      max={500}
      label=""
    />
    <DailyMg>
      {props.MgConsumedToday}<span>mg</span>
    </DailyMg>
    <EmojiMessage mgConsumedToday={props.MgConsumedToday} />
    <Button
      onClick={props.goToSelectNewDrink}
      label="Record Drink"
    />
  </div>

export default Dashboard

Dashboard.propTypes = {
  MgConsumedToday: PropTypes.number.isRequired,
  goToSelectNewDrink: PropTypes.func.isRequired,
}

EmojiMessage.propTypes = {
  mgConsumedToday: PropTypes.number.isRequired,
}
