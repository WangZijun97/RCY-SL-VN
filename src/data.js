import homeArcNodes from './arcs/home'
import learnArcNodes from './arcs/learn'
import askArcNodes from './arcs/ask'
import consts from './consts'
import bridge from './images/bridge.jpg'
import skull from './images/skull.png'
import smiley from './images/smiley.png'

const flags = {};

let nodeoof = {
    index: "oof",
    img: (<img />),
    text: "Still under development UwU. Please refresh page.",
    option: []
}

const nodes = {
    ...homeArcNodes,
    ...learnArcNodes,
    ...planArcNodes,
    ...askArcNodes   
    
}   

export function getNode(i) {
    let node = nodes[i];
    if (node === undefined) {
        return nodeoof
    }
    return node;
}
