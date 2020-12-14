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

const getResearchTitleAndEntry = (researchState) => {
    if (researchState.recce) {
        return [
            "Your NCOs made a physical recce to the home before they started planning the VIA.",
            "By visiting the home personally, your NCOs had a first-hand understanding of the conditions at the home. They were also able to speak with the children beforehand and find out what the children would look forward to. This allowed your NCOs to better empathize with the children at the home and come up with ideas for activities more suited for the children at the home. Good job! :D"
        ];
    }

    if (researchState.freeTime) {
        return [
            "Your NCOs called the Home Director before they started planning the VI, learnt more about the home, and found out more about the activities which the children enjoy in their free time.",
            "Your NCOs asked good questions during the call with the Home Director, which helped them find out the activities which most of the children at the home enjoy. That's great! In the future, you could consider getting your NCOs to personally visit the home so that they can get a first-hand understanding of the conditions of the home. Speaking directly to the children would also help your NCOs better empathize with the needs of the children and let them have a more complete understanding of what all the children at the home would enjoy."
        ];
    }

    if (researchState.brochure) {
        return [
            "Your NCOs searched the internet for more information about the home.",
            "Reading the brochure allowed your NCOs to have a rough understanding of the conditions of the home and guess some of the activities which the children might enjoy. That's okay. Mext time, perhaps you could encourage your NCOs to contact the home directly (or even better, visit them) so that they would get a better understanding of the home, which would help them think of more engaging activities to do during their VIA."
        ]
    }

    if (researchState.call) {
        return [
            "Your NCOs called the Home Director before they started planning the VI, learnt more about the home, but did not find out much about what the children at the home would enjoy.",
            "Speaking with the Home Director helped your NCOs to understand more about the conditions of the home, but that didn't really help them think of activities that would engage all the children at the home. Next time, perhaps get your NCOs to keep in mind the purpose of researching more about the home beforehand -- to learn more about the residents there and what would interest them. That might help them ask better questions, or even think of an alternative mode of research that would help them find out more about what would engage the children at the home."
        ]
    }

    if (researchState.email > 0) {
        return [
            "Your NCOs sent an email to the home to ask about the children there, but did not receive any reply.",
            "As a result, they did not learn anything new about the home :( Perhaps you could have encouraged them to try a more personal and direct means of obtaining more information about the home."
        ]
    }

    return [
        "You let your NCOs jump straight into planning without researching more about the home.",
        "As a result, when your NCOs came up with ideas for activities to do during the VIA, they had many assumptions about the children at the home, many of which were not correct :( Perhaps you could have encouraged them to learn more about the children at the home before planning the activities; this would have help them think of activities which would better engage the children."
    ];
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
                "You let the NCOs start planning without setting any learning goals for them.",
                "As a result, the NCOs did not keep their own learning goals in mind when planning and executing the whole project. By not being intentional about learning, it is difficult for new learning points from this project to take root within the NCOs. Mistakes made are then likely to repeat. Perhaps it would be beneficial in future to set such goals before the planning process begins."
            ];

        case consts.ncogoals.VI:
            return [
                "You set learning goals for the NCOs before they started planning.",
                "While it is great that there are goals, it is difficult for the NCOs to take ownership and strive towards goals that may not align with their own interest areas. As a result, any learning would not be intentional, and it would be more difficult for new learning points from this project to take root within the NCOs. Mistakes made are then likely to repeat. Perhaps it would be beneficial in future to allow the NCOs to set their own goals before the planning process begins."
            ];

        case consts.ncogoals.NOT_SPECIFIC: 
            return [
                "You made the NCOs set learning goals for themselves before they started planning.",
                "That's great! Perhaps you could push the NCOs' learning even further by helping them craft more specific goals [The NCOs set \"My goal is to learn how to plan\" as their goal]. Without specific goals, the NCOs might end up picking up lots of tips and idea that are \"good to know\" rather than learing points that they want for their personal development. Being specific also helps the NCOs with intentionally trying out roles or actions that will help them develop towards these goals. In future, perhaps it would be helpful to help develop your NCOs' goals towards more specific ones."
            ];

        default:
            return [
                "You guided the NCOs to set specific goals for themselves before they started planning.",
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
                `You did not give the NCOs an opportunity to set their own roles and goals. Instead of finding out why they were not doing their work, ${varpart} them.`,
                "That got them to finish the job, but not to own it. As a result, some of the NCOs only did their responsibilities out of obligation. This encourages last minute and poor quality work, while also restricting learning as they would not be engaged with their tasks well. Perhaps it would be helpful to guide/facilitate the NCOs to set their own roles and goals in future."
            ]
        }
    }
}

const getSessionsTitleAndEntry = (sessionsState) => {
    switch (sessionsState) {
        case consts.sessions.ONE:
            return [
                `Your unit chose to have only ${sessionsState}.`,
                "After the VIA, the children wonder if any of you will be back ever again? They miss you. This choice does not help to build trust with the home's residents. Consider having more sustained engagement with them instead (short sessions are ok, it's more important to be regular)."
            ];

        case consts.sessions.TWO_TGT:
            return [
                `Your unit chose to have only ${sessionsState}.`,
                "After the two sessions, the children look forward to the third, but it never happened... They miss you. This choice does not help to build trust with the home's residents. Consider having more sustained engagement with them instead (short sessions are ok, it's more important to be regular)."
            ];

        default:
            return [
                `Your unit chose to have ${sessionsState}.`,
                "By continuously engaging with the home, you managed to build a long-lasting and trusting relationship with the home, enhaning the effectivenss of any service learning project with them. Good choice!"
            ];
    }
}

const getCadetGoalTitleAndEntry = (cadetGoalState) => {
    switch (cadetGoalState) {
        case consts.cadetgoal.NONE: 
            return [
                "Your unit did not conduct a goal-setting session for the cadets the training before the VIA.",
                "As a result, the cadets did not keep their own learning goals in mind when carrying out the whole project. By not being intentional about learning, it is difficult for new learning points from this project to take root within the cadets. Mistakes made are then likely to repeat. Perhaps it would be beneficial in future to set such goals the training before each VIA session begins."
            ];

        case consts.cadetgoal.NCO:
            return [
                "You encouraged the NCOs set learning goals for the cadets to achieve during the training before the VIA.",
                "While goals were set, cadets are less likely to take up these goals and own them when they are set by others. What about those who want to learn about something else? These cadets would not be focused on the learning point set on them during the VIA project. As a result, any learning would not be intentional, and it would be more difficult for new learning points from this project to take root within the NCOs. Mistakes made are then likely to repeat. Perhaps it would be beneficial in future to guide/facilitate (or get the NCOs to guide/facilitate) the cadets to set their own goals before the planning process begins."
            ];

        case consts.cadetgoal.BAD:
            return [
                "You encouraged the NCOs to conduct a goal-setting session for the cadets during the training before the VIA. Some of the cadets set vague goals.",
                "It is great that the cadets were able to set their own goals! Perhaps you could push the cadets' learning even further by helping them craft more specific goals [A cadet set \"I want to learn as much as possible\" as their goal]. Without specific goals, the cadets might end up picking up lots of tips and idea that are \"good to know\" rather than learing points that they want for their personal development. Being specific also helps the cadets with intentionally trying out actions that will help them develop towards these goals. In future, perhaps it would be helpful to guide/facilitate your cadets to develop their goals towards more specific ones."
            ];

        default:
            return [
                "You encouraged the NCOs to conduct a goal-setting session for the cadets during the training before the VIA. The goals set were very specific.",
                "As a result, the cadets took ownership over their learning and intentionally worked towards the goals set. At the very least, they would be more conscious of what they are doing, especially towards activities that are more relevant to what they want to learn. Good job!"
            ]
    }
}

const debriefPerhapsClause = "VIAs aren't just for our cadets to serve the community; they are also for our cadets to learn new skills and better understand and empathize with others in our society. Perhaps it would be good to have debriefs for both cadets and NCOs at the end of each VIA session in future."

const getDebriefTitleAndEntry = (debriefState) => {
    switch (debriefState) {
        case consts.debrief.NCO:
            return [
                "Only the NCOs were debriefed after the VIA.",
                "Debriefs are important in eliciting learning from raw experiences. Without the consolidation, learning could be lost :( " + debriefPerhapsClause
            ];

        case consts.debrief.CADET:
            return [
                "Only the cadets were debriefed after the VIA.",
                "Debriefs are important in eliciting learning from raw experiences. Without the consolidation, learning could be lost :( " + debriefPerhapsClause
            ];

        case consts.debrief.BOTH:
            return [
                "Both the cadets and the NCOs were debriefed after the VIA.",
                "By having debriefs, cadets and NCOs can consolidate and think about what they have learnt and can learn from the experiences that they have gone through. The debriefs were hugely helpful in maximizing your unit's learning from this VIA and your cadets were able to learn new skills and better understand and empathize with other people in our society. Well done :D"
            ];

        default:
            return [
                "No debriefs were carried out after the VIA.",
                "Debriefs are important in eliciting learning from raw experiences. Without the consolidation, learning could be lost :( " + debriefPerhapsClause
            ];
    }
}

const Timeline = (props) => {
    const { flags } = props;

    const [researchTitle, researchEntry] = getResearchTitleAndEntry(flags.research);
    const [ncoGoalTitle, ncoGoalEntry] = getNcoGoalTitleAndEntry(flags.ncogoal);
    const [ncoRnGTitle, ncoRnGEntry] = getNcoRnGTitleAndEntry(flags.rolesandgoals);
    const [sessionsTitle, sessionsEntry] = getSessionsTitleAndEntry(flags.sessions);
    const [cadetGoalTitle, cadetGoalEntry] = getCadetGoalTitleAndEntry(flags.cadetgoal);
    const [debriefTitle, debriefEntry] = getDebriefTitleAndEntry(flags.debrief);

    return (<div className="timeline">
        <Entry arc="VIA Choice" type="Service" keyword="Sustainability" title={`Your unit decided to visit ${flags.name}.`}>
            {flags.name === consts.SESAME ?
                    `Your unit has a well-established relationship with ${flags.name}, so the children there are much more familiar with you. Hence, this decision was good because sustained engagement with a target community builds trust between the two of you, which makes any interaction that much more fruitful!` :
                    `As ${flags.name} is unfamiliar to your unit, the children there treat all of you as strangers in the beginning. It will take time to build up a good relationship with them. This choice reduced the effectiveness of this VIA project. Instead, you should consider a unit that you have already built up a sustained, trusting relationship with to eliminate this fear of strangers.`}
        </Entry>
        <Entry arc="1. Learn" type="Service" keyword="Meaningful Service" title={researchTitle}>
            {researchEntry}
        </Entry>
        <Entry arc="1. Learn" type="Learning" keyword="Individual Learning" title={ncoGoalTitle}>
            {ncoGoalEntry}
        </Entry>
        <Entry arc="2. Plan" type="Service" keyword="Meaningful Service" title={`Your unit decided to ${flags.activity}.`}>
            {getActivityDescription(flags.activity)}
        </Entry>
        <Entry arc="2. Plan" type="Learning" keyword="Individual Learning" title={ncoRnGTitle}>
            {ncoRnGEntry}
        </Entry>
        <Entry arc="VIA Choice" type="Service" keyword="Sustainability" title={sessionsTitle}>
            {sessionsEntry}
        </Entry>
        <Entry arc="3. Ask" type="Learning" keyword="Individual Learning" title={cadetGoalTitle}>
            {cadetGoalEntry}
        </Entry>
        <Entry arc="5. Reflect" type="Learning" keyword="Reciprocity" title={debriefTitle}>
            {debriefEntry}
        </Entry>
    </div>);
}

export default Timeline;
