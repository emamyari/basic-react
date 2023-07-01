import React, { Component } from 'react';
import Counter from './components/counter';
import Counters from './components/counters';
import Nav from './components/nav';


class App extends Component {
  state = {
    pro: [
      { id: 1, title: 'iphone', qyt: 5, color: 'white' },
      { id: 2, title: 'mac book', qyt: 2, color: 'gray' },
      { id: 3, title: 'desk', qyt: 1, color: 'black' },
      { id: 4, title: 'ghahve saz', qyt: 10, color: 'brown' },
      { id: 5, title: 'projector', qyt: 4, color: '--' },
    ]
  }
  handleDel = (id) => {
    let newList = this.state.pro.filter(item => item.id != id)
    this.setState({ pro: newList })
  }
  handleInc = (iiiiid) => {

    let element = this.state.pro.filter(item => item.id == iiiiid)[0]
    let ja = this.state.pro.indexOf(element)
    element.qyt = element.qyt + 1
    let newList = this.state.pro.filter(item => item.id != iiiiid)
    let finalList = [...newList.slice(0, ja), element, ...newList.slice(ja)]
    this.setState({ pro: finalList })
    
  }

  render() {
    return (
      <div>
        <Nav list={this.state.pro} ></Nav>
        <Counters list={this.state.pro} dl={this.handleDel} hi={this.handleInc} ></Counters>
      </div>
    );
  }
}

export default App;