import React, { Component } from 'react';
import NameContext from '../Context/NameContext';

class NameConsumer extends Component {
  state = {};
  render() {
    return (
      <NameContext.Consumer>
        {({ name, updateName }) => {
          return (
            <>
              <h1>{name}</h1>
              <button onClick={updateName}>Change name through consumer</button>
            </>
          );
        }}
      </NameContext.Consumer>
    );
  }
}

export default NameConsumer;
