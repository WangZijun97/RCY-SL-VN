import React from "react"
import consts from "./consts"
import {icons} from "./timeline"

export const getLocationChoiceText = (homeName) => {
    return [
        `Your unit decided to visit ${homeName}.`,
        homeName === consts.SESAME ?
        (<React.Fragment>Your unit has a well-established relationship with {homeName}, so the children there are much more familiar with you. Hence, <span className="emph">this decision was good</span> because <span className="emph">sustained engagement with a target community builds trust</span> between the two of you, which makes any interaction that much more fruitful!</React.Fragment>) :
        (<React.Fragment>As {homeName} is unfamiliar to your unit, the children there treat all of you as strangers in the beginning. It will take time to build up a good relationship with them. This choice reduced the effectiveness of this VIA project. You should <span className="emph">consider a unit that you have already built up a sustained, trusting relationship with to eliminate this fear of strangers</span>.</React.Fragment>),
        homeName === consts.SESAME ? icons.EXCELLENT : icons.BAD
    ]
}

export const getResearchTitleAndEntry = (researchState) => {

    if (researchState.recce) {
        return [
            "Your committee made a physical recce to the home before they started planning the VIA.",
            (<React.Fragment>By visiting the home personally, your committee was able to speak with the children beforehand and find out what the children would look forward. <span className="emph">Hence, you could come up with ideas for activities more suited for the children at the home.</span> Good job! :D~</React.Fragment>),
            icons.EXCELLENT
        ];
    }

    if (researchState.freeTime) {
        return [
            "Your committee called the Home Director before you started planning the VIA, learnt more about the home, and found out more about the activities which the children enjoy in their free time.",
            (<React.Fragment>Asking good questions during the call with the Home Director <span className="emph">helped your committee learn more about activities which most of the children at the home enjoy</span>. That's great! Next time, you could consider <span className="emph">physically visiting the home to get a more personal understanding of the children's wants</span>.</React.Fragment>),
            icons.GOOD,
        ];
    }

    if (researchState.brochure) {
        return [
            "Your committee searched the internet for more information about the home.",
            (<React.Fragment>The brochure gave your committee a rough understanding of the home and you could guess some activities which the children enjoy. That's okay. Next time, you could <span className="emph">contact the home (or better, visit them)</span> to better understand the home, <span className="emph">which would help you think of more engaging activities to do</span>.</React.Fragment>),
            icons.MEDIOCRE,
        ]
    }

    if (researchState.call) {
        return [
            "Your committee called the Home Director before you started planning the VIA, learnt more about the home, but did not find out much about what the children at the home would enjoy.",
            (<React.Fragment>This helped your committee understand more about the home, but didn't help you think of activities that would engage the children at the home. Perhaps you could have <span className="emph">asked better questions about the needs of the children, or visited the home to directly find out the needs of the children</span>.</React.Fragment>),
            icons.MEDIOCRE,
        ]
    }

    if (researchState.email > 0) {
        return [
            "Your committee sent an email to the home to ask about the children there, but did not receive any reply.",
            (<React.Fragment>As a result, you did not learn anything new about the home :( Perhaps you could have <span className="emph">tried a more personal and direct means of obtaining more information about the home</span>.</React.Fragment>),
                icons.BAD
            ]
    }

    return [
        "Your committee jumped straight into planning without researching more about the home.",
        (<React.Fragment>Hence, when your committee came up with ideas for the VIA, you had many incorrect assumptions about the children at the home. :( Perhaps you could have <span className="emph">learned more about the children at the home before planning the activities; this would have helped you think of more engaging activities</span>.</React.Fragment>),
            icons.BAD
        ];
}

export const getNcoGoalTitleAndEntry = (ncoGoalState) => {
    switch (ncoGoalState) {
        case consts.ncogoals.NONE:
            return [
                "Your committee started planning without setting any learning goals.",
                (<React.Fragment>Hence, your committee did not keep your own learning goals in mind when planning and executing the project. By not being intentional about learning, it is <span className="emph">difficult for new learning points from this project to take root</span>. Perhaps it would have been beneficial to <span className="emph">set such goals before planning begins</span>.</React.Fragment>),
                icons.BAD,
            ];

        case consts.ncogoals.VI:
            return [
                "You set learning goals for your committee before you started planning.",
                (<React.Fragment>While it is great that there are goals, <span className="emph">people are unlikely to take ownership of goals they are uninterested in</span>. It would be difficult for new learning points from this project to take root. It would have been beneficial to <span className="emph">let your committee set their own goals before planning begins</span>.</React.Fragment>),
                icons.MEDIOCRE,
            ];

        case consts.ncogoals.NOT_SPECIFIC: 
            return [
                "You made your committee set learning goals for yourselves before they started planning.",
                (<React.Fragment>That's great! Perhaps you could push your committee's learning more by <span className="emph">helping them craft more specific goals</span> [A Sec 2 set "My goal is to learn how to plan" as their goal]. <span className="emph">Being specific encourages them to intentionally try out roles or actions</span> which helps them progress towards these goals. </React.Fragment>),
                icons.MEDIOCRE,
            ];

        default:
            return [
                "You guided your committee to set specific goals for yourselves before they started planning.",
                (<React.Fragment>As a result, <span className="emph">they took ownership over their learning and intentionally worked towards the goals set</span>. At the very least, they would be more conscious of what they are doing, especially towards activities that are more relevant to what they want to learn. <span className="emph">Good job!</span></React.Fragment>),
                icons.EXCELLENT,
            ];
    }
}

export const getNcoRnGTitleAndEntry = (ncoRnGState) => {
    switch (ncoRnGState) {
        case consts.rolesandgoals.NONE:
        case consts.rolesandgoals.CHECK_ON_TIME:
            return [
                "You let the committee figure out their various roles, and the goals of these roles themselves.",
                (<React.Fragment>As a result, <span className="emph">they could take full ownership</span> and adjust the roles towards what each of them want to do. They would also be more motivated to work on and do well in the project. Great choice!</React.Fragment>),
                icons.EXCELLENT,
            ];

        case consts.rolesandgoals.TRADITION:
            return [
                "You asked the committee to just follow the previous year's roles and goals.",
                (<React.Fragment>While this helps them figure out their operations easily, some members disagree with their responsibilities as they were interested in other responsibilities. Some felt uninterested, resulting in others having to tank the project. Perhaps it would be helpful to <span className="emph">let them set their own roles and goals in the future</span>.</React.Fragment>),
                icons.BAD,
            ];

        case consts.rolesandgoals.OIC:
            return [
                "You asked the Admin IC and Admin 2ICs to just set the roles and goals for the rest of the batch.",
                (<React.Fragment>While this helps them figure out their operations easily, some members disagree with their responsibilities as they were interested in other responsibilities. Some felt uninterested, causing others having to tank the project. Perhaps it would be helpful to <span className="emph">facilitate the committee to set their roles and goals in the future</span>.</React.Fragment>),
                icons.BAD,
            ];

        default: {
            const varpart = ncoRnGState === consts.rolesandgoals.SCOLD ? "you scolded" : "you asked your YO to scold";
            return [
                `You did not give your committee an opportunity to set their own roles and goals. Instead of finding out why they were not doing their work, ${varpart} them.`,
                (<React.Fragment>That got the job done but some members only did their responsibilities out of obligation. This encouraged poor quality work and restricted learning as they were not engaged with their tasks. Perhaps it would be helpful to <span className="emph">facilitate the committee to set their roles and goals in future</span>.</React.Fragment>),
                icons.BAD
            ]
        }
    }
}

export const getCadetGoalTitleAndEntry = (cadetGoalState) => {
    switch (cadetGoalState) {
        case consts.cadetgoal.NONE: 
            return [
                "Your unit did not conduct a goal-setting session for the cadets the training before the VIA.",
                (<React.Fragment>As a result, the cadets did not keep their learning goals in mind during the VIA. By being unintentional about learning, it is <span className="emph">difficult for new learning points from this project to take root</span> within the cadets. Perhaps it would be beneficial in future to <span className="emph">set goals before VIA sessions</span>.</React.Fragment>),
                icons.BAD,
            ];

        case consts.cadetgoal.NCO:
            return [
                "Your unit set learning goals for the cadets to achieve during the VIA.",
                (<React.Fragment>While goals were set, <span className="emph">cadets are unlikely to accept goals your committee set</span>, as they may want to learn something else. Learning becomes unintentional, making it difficult for cadets to gain new learning points. In future, perhaps guide/facilitate <span className="emph">the cadets to set their own goals before VIA sessions</span>.</React.Fragment>),
                icons.MEDIOCRE,
            ];

        case consts.cadetgoal.BAD:
            return [
                "Your unit conducted a goal-setting session for the cadets during the training before the VIA. Some of the cadets set vague goals.",
                (<React.Fragment>It's great that cadets set their own goals! Perhaps you could push cadets' learning even further by helping them craft more specific goals [A cadet set "I want to learn as much as possible" as their goal]. Being specific helps cadets intentionally try out actions to work towards these goals. In future, <span className="emph">consider facilitating your cadets to develop their goals towards more specific ones</span>.</React.Fragment>),
                icons.MEDIOCRE,
            ];

        default:
            return [
                "Your unit conducted a goal-setting session for the cadets during the training before the VIA. The goals set were very specific.",
                (<React.Fragment>As a result, the cadets <span className="emph">took ownership over their learning and intentionally worked towards the goals set</span>. At the very least, they would be more conscious of what they are doing, especially towards activities that are more relevant to what they want to learn. Good job!</React.Fragment>),
                icons.EXCELLENT,
            ]
    }
}

export const getChitChatTitleAndEntry = (activity, chitChatAfter) => {
    if (chitChatAfter) {
        return [
            "Your cadets chit-chatted with the children at the home during the VIA project.",
            (<React.Fragment>Chit-chatting is good as it lets your cadets build rapport with the children at the home. Ultimately, the goal of your home visit is here to engage and emotionally connect with the children at your home, and <span className="emph">conversation allows them to establish that emotional connection</span>. Good job! :D</React.Fragment>),
            icons.EXCELLENT
        ];
    }

    return [
        `Despite the poor response from the children towards your unit's VIA, your cadets continued to ${activity}.`,
        (<React.Fragment>As your cadets never chatted with the children at the home, <span className="emph">they never made an emotional connection with the children</span> :( Remember that ultimately, you want to engage and connect with the children through the VIA. Perhaps next time you could <span className="emph">encourage your cadets to chit-chat instead</span>.</React.Fragment>),
        icons.BAD,
    ]
}

const debriefPerhapsClause = <React.Fragment>VIAs aren't just for our cadets to serve the community; they are also for our cadets to learn new skills and better understand and empathize with others in our society. <span className="emph">Consider debriefing both cadets and NCOs after each VIA session in the future</span>.</React.Fragment>

export const getDebriefTitleAndEntry = (debriefState) => {
    switch (debriefState) {
        case consts.debrief.NCO:
            return [
                "Only your committee was debriefed after the VIA.",
                (<React.Fragment><span className="emph">Debriefs are important in eliciting learning from raw experiences.</span> Without the consolidation, learning could be lost :( {debriefPerhapsClause}</React.Fragment>),
                icons.MEDIOCRE,
            ];

        case consts.debrief.CADET:
            return [
                "Only the cadets were debriefed after the VIA.",
                (<React.Fragment><span className="emph">Debriefs are important in eliciting learning from raw experiences.</span> Without the consolidation, learning could be lost :( {debriefPerhapsClause}</React.Fragment>),
                icons.MEDIOCRE,
            ];

        case consts.debrief.BOTH:
            return [
                "Both the cadets and your committee were debriefed after the VIA.",
                (<React.Fragment>By having debriefs, <span className="emph">cadets and your committee can consolidate and think about what they learnt and can learn from their experiences</span>. The debriefs helped to maximize your unit's learning from this VIA and cadets were able to learn new skills and empathize with people in our society. Well done :D</React.Fragment>),
                icons.EXCELLENT,
            ];

        default:
            return [
                "No debriefs were carried out after the VIA.",
                (<React.Fragment><span className="emph">Debriefs are important in eliciting learning from raw experiences.</span> Without the consolidation, learning could be lost :( {debriefPerhapsClause}</React.Fragment>),
                icons.BAD,
            ];
    }
}
