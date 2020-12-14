import React from 'react';
import './App.css';
import consts from './consts';
import * as data from './data.js';
import Node from './Node.js';

const initialFlags = JSON.stringify({
    name: "default",
    research: {
        call: false,
        freeTime: false,
        recce: false,
        brochure: false,
        email: 0,
    },
    sessions: "",
    ncogoal: consts.ncogoals.NONE,
    activity: "",
    rolesandgoals: consts.rolesandgoals.NONE,
    cadetgoal: consts.cadetgoal.NONE,
    finalChitChat: false,
    result: 0,
    lastNode: "",
    debrief: "",
    noTimeToDebriefCadets: false,
});

export const getInitialFlags = () => JSON.parse(initialFlags);

const reducer = (state, action) => {
    const draftOfState = { ...state };
    action(draftOfState);
    return draftOfState;
}

const keySequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']
const endingPos = keySequence.length - 1;

const Game = (props) => {
    const [node, setNode] = React.useState("H0");
    const [flags, flagDispatch] = React.useReducer(reducer, getInitialFlags());
    const [seqPos, setSeqPos] = React.useState(0);

    const { onMusicChange, onMusicDisable } = props;

    React.useEffect(() => {
        const keypressListener = (e) => {
            if (e.code === keySequence[seqPos]) {
                if (seqPos === endingPos) {
                    setSeqPos(0);
                    flagDispatch((flags) => { flags.lastNode = node; })
                    setNode("dev0");
                } else {
                    setSeqPos(seqPos + 1);
                }
            } else {
                setSeqPos(0);
            }
        };

        document.addEventListener('keydown', keypressListener);

        return () => {
            document.removeEventListener('keydown', keypressListener);
        };
   }, [seqPos, setSeqPos, node, flagDispatch]);

    React.useEffect(() => {
        if (node === 'H0.5') onMusicDisable();
    }, [node, onMusicDisable]);

    return (
        <Node trigger={setNode} data={data.getNode(node)} flags={flags} dispatch={flagDispatch} onMusicChange={onMusicChange}  />
    );

}

export default Game;
