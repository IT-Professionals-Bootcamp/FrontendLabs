import React, { useReducer } from 'react'
import ColorAdj from './ColorAdj';

const reducer = (state, action) => {
  //state: all colors
  //action : type:color payload:incam change amount
  switch (action.type) {
    case 'red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case 'green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }

}

const INCAM = 15
const App = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state;
  return (
    <div style={{ display: 'grid', gridTemplate: 'auto / 1fr 2fr', margin: '20px' }}>
      <div style={{ backgroundColor: `rgb(${red},${green}, ${blue})` }} >
      </div>
      <div>
        <ColorAdj
          color='red'
          value={red}
          onIncrease={() => dispatch({ type: 'red', payload: INCAM })}
          onDecrease={() => dispatch({ type: 'red', payload: -1 * INCAM })}
        />
        <ColorAdj
          color='green'
          value={green}
          onIncrease={() => dispatch({ type: 'green', payload: INCAM })}
          onDecrease={() => dispatch({ type: 'green', payload: -1 * INCAM })}
        />
        <ColorAdj
          color='blue'
          value={blue}
          onIncrease={() => dispatch({ type: 'blue', payload: INCAM })}
          onDecrease={() => dispatch({ type: 'blue', payload: -1 * INCAM })}
        />

      </div>
    </div>
  )
}

export default App
