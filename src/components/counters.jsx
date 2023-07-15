import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
   

    render() {
        return (
            <div>
               
                {this.props.list.map(item => <Counter tedad={item.qyt} 
                                                    title={item.title} 
                                                    id={item.id} 
                                                    unit={item.unitPrice}
                                                    f={this.props.dl} 
                                                    hinc={this.props.hi} />)}

            </div>
        );
    }
}

export default Counters;