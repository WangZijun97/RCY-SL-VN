import clsx from 'clsx';
import React from 'react';

/*
 * Schema of state:
 * askedQns: list of indices of asked questions
 */

const askedQnsReducer = (state, action) => {
    return [...state, action];
}

const createAvailableQnGetter = (numOfLines) => (askedQns) => 
    [...Array(numOfLines)].map((_, i) => i).filter((i) => !askedQns.includes(i));

const Dialogue = (props) => {
    const { 
        startOfConvo, 
        speakerClass, 
        convos, 
        name, 
        availableQnGetter = createAvailableQnGetter(convos.length) 
    } = props;

    const [askedQns, addQn] = React.useReducer(askedQnsReducer, []);
    const combinedSpeakerClass = clsx('other-speech', speakerClass);

    const availableQns = availableQnGetter(askedQns);

    const createButtonHandler = (qnIndex) => () => {
        addQn(qnIndex);
    }

    return (<div className="dialogue-container">
        <div>You talk to {name}.</div>
        {startOfConvo && <div className={combinedSpeakerClass}>{startOfConvo}</div>}
        {askedQns.map((qnIndex) => (<React.Fragment key={qnIndex}>
            <div class="self-speech">{convos[qnIndex].q}</div>
            {convos[qnIndex].a.map((ans) => (
                <div class={combinedSpeakerClass}>{ans}</div>
            ))}
        </React.Fragment>))}
        <div className="btn-container">
            {availableQns.map((qnIndex) => <button key={qnIndex} onClick={createButtonHandler(qnIndex)}>
            {convos[qnIndex].q}
            </button>)}
        </div>
    </div>)
}

export default Dialogue;
