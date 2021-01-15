import {faChevronDown, faChevronUp, faGrinStars, faSmile, faMeh, faFrown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {getCadetGoalTitleAndEntry, getChitChatTitleAndEntry, getDebriefTitleAndEntry, getLocationChoiceText, getNcoGoalTitleAndEntry, getNcoRnGTitleAndEntry, getResearchTitleAndEntry} from './analysis';
import consts from './consts';
import './timeline.css';

export const icons = {
    EXCELLENT: [faGrinStars, '#8bc34a'],
    GOOD: [faSmile, '#ffeb3b'],
    MEDIOCRE: [faMeh, '#ff9100'],
    BAD: [faFrown, '#f44336'],
}

export const SimpleEntry = (props) => {
    const { children } = props;

    return (<div className="container">
        <div className="container-left">
            <div className="titleContainer">
                <div className="title">{children}</div>
            </div>
        </div>
        </div>)
}

export const Entry = (props) => {
    const { arc, title, keyword, type, icon = icons.BAD, children } = props;

    const [expanded, setExpanded] = React.useState(false);

    const keywordClass = type === "Service" ? 'service' : 'learning';
    const [iconMeta, iconColor] = icon;

    const handleButtonClick = () => {
        setExpanded(!expanded);
    }

    return (<div className="container">
        <div className="container-left">
            <div className="topText"><span className="arcName">{arc}</span> {arc && '\u2022'} <span className={keywordClass}>{keyword}</span></div>
            <div className="titleContainer">
                <div className="title">{title}</div>
            </div>
            {expanded && <div className="content">{children}</div>}
        </div>
        <FontAwesomeIcon icon={iconMeta} color={iconColor} size="lg" />
        {children && <div className="iconBtn" onClick={handleButtonClick}><FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} /></div>}
    </div>)
}

const getActivityDescription = (activity) => {
    switch (activity) {
        case consts.activities.SOCCER: 
            return [
                (<React.Fragment>Most (but not all of the children) enjoy soccer. As a result, most of them had great fun playing, and a break away from the boredom of daily life. This is a <span className="emph">decent (but not the best) choice as you fulfilled the needs of most of the children</span> there.</React.Fragment>), 
                icons.GOOD
            ]

        case consts.activities.KITE:
            return [
                (<React.Fragment>All of the children enjoy kite-fighting. As a result, they had incredible fun playing, a great break away from their usual routines. Nice! <span className="emph">This is the best choice as you fulfilled the needs of all of the children there.</span></React.Fragment>),
                icons.EXCELLENT
            ]

        case consts.activities.CHIT_CHAT:
            return [
                (<React.Fragment>During the chit-chat session, the children were happy to share about their lives, however, they hoped for more excitement. This is a decent option, though <span className="emph">there are more exciting activities</span> that the children enjoy. Try <span className="emph">learning more about the children</span> before planning the best activity to fulfil all their needs.</React.Fragment>),
                icons.MEDIOCRE
            ]

        default:
            return [
                (<React.Fragment><span className="emph">This wasn't very effective at engaging the children</span> as many of them returned to their regular routines instead. Perhaps it would be good to <span className="emph">find out more about the children before planning</span> next time?</React.Fragment>),
                icons.BAD
            ]
    }
}

const getSessionsTitleAndEntry = (sessionsState) => {
    switch (sessionsState) {
        case consts.sessions.ONE:
            return [
                `Your unit chose to have only ${sessionsState}.`,
                (<React.Fragment>After the VIA, the children wonder if any of you will be back ever again? They miss you. This choice does not help to build trust with the home's residents. <span className="emph">Consider having more sustained engagement</span> with them instead (short sessions are ok, it's more important to be regular).</React.Fragment>),
                icons.BAD,
            ];

        case consts.sessions.TWO_TGT:
            return [
                `Your unit chose to have only ${sessionsState}.`,
                (<React.Fragment>After the two sessions, the children look forward to the third, but it never happened... They miss you. This choice does not help to build trust with the home's residents. <span className="emph">Consider having more sustained engagement</span> with them instead (short sessions are ok, it's more important to be regular).</React.Fragment>),
                icons.MEDIOCRE,
            ];

        default:
            return [
                `Your unit chose to have ${sessionsState}.`,
                (<React.Fragment>By <span className="emph">continuously engaging with the home</span>, you managed to <span className="emph">build a long-lasting and trusting relationship</span> with the home, enhaning the effectivenss of any service learning project with them. Good choice!</React.Fragment>),
                icons.EXCELLENT,
            ];
    }
}

const Timeline = (props) => {
    const { flags } = props;

    const [locationChoiceTitle, locationChoiceEntry, locationChoiceIcon] = getLocationChoiceText(flags.name);

    const [researchTitle, researchEntry, researchIcon] = getResearchTitleAndEntry(flags.research);
    const [ncoGoalTitle, ncoGoalEntry, ncoGoalIcon] = getNcoGoalTitleAndEntry(flags.ncogoal);
    const [activityEntry, activityIcon] = getActivityDescription(flags.activity);
    const [ncoRnGTitle, ncoRnGEntry, ncoRnGIcon] = getNcoRnGTitleAndEntry(flags.rolesandgoals);
    const [sessionsTitle, sessionsEntry, sessionsIcon] = getSessionsTitleAndEntry(flags.sessions);
    const [cadetGoalTitle, cadetGoalEntry, cadetGoalIcon] = getCadetGoalTitleAndEntry(flags.cadetgoal);
    const [chitChatTitle, chitChatEntry, chitChatIcon] = getChitChatTitleAndEntry(flags.activity, flags.finalChitChat);
    const [debriefTitle, debriefEntry, debriefIcon] = getDebriefTitleAndEntry(flags.debrief);

    return (<div className="timeline">
        <Entry arc="VIA Choice" type="Service" keyword="Sustainability" title={locationChoiceTitle} icon={locationChoiceIcon}>
            {locationChoiceEntry}
        </Entry>
        <Entry arc="1. Learn" type="Learning" keyword="Individual Learning / Reciprocity" title={ncoGoalTitle} icon={ncoGoalIcon}>
            {ncoGoalEntry}
        </Entry>
        <Entry arc="1. Learn" type="Service" keyword="Meaningful Service" title={researchTitle} icon={researchIcon}>
            {researchEntry}
        </Entry>
        <Entry arc="2. Plan" type="Service" keyword="Meaningful Service" title={`Your unit decided to ${flags.activity}.`} icon={activityIcon}>
            {activityEntry}
        </Entry>
        <Entry arc="2. Plan" type="Learning" keyword="Individual Learning" title={ncoRnGTitle} icon={ncoRnGIcon}>
            {ncoRnGEntry}
        </Entry>
        <Entry arc="VIA Choice" type="Service" keyword="Sustainability" title={sessionsTitle} icon={sessionsIcon}>
            {sessionsEntry}
        </Entry>
        <Entry arc="3. Ask" type="Learning" keyword="Individual Learning / Reciprocity" title={cadetGoalTitle} icon={cadetGoalIcon}>
            {cadetGoalEntry}
        </Entry>
        <Entry arc="4. Serve" type="Service" keyword="Meaningful Service" title={chitChatTitle} icon={chitChatIcon}>
            {chitChatEntry}
        </Entry>
        <Entry arc="5. Reflect" type="Learning" keyword="Individual Learning / Reciprocity" title={debriefTitle} icon={debriefIcon}>
            {debriefEntry}
        </Entry>
    </div>);
}

export default Timeline;
