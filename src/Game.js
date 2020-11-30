import React from 'react';
import './App.css';
import * as data from './data.js';
import Node from './Node.js';

export class Game extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            node: "H1"
        }
        this.setNode = this.setNode.bind(this)
    }
    
    setNode(num) {
        this.setState({node: num})
    }
    
    render() {
        return (<Node trigger={this.setNode} data={data.getNode(this.state.node)} />)
    }
}

export default Game
        
        