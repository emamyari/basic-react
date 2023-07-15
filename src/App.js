import React, { Component } from 'react';
import Counter from './components/counter';
import Counters from './components/counters';
import Nav from './components/nav';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Navbar from './components/NewNav';
import Button from '@mui/material/Button';

class App extends Component {
  state = {
    pro: [
      { id: 1, title: 'iphone', qyt: 5, color: 'white', unitPrice: 100 },
      { id: 2, title: 'mac book', qyt: 2, color: 'gray', unitPrice: 90 },
      { id: 3, title: 'desk', qyt: 1, color: 'black', unitPrice: 70 },
      { id: 4, title: 'ghahve saz', qyt: 10, color: 'brown', unitPrice: 130 },
      { id: 5, title: 'projector', qyt: 4, color: '--', unitPrice: 200 },
    ]
  }

  options = {
    chart:{type:'pie'},
    series: [{
      data: [1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,]
    }]
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
    let a = this.state.jp
    return (
      <div>
        <Button variant='outlined'>ewfefwefwewef</Button>
        <Nav list={this.state.pro} ></Nav>
        <Counters list={this.state.pro} dl={this.handleDel} hi={this.handleInc} ></Counters>

        <HighchartsReact highcharts={Highcharts}  options={this.options}></HighchartsReact>
 
      </div>
    );
  }
}

export default App;