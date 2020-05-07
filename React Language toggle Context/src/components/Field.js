import React, { Component } from 'react';
import LanguageContext from './LanguageContext';

class Field extends Component {


  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {(value) => value === 'english' ? 'Name' : 'Isim'}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    )
  }
}

export default Field;
