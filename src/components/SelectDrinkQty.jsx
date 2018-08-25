import React from 'react'
import styled from 'styled-components'
import '!style-loader!css-loader!react-input-range/lib/css/index.css'
import InputRange from 'react-input-range'
import { H1 } from './typography'
import Button from './Button'

export default (props) =>
  <div>
    <H1>How Many Have You Had?</H1>
    <p style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '5px' }}>{props.NewDrinkQty}</p>
    <p>Total Drinks</p>

    <div style={{ marginBottom: '60px' }}>
      <InputRange
        minValue={0}
        maxValue={5}
        step={0.5}
        value={props.NewDrinkQty}
        onChange={props.onSliderChange}
      />
    </div>

    <Button onClick={props.submit}>Submit</Button>
  </div>
