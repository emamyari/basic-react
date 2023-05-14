import React, { Component } from 'react';

class Counter extends Component {
    state = {count:'0'}
    render() {
         let a=''
         this.state.count==0?a='zero':a=this.state.count
         return (

            <div>
                <button className='btn btn-success m-1'>+</button>
                <span className='bg-primary m-1 btn text-light'>{a} </span>
                <button className='btn btn-warning m-1'>-</button>
                <button className='btn btn-danger m-1'>delete</button>
            </div>
        );
    }
}

export default Counter;