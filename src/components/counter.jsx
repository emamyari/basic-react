import React, { Component } from 'react';

class Counter extends Component {
    state = {}
    handleDel=()=>{
        alert(123)
    }
    render() {
         let a=''
         this.props.tedad==0?a='zero':a=this.props.tedad
         return (
            <div>
                <button className='btn btn-success m-1'>+</button>
                <span className='bg-primary m-1 btn text-light'>{a} </span>
                <button className='btn btn-warning m-1'>-</button>
                <button onClick={this.handleDel} className='btn btn-danger m-1'>delete</button>
                <span className='bg-primary m-1 btn text-light'>{this.props.title}</span>
            </div>
        );
    }
}

export default Counter;