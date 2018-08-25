import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { H1 } from './typography'

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

const Drink = (props) =>
  <DrinkContainer
    onClick={props.selectDrink(props.drink.id)}
    selected={props.drink.id === props.NewDrinkId}
  >
    <h2>{props.drink.name}</h2>
    <p>{props.drink.caffeine_mg_per_serving} mg per serving</p>
    <p>{props.drink.servings_per_drink} servings</p>
  </DrinkContainer>

export default (props) =>
  <div>
    <H1>What Kind of Drink?</H1>
    <div style={{ marginBottom: '40px' }}>
      {
        props.Drinks.length &&
        props.Drinks.map((drink, i) => <Drink key={i} drink={drink} {...props} />)
      }
    </div>
    <Button onClick={props.goToSelectNewDrinkQty}>Next</Button>
  </div>
