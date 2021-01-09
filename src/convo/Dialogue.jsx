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
        availableQnGetter = createAvailableQnGetter(convos.length), 
        maxQns = convos.length,
        endOfConvo = ""
    } = props;
    

    const [askedQns, addQn] = React.useReducer(askedQnsReducer, []); //count using askedQns.length, compare with max
    const combinedSpeakerClass = clsx('other-speech', speakerClass);

    const availableQns = availableQnGetter(askedQns);

    const createButtonHandler = (qnIndex) => () => {
        addQn(qnIndex);
    }
    
    const qnsLeft = maxQns - askedQns.length

    return (<div className="dialogue-container">
        <div>You talk to {name}.</div>
        {startOfConvo && <div className={combinedSpeakerClass}>{startOfConvo}</div>}
        {askedQns.map((qnIndex) => (<React.Fragment key={qnIndex}>
            <div className="self-speech">{convos[qnIndex].q}</div>
            {convos[qnIndex].a.map((ans, i) => (
                <div key={i} class={combinedSpeakerClass}>{ans}</div>
            ))}
        </React.Fragment>))}
        <div className="btn-container" style={{display: (maxQns !== null && qnsLeft < 1) ? "none" : "inherit"}}>
            {availableQns.map((qnIndex) => <button key={qnIndex} onClick={createButtonHandler(qnIndex)}>
            {convos[qnIndex].q}
            </button>)}
        </div>
        {/*number of questions left message*/}
        {
        maxQns !== null && <p className="informative">{qnsLeft > 0 ? `You can ask ${name} ${qnsLeft} more question` + (qnsLeft === 1 ? "" : "s") : `${name} is done with your questions`}</p>
        }
        { endOfConvo && (maxQns === null || qnsLeft === 0) && <p>{endOfConvo}</p> }  
    </div>)
    
    //if exceed max, add some form of im bored at the bottom
}

export default Dialogue;
