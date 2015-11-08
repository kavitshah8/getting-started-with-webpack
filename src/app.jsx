import React from 'react';
import style from '../styles/main.css';

class HelloSayer extends React.Component {
    render() {
        return <p>Hello {this.props.name}!</p>;
    }
}

React.render(<HelloSayer name='Kavit'/>, document.getElementsByTagName('body')[0]);
