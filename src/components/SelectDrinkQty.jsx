import React from 'react'
import styled from 'styled-components'
import '!style-loader!css-loader!react-input-range/lib/css/index.css'
import InputRange from 'react-input-range'
import { H1 } from './typography'
import Button from './Button'

const InputContainer = styled.div`
  margin-bottom: 60px;
  .input-range__track--active,
  .input-range__slider {
    background: yellowgreen; 
    border-color: yellowgreen;
  }
`

const Qty = styled.p`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 30px;
`

const Drinks = styled.p`
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 20px;
`

export default (props) =>
  <div>
    <H1>How Many Have You Had?</H1>
    <Qty>{props.NewDrinkQty}</Qty>
    <Drinks>
      { props.NewDrinkQty <= 1 ?' Drink' : 'Drinks' }
    </Drinks>

    <InputContainer>
      <InputRange
        minValue={0}
        maxValue={5}
        step={0.5}
        value={props.NewDrinkQty}
        onChange={props.onSliderChange}
      />
    </InputContainer>

    <Button onClick={props.submit} disabled={!props.NewDrinkQty}>
      Submit
    </Button>
  </div>
