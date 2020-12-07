import askArcNodes from './arcs/ask'
import devNodes from './arcs/dev'
import endNodes from './arcs/end'
import homeArcNodes from './arcs/home'
import learnArcNodes from './arcs/learn'
import planArcNodes from './arcs/plan'
import reflectArcNodes from './arcs/reflect'
import serveArcNodes from './arcs/serve'
import {getInitialFlags} from './Game'

const flags = {};

let nodeoof = {
    index: "oof",
    img: (<img />),
    text: "Still under development UwU. Please refresh page.",
    option: [{
        text: "Back to start",
        next: "H0",
        fx: (flags) => {Object.assign(flags, getInitialFlags())} //reset flags
    }]
}

const nodes = {
    ...homeArcNodes,
    ...learnArcNodes,
    ...planArcNodes,
    ...askArcNodes,
    ...serveArcNodes,
    ...reflectArcNodes,
    ...endNodes,
    ...devNodes
    
}   

export function getNode(i) {
    let node = nodes[i];
    if (node === undefined) {
        return nodeoof
    }
    return node;
}
