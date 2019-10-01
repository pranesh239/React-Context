# React's Context API

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

🚨 Use Context only when some data needs to be accessed by **many components at different nesting levels**. Apply it sparingly because it makes component reuse more difficult. 🚨

### Context creation

<small>src/Context/NameContext.js</small>

```js
import { createContext } from 'react';
import { noop } from '../utils';

/**
 * defaultValue only used when a component does not have a matching
 * Provider above it in the tree
 */
const defaultValue = {
  name: 'Initial name',
  updateName: noop
};

const NamedContext = createContext(defaultValue);
export default NamedContext;
```

### Providing data through Context

<small>src/Components/App.js</small>

```js
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
      // Context.Provider takes the responsibility in passing data to its nested components and those data are passed through its value prop
      <NameContext.Provider value={{ ...this.state }}>
        <Name />
        <NameConsumer />
      </NameContext.Provider>
    );
  }
}

export default App;
```

### Consuming data from Context

Consumption of data can be done in two ways:

1. through `static contextType` property _(Class.contextType)_
2. through Context's `Consumer` component _(Context.Consumer)_

#### through Class.contextType

_You can only subscribe to a single context using this API_

<small>src/Components/Name.js</small>

```js
import React, { Component } from 'react';
import NameContext from '../Context/NameContext';

class Name extends Component {
  // contextType passes the data from provider through context (this.context) property of consuming class.
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
```

#### through Context.Consumer

<small>src/Components/NameConsumer.js</small>

`Context.Consumer` makes use of [render props component pattern](https://github.com/pranesh239/react-component-patterns/tree/render-props) to provide data

```js
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
```
