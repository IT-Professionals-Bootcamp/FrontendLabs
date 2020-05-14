import React from 'react'

const ColorAdj = ({ color, value, onIncrease, onDecrease }) => {
  return (
    <div style={{ borderStyle: 'solid', borderColor: `${color}` }} >
      <p> {color.toUpperCase()} : {value} </p>
      <button onClick={onIncrease}> +++ </button>
      <button onClick={onDecrease}> --- </button>

    </div>
  )
}
export default ColorAdj
