import React, { Component } from 'react';
import Counter from './components/counter';
import Counters from './components/counters';
import Nav from './components/nav';
 

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Nav></Nav>
       <Counters></Counters>
      </div>
    );
  }
}

export default App;