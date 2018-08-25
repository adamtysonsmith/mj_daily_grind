import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { H2 } from './typography'

import coffeeCup from '../images/coffee-cup-outline.png'
import coffeePot from '../images/coffee-jar-of-rounded-shape.png'
import bottle from '../images/drink-bottle.png'
import can from '../images/drink-can.png'
import shotGlass from '../images/drink-glass-with-beverage-inside.png'
import glass from '../images/glass-with-dark-drink.png'

const icons = {
  coffeeCup,
  coffeePot,
  bottle,
  can,
  shotGlass,
  glass,
}

const DrinkContainer = styled.div`
  border: 2px solid ${props => props.selected ? 'yellowgreen' : '#f3f3f3' };
  margin: 10px;
  padding: 10px;
  text-align: left;

  h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  p {
    margin: 5px 0px;
  }
`

const ImgContainer = styled.div`
  float: left;
  padding: 15px;
  margin-right: 5px;
`

const Drink = (props) =>
  <DrinkContainer
    onClick={props.selectDrink(props.drink.id)}
    selected={props.drink.id === props.NewDrinkId}
  >
    <ImgContainer>
      <img src={icons[props.drink.icon] || coffeeCup} width="55" />
    </ImgContainer>
    <h2>{props.drink.name}</h2>
    <p>{props.drink.caffeine_mg_per_serving} mg per serving</p>
    <p>{props.drink.servings_per_drink} servings</p>
  </DrinkContainer>

export default (props) =>
  <div>
    <H2>What Kind of Drink?</H2>
    <div style={{ marginBottom: '40px' }}>
      {
        props.Drinks.length &&
        props.Drinks.map((drink, i) => <Drink key={i} drink={drink} {...props} />)
      }
    </div>
    <Button onClick={props.goToSelectNewDrinkQty} disabled={!props.NewDrinkId}>
      Next
    </Button>
  </div>
