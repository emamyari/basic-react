import React, { Component } from 'react';

class Counter extends Component {
    state = {count:10}
    render() {
        console.log(this.state.count)
         return (

            <div>
                <button className='btn btn-success m-1'>+</button>
                <span className='bg-primary m-1 btn text-light'>{this.state.count} </span>
                <button className='btn btn-warning m-1'>-</button>
                <button className='btn btn-danger m-1'>delete</button>
            </div>
        );
    }
}

export default Counter;