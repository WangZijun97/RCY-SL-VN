import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import consts from './consts';
import './timeline.css';

export const Entry = (props) => {
    const { arc, title, keyword, type, children } = props;

    const [expanded, setExpanded] = React.useState(false);

    const keywordClass = type === "Service" ? 'service' : 'learning';

    const handleButtonClick = () => {
        setExpanded(!expanded);
    }

    return (<div className="container">
        <div className="topText"><span className="arcName">{arc}</span> {arc && '\u2022'} <span className={keywordClass}>{type} ({keyword})</span></div>
        <div className="titleContainer">
            <div className="title">{title}</div>
            {children && <div className="iconBtn" onClick={handleButtonClick}><FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} /></div>}
        </div>
        {expanded && <div className="content">{children}</div>}
    </div>)
}

const Timeline = (props) => {
    const { flags } = props;

    return (<div className="timeline">
        <Entry arc="VIA Choice" type="Service" keyword="Sustainability" title={`Your unit decided to visit ${flags.name}.`}>
            {flags.name === consts.SESAME ?
                    `Your unit has a well-established relationship with ${flags.name}, so the children there are much more familiar with you. Hence, this decision was good because sustained engagement with a target community builds trust between the two of you, which makes any interaction that much more fruitful!` :
                    `As ${flags.name} is unfamiliar to your unit, the children there treat all of you as strangers in the beginning. It will take time to build up a good relationship with them. This choice reduced the effectiveness of this VIA project. Instead, you should consider a unit that you have already built up a sustained, trusting relationship with to eliminate this fear of strangers.`}
        </Entry>
    </div>);
}

export default Timeline;
