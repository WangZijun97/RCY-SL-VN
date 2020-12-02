import React from 'react';
import './App.css';
import * as data from './data.js';
import Node from './Node.js';

const initialFlags = {
    name: "default",
    research: {
        call: false,
        freeTime: false,
        recce: false,
        brochure: false,
        email: false
    },
    ncogoal: "",
    activity: "",
    cadetgoal: ""
};

const reducer = (state, action) => {
    const draftOfState = { ...state };
    action(draftOfState);
    return draftOfState;
}

const Game = () => {
    const [node, setNode] = React.useState("H1");
    const [flags, flagDispatch] = React.useReducer(reducer, initialFlags);

    return <Node trigger={setNode} data={data.getNode(node)} flags={flags} dispatch={flagDispatch} />;
}

export default Game;
