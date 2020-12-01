import React from 'react';
import './App.css';
import * as data from './data.js';
import Node from './Node.js';

const Game = () => {
    const [node, setNode] = React.useState("H1");
    return <Node trigger={setNode} data={data.getNode(node)} />
}

export default Game;
