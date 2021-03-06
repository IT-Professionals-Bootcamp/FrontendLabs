import React, { Component } from 'react';
import LanguageContext from './LanguageContext';
import ColorContext from './ColorContext';


class Button extends Component {
  renderButton(color) {
    return (
      <button className={`ui button ${color}`} >
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'Submit' : 'Onayla'}
        </LanguageContext.Consumer>
      </button>
    )
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
