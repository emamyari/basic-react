import React, { Component } from 'react';

class Nav extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1"> تعداد کالا : {this.props.list.length} </span>
            </nav>
        );
    }
}

export default Nav;