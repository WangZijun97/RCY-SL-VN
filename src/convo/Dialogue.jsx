import clsx from 'clsx';
import React from 'react';

/*
 * Schema of state:
 * askedQns: list of indices of asked questions
 */

const askedQnsReducer = (state, action) => {
    return [...state, action];
}

const Dialogue = (props) => {
    const { startOfConvo, speakerClass, convos, name } = props;

    const [askedQns, addQn] = React.useReducer(askedQnsReducer, []);
    const combinedSpeakerClass = clsx('other-speech', speakerClass);

    const availableQns = [...Array(convos.length)].map((_, i) => i).filter((i) => askedQns.indexOf(i) < 0);

    const createButtonHandler = (qnIndex) => () => {
        addQn(qnIndex);
    }

    return (<div class="dialogue-container">
        <div>You talk to {name}.</div>
        <div class={combinedSpeakerClass}>{startOfConvo}</div>
        {askedQns.map((qnIndex) => (<React.Fragment key={qnIndex}>
            <div class="self-speech">{convos[qnIndex].q}</div>
            <div class={combinedSpeakerClass}>{convos[qnIndex].a}</div>
        </React.Fragment>))}
        <div className="button-container">
            {availableQns.map((qnIndex) => <button key={qnIndex} onClick={createButtonHandler(qnIndex)}>
            {convos[qnIndex].q}
            </button>)}
        </div>
    </div>)
}

export default Dialogue;
