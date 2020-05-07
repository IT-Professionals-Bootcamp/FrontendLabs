import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from './LanguageContext';
import ColorContext from './ColorContext';
class App extends Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language :
          <i className="flag gb uk" onClick={() => this.onLanguageChange('english')} />
          <i className="flag tr" onClick={() => this.onLanguageChange('turkish')} />
        </div>

        <ColorContext.Provider value='red'>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>


      </div>
    )
  }
}

export default App
