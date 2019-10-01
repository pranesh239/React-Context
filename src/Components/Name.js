import React, { Component } from 'react';
import NameContext from '../Context/NameContext';

class Name extends Component {
  static contextType = NameContext;
  render() {
    return (
      <>
        {this.context.name}
        <button onClick={this.context.updateName}>Change name</button>
      </>
    );
  }
}

export default Name;
