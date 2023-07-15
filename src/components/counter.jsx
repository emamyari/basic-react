import React, { Component } from 'react';
import Button from '@mui/material/Button';

class Counter extends Component {
    state = {}
 
    render() {
         let a=''
         this.props.tedad==0?a='zero':a=this.props.tedad
         return (
            <div>
                <button onClick={()=>this.props.hinc(this.props.id)} className='btn btn-success m-1'>+</button>
                <span className='bg-primary m-1 btn text-light'>{a} </span>
                <button className='btn btn-warning m-1'>-</button>
                <button onClick={()=>this.props.f(this.props.id)} className='btn btn-danger m-1'>delete</button>
                <span className='bg-primary m-1 btn text-light'>{this.props.title}</span>
                <span className='bg-warning m-1 btn text-light'>{this.props.unit}</span>
                <span className='bg-warning m-1 btn text-light'>{this.props.unit*this.props.tedad}</span>
                <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">OK</Button>
            </div>
        );
    }
}

export default Counter;