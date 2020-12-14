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

const getActivityDescription = (activity) => {
    switch (activity) {
        case consts.activities.SOCCER: 
            return 'Most (but not all of the children) enjoy soccer. As a result, most of them had great fun playing, and a break away from the boredom of daily life. This is a decent (but not the best) choice as you fulfilled the needs of most of the children there.'

        case consts.activities.KITE:
            return 'All of the children enjoy kite-fighting. As a result, they had incredible fun playing, a great break away from their usual routines. Nice! This is the best choice as you fulfilled the needs of all of the children there.'

        case consts.activities.CHIT_CHAT:
            return "During the chit-chat session, the children were happy to share about their lives, however, they did hope for a little more excitement. This is a decent option, though certainly there are more exciting activities out there that the children enjoy doing. Try learning more about the children before planning to figure out what is the best activity to fulfil all of their needs."

        default:
            return "This wasn't very effective at engaging the children as many of them returned to their regular routines instead. Perhaps it would be good to find out more about the children before planning next time?"
    }
}

const getNcoGoalTitleAndEntry = (ncoGoalState) => {
    switch (ncoGoalState) {
        case consts.ncogoals.NONE:
            return [
                "You did not set any learning goals with the NCOs.",
                "As a result, the NCOs did not keep their own learning goals in mind when planning and executing the whole project. By not being intentional about learning, it is difficult for new learning points from this project to take root within the NCOs. Mistakes made are then likely to repeat. Perhaps it would be beneficial in future to set such goals before the planning process begins."
            ];

        case consts.ncogoals.VI:
            return [
                "You set the learning goals for the NCOs.",
                "While it is great that there are goals, it is difficult for the NCOs to take ownership and strive towards goals that may not align with their own interest areas. As a result, any learning would not be intentional, and it would be more difficult for new learning points from this project to take root within the NCOs. Mistakes made are then likely to repeat. Perhaps it would be beneficial in future to allow the NCOs to set their own goals before the planning process begins."
            ];

        case consts.ncogoals.NOT_SPECIFIC: 
            return [
                "You allowed the NCOs to set goals for themselves.",
                "That's great! Perhaps you could push the NCOs' learning even further by helping them craft more specific goals [The NCOs set \"My goal is to learn how to plan\" as their goal]. Without specific goals, the NCOs might end up picking up lots of tips and idea that are \"good to know\" rather than learing points that they want for their personal development. Being specific also helps the NCOs with intentionally trying out roles or actions that will help them develop towards these goals. In future, perhaps it would be helpful to help develop your NCOs' goals towards more specific ones."
            ];

        default:
            return [
                "You guided the NCOs to set specific goals for themselves.",
                "As a result, they took ownership over their learning and intentionally worked towards the goals set. At the very least, they would be more conscious of what they are doing, especially towards activities that are more relevant to what they want to learn. Good job!"
            ];
    }
}

const getNcoRnGTitleAndEntry = (ncoRnGState) => {
    switch (ncoRnGState) {
        case consts.rolesandgoals.NONE:
        case consts.rolesandgoals.CHECK_ON_TIME:
            return [
                "You let the NCOs figure out their various roles, and the goals of these roles themselves.",
                "As a result, they could take full ownership and adjust the roles towards what each of them want to do. They would also be more motivated to work on and do well in the project. Great choice!"
            ];

        case consts.rolesandgoals.TRADITION:
            return [
                "You asked the NCOs to just follow the previous year's roles and goals.",
                "While this does help them figure out their operations easily, some of the NCOs did not agree with some of the responsibilities that they are assigned with, while others were sad that they were not assigned some responsibilities that they were interested in. As a result, there was less ownership over the project and a few of them had to tank the project. Perhaps it would be helpful to let the NCOs set their own roles and goals in future."
            ];

        case consts.rolesandgoals.OIC:
            return [
                "You asked the OIC to just set the roles and goals for the rest of the batch.",
                "While this does help them figure out their operations easily, some of the NCOs did not agree with some of the responsibilities that they are assigned with, while others were sad that they were not assigned some responsibilities that they were interested in. As a result, there was less ownership over the project and a few of them had to tank the project. Perhaps it would be helpful to guide/facilitate the NCOs to set their own roles and goals in future."
            ];

        default: {
            const varpart = ncoRnGState === consts.rolesandgoals.SCOLD ? "you scolded" : "you asked your YO to scold";
            return [
                `You did not give the NCOs an opportunity to set their own roles and goals, and ${varpart} them instead of finding out why they were not doing their work.`,
                "That got them to finish the job, but not to own it. As a result, some of the NCOs only did their responsibilities out of obligation. This encourages last minute and poor quality work, while also restricting learning as they would not be engaged with their tasks well. Perhaps it would be helpful to guide/facilitate the NCOs to set their own roles and goals in future."
            ]
        }
    }
}

const Timeline = (props) => {
    const { flags } = props;
    
    const [ncoGoalTitle, ncoGoalEntry] = getNcoGoalTitleAndEntry(flags.ncogoal);
    const [ncoRnGTitle, ncoRnGEntry] = getNcoRnGTitleAndEntry(flags.rolesandgoals);

    return (<div className="timeline">
        <Entry arc="VIA Choice" type="Service" keyword="Sustainability" title={`Your unit decided to visit ${flags.name}.`}>
            {flags.name === consts.SESAME ?
                    `Your unit has a well-established relationship with ${flags.name}, so the children there are much more familiar with you. Hence, this decision was good because sustained engagement with a target community builds trust between the two of you, which makes any interaction that much more fruitful!` :
                    `As ${flags.name} is unfamiliar to your unit, the children there treat all of you as strangers in the beginning. It will take time to build up a good relationship with them. This choice reduced the effectiveness of this VIA project. Instead, you should consider a unit that you have already built up a sustained, trusting relationship with to eliminate this fear of strangers.`}
        </Entry>
        <Entry arc="Learn" type="Learning" keyword="Individual Learning" title={ncoGoalTitle}>
            {ncoGoalEntry}
        </Entry>
        <Entry arc="Plan" type="Service" keyword="Meaningful Service" title={`Your unit decided to ${flags.activity}`}>
            {getActivityDescription(flags.activity)}
        </Entry>
        <Entry arc="Plan" type="Learning" keyword="Individual Learning" title={ncoRnGTitle}>
            {ncoRnGEntry}
        </Entry>
    </div>);
}

export default Timeline;
