import React, { Component } from 'react';
import NameContext from '../Context/NameContext';

import Name from './Name';
import NameConsumer from './NameConsumer';

class App extends Component {
  updateName = () => {
    this.setState(state => {
      return {
        name: 'Doe'
      };
    });
  };

  state = {
    name: 'John',
    updateName: this.updateName
  };

  render() {
    return (
      <NameContext.Provider value={{ ...this.state }}>
        <Name />
        <NameConsumer />
      </NameContext.Provider>
    );
  }
}

export default App;
