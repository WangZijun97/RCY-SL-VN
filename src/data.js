import homeArcNodes from './arcs/home'
import learnArcNodes from './arcs/learn'
import planArcNodes from './arcs/plan'
import askArcNodes from './arcs/ask'
import serveArcNodes from './arcs/serve'
import reflectArcNodes from './arcs/reflect'
import endNodes from './arcs/end'
import devNodes from './arcs/dev'
import consts from './consts'
import {initialFlags} from './Game'
import bridge from './images/bridge.jpg'
import skull from './images/skull.png'
import smiley from './images/smiley.png'

const flags = {};

let nodeoof = {
    index: "oof",
    img: (<img />),
    text: "Still under development UwU. Please refresh page.",
    option: [{
        text: "Back to start",
        next: "H0",
        fx: (flags) => flags = initialFlags //reset flags
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
