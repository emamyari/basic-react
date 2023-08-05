import React, { Component } from 'react';
import Counter from './components/counter';
import Counters from './components/counters';
import Nav from './components/nav';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Navbar from './components/nav';
import Button from '@mui/material/Button';

class App extends Component {
  state = {
    pro: [

    ],
    options: {}
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


    let li = []
    this.state.pro.forEach(element => {
      let myObj = { name: element.title, y: element.qyt * element.unitPrice }
      li.push(myObj)
    });
    let options = {
      chart: { type: 'pie' },
      series: { data: li }
    }

    this.setState({ options: options })





  }

  componentDidMount() {
    fetch('http://192.168.1.36:7000/serverData')
      .then(response => response.json())
      .then(data => {
        this.setState({ pro: data })
        //--------------------------------------------   
        let li = []
        data.forEach(element => {
          let myObj = { name: element.title, y: element.qyt * element.unitPrice }
          li.push(myObj)
        });
        let options = {
          chart: { type: 'pie' },
          series: { data: li }
        }
        this.setState({ options: options })
      });
  }

  render() {
    console.log('render')
    let a = this.state.jp
    return (
      <div>
        <Nav list={this.state.pro} ></Nav>
        <Counters list={this.state.pro} dl={this.handleDel} hi={this.handleInc} ></Counters>

        <HighchartsReact highcharts={Highcharts} options={this.state.options}></HighchartsReact>

      </div>
    );
  }
}

export default App;