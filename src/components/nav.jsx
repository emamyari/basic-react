import React, { Component } from 'react';

class Nav extends Component {
    state = {}
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1"> تعداد کالا : {this.props.list.length} </span>
            </nav>
        );
    }
}

export default Nav;