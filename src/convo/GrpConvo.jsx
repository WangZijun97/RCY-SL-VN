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

/*
 * cssClassMap is a map from the speaker name to their CSS class
 *
 * Schema for responses:
 * {
 *      name: string,
 *      text: string
 * }
 *
 * convo is a list of responses
 * */

const GroupConvo = (props) => {
    const { 
        cssClassMap,
        startOfConvo, 
        convos, 
        availableQnGetter = createAvailableQnGetter(convos.length), 
    } = props;
    

    const [askedQns, addQn] = React.useReducer(askedQnsReducer, []); //count using askedQns.length, compare with max

    const availableQns = availableQnGetter(askedQns);

    const createButtonHandler = (qnIndex) => () => {
        addQn(qnIndex);
    }
    
    const ConvoToJsx = (convo) => {
        return convo.map(({name, text}, i) => (
            <div key={i} className={clsx('other-speech', cssClassMap[name])}>
                <div className="name">{name}</div>
                <div className="text">{text}</div>
            </div>
        ))
    }

    return (<div className="dialogue-container">
        {startOfConvo && ConvoToJsx(startOfConvo)}
        {askedQns.map((qnIndex) => (<React.Fragment key={qnIndex}>
            <div className="self-speech">{convos[qnIndex].q}</div>
            {ConvoToJsx(convos[qnIndex].a)}
        </React.Fragment>))}
        <div className="btn-container">
            {availableQns.map((qnIndex) => <button key={qnIndex} onClick={createButtonHandler(qnIndex)}>
                {convos[qnIndex].q}
            </button>)}
        </div>
    </div>)

}

export default GroupConvo;
